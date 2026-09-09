import Link from "next/link";
import PaymentResultClient from "@/components/PaymentResultClient";
import { formatCLP } from "@/lib/commerce";
import styles from "./page.module.css";

export const dynamic = "force-dynamic";

type PaymentStatus = "approved" | "pending" | "in_process" | "rejected" | "cancelled" | "unknown";

type PaymentVerification = {
  status: PaymentStatus;
  paymentId?: string;
  amount?: number;
  verified: boolean;
};

async function verifyPayment(paymentId?: string): Promise<PaymentVerification> {
  const accessToken = process.env.MERCADO_PAGO_ACCESS_TOKEN;
  if (!paymentId || !/^\d+$/.test(paymentId) || !accessToken) {
    return { status: "unknown", verified: false };
  }

  try {
    const response = await fetch(`https://api.mercadopago.com/v1/payments/${paymentId}`, {
      headers: { Authorization: `Bearer ${accessToken}` },
      cache: "no-store",
      signal: AbortSignal.timeout(10000),
    });
    if (!response.ok) return { status: "unknown", verified: false };

    const payment = (await response.json()) as {
      id?: number;
      status?: string;
      external_reference?: string;
      transaction_amount?: number;
      currency_id?: string;
    };
    const belongsToSite = payment.external_reference?.startsWith("drfeel-") === true;
    const isCLP = payment.currency_id === "CLP";
    if (!belongsToSite || !isCLP) return { status: "unknown", verified: false };

    const knownStatuses: PaymentStatus[] = ["approved", "pending", "in_process", "rejected", "cancelled"];
    const status = knownStatuses.includes(payment.status as PaymentStatus)
      ? (payment.status as PaymentStatus)
      : "unknown";

    return {
      status,
      verified: true,
      paymentId: String(payment.id || paymentId),
      amount: payment.transaction_amount,
    };
  } catch {
    return { status: "unknown", verified: false };
  }
}

export default async function PaymentResultPage({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  const params = await searchParams;
  const rawPaymentId = params.payment_id || params.collection_id;
  const paymentId = Array.isArray(rawPaymentId) ? rawPaymentId[0] : rawPaymentId;
  const rawReturn = params.retorno;
  const returnState = Array.isArray(rawReturn) ? rawReturn[0] : rawReturn;
  const payment = await verifyPayment(paymentId);

  const approved = payment.verified && payment.status === "approved";
  const pending = payment.verified && ["pending", "in_process"].includes(payment.status);
  const rejected = payment.verified && ["rejected", "cancelled"].includes(payment.status);

  const content = approved
    ? {
        eyebrow: "Pago confirmado",
        title: "Tu compra fue recibida",
        message: "Mercado Pago confirmó el pago. Guarda el número de operación y coordina tu atención con nuestro equipo.",
        tone: styles.success,
      }
    : pending
      ? {
          eyebrow: "Pago en revisión",
          title: "Estamos esperando la confirmación",
          message: "Mercado Pago todavía está procesando la operación. No vuelvas a pagar; revisa su estado en tu cuenta.",
          tone: styles.pending,
        }
      : rejected || returnState === "rechazado"
        ? {
            eyebrow: "Pago no completado",
            title: "No se realizó ningún cobro confirmado",
            message: "Puedes volver al carrito e intentarlo otra vez o elegir otro medio de pago en Mercado Pago.",
            tone: styles.failure,
          }
        : {
            eyebrow: "Verificación pendiente",
            title: "No pudimos confirmar la operación",
            message: "No asumas que el pago fue aprobado. Revisa el estado en Mercado Pago antes de volver a intentarlo.",
            tone: styles.pending,
          };

  return (
    <div className={styles.page}>
      <PaymentResultClient clearCart={approved} />
      <section className={`${styles.card} ${content.tone}`}>
        <div className={styles.icon} aria-hidden="true">
          {approved ? (
            <svg viewBox="0 0 24 24"><path d="m6.5 12.5 3.5 3.5 7.5-8" /></svg>
          ) : pending ? (
            <svg viewBox="0 0 24 24"><path d="M12 7v5l3 2M20 12a8 8 0 1 1-16 0 8 8 0 0 1 16 0Z" /></svg>
          ) : (
            <svg viewBox="0 0 24 24"><path d="M12 7v6M12 17h.01M20 12a8 8 0 1 1-16 0 8 8 0 0 1 16 0Z" /></svg>
          )}
        </div>
        <span className={styles.eyebrow}>{content.eyebrow}</span>
        <h1>{content.title}</h1>
        <p>{content.message}</p>

        {payment.verified ? (
          <dl className={styles.details}>
            {payment.paymentId ? (
              <div>
                <dt>Operación</dt>
                <dd>{payment.paymentId}</dd>
              </div>
            ) : null}
            {typeof payment.amount === "number" ? (
              <div>
                <dt>Total</dt>
                <dd>{formatCLP(payment.amount)}</dd>
              </div>
            ) : null}
          </dl>
        ) : null}

        <div className={styles.actions}>
          <Link href="/servicios#catalogo" className="btn btn-primary">
            Volver a tratamientos
          </Link>
          <Link href="/contacto" className="btn btn-secondary">
            Contactar a la clínica
          </Link>
        </div>
      </section>
    </div>
  );
}
