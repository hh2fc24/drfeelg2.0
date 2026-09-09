import { randomUUID } from "node:crypto";
import { NextResponse } from "next/server";
import { checkoutCatalog, type CheckoutItemId } from "@/lib/commerce";

export const runtime = "nodejs";

type RequestedItem = {
  id?: unknown;
  quantity?: unknown;
};

function isCheckoutItemId(value: string): value is CheckoutItemId {
  return Object.hasOwn(checkoutCatalog, value);
}

function getPublicOrigin(request: Request): string {
  const configuredUrl = process.env.NEXT_PUBLIC_SITE_URL;
  if (configuredUrl) return new URL(configuredUrl).origin;

  const forwardedHost = request.headers.get("x-forwarded-host");
  const forwardedProtocol = request.headers.get("x-forwarded-proto") || "https";
  if (forwardedHost) return `${forwardedProtocol}://${forwardedHost}`;

  return new URL(request.url).origin;
}

function hasValidOrigin(request: Request): boolean {
  const browserOrigin = request.headers.get("origin");
  if (!browserOrigin) return true;

  try {
    const requestHost = request.headers.get("x-forwarded-host") || new URL(request.url).host;
    return new URL(browserOrigin).host === requestHost;
  } catch {
    return false;
  }
}

export async function POST(request: Request) {
  if (!hasValidOrigin(request)) {
    return NextResponse.json({ error: "Solicitud no autorizada." }, { status: 403 });
  }

  const accessToken = process.env.MERCADO_PAGO_ACCESS_TOKEN;
  if (!accessToken) {
    return NextResponse.json(
      { error: "El pago todavía no está habilitado. Intenta nuevamente más tarde." },
      { status: 503 },
    );
  }

  const contentLength = Number(request.headers.get("content-length") || 0);
  if (contentLength > 10000) {
    return NextResponse.json({ error: "La solicitud es demasiado grande." }, { status: 413 });
  }

  let payload: { items?: RequestedItem[] };
  try {
    payload = (await request.json()) as { items?: RequestedItem[] };
  } catch {
    return NextResponse.json({ error: "El carrito no es válido." }, { status: 400 });
  }

  if (!Array.isArray(payload.items) || payload.items.length === 0 || payload.items.length > 25) {
    return NextResponse.json({ error: "El carrito no es válido." }, { status: 400 });
  }

  const consolidated = new Map<CheckoutItemId, number>();
  for (const requested of payload.items) {
    if (
      typeof requested.id !== "string" ||
      !isCheckoutItemId(requested.id) ||
      !Number.isInteger(requested.quantity) ||
      Number(requested.quantity) < 1 ||
      Number(requested.quantity) > 10
    ) {
      return NextResponse.json({ error: "Uno de los productos no es válido." }, { status: 400 });
    }

    const nextQuantity = (consolidated.get(requested.id) || 0) + Number(requested.quantity);
    if (nextQuantity > 10) {
      return NextResponse.json({ error: "La cantidad máxima por opción es 10." }, { status: 400 });
    }
    consolidated.set(requested.id, nextQuantity);
  }

  const items = Array.from(consolidated, ([id, quantity]) => {
    const catalogItem = checkoutCatalog[id];
    return {
      id,
      title: catalogItem.serviceTitle,
      description: catalogItem.optionLabel,
      currency_id: "CLP",
      quantity,
      unit_price: catalogItem.unitPrice,
      category_id: "health_beauty",
    };
  });

  const publicOrigin = getPublicOrigin(request);
  const externalReference = `drfeel-${Date.now()}-${randomUUID().slice(0, 8)}`;

  try {
    const mercadoPagoResponse = await fetch("https://api.mercadopago.com/checkout/preferences", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        items,
        external_reference: externalReference,
        statement_descriptor: "DR FEELGOOD",
        auto_return: "approved",
        back_urls: {
          success: `${publicOrigin}/pago/resultado?retorno=aprobado`,
          pending: `${publicOrigin}/pago/resultado?retorno=pendiente`,
          failure: `${publicOrigin}/pago/resultado?retorno=rechazado`,
        },
      }),
      cache: "no-store",
      signal: AbortSignal.timeout(12000),
    });

    const result = (await mercadoPagoResponse.json()) as {
      init_point?: string;
      message?: string;
    };

    if (!mercadoPagoResponse.ok || !result.init_point) {
      console.error("Mercado Pago preference error", {
        status: mercadoPagoResponse.status,
        message: result.message,
      });
      return NextResponse.json(
        { error: "Mercado Pago no pudo iniciar el pago. Intenta nuevamente." },
        { status: 502 },
      );
    }

    return NextResponse.json(
      { checkoutUrl: result.init_point },
      { headers: { "Cache-Control": "no-store" } },
    );
  } catch {
    return NextResponse.json(
      { error: "No pudimos conectar con Mercado Pago. Intenta nuevamente." },
      { status: 502 },
    );
  }
}
