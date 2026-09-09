"use client";

import Image from "next/image";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import {
  checkoutCatalog,
  formatCLP,
  type CheckoutItemId,
} from "@/lib/commerce";
import styles from "./CartProvider.module.css";

type CartLine = {
  id: CheckoutItemId;
  quantity: number;
};

type CartContextValue = {
  lines: CartLine[];
  itemCount: number;
  isOpen: boolean;
  addItem: (id: CheckoutItemId) => void;
  openCart: () => void;
  closeCart: () => void;
};

const STORAGE_KEY = "drfeelgood-cart-v1";
const CartContext = createContext<CartContextValue | null>(null);

function isCheckoutItemId(value: string): value is CheckoutItemId {
  return Object.hasOwn(checkoutCatalog, value);
}

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [lines, setLines] = useState<CartLine[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [isReady, setIsReady] = useState(false);
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [checkoutError, setCheckoutError] = useState("");
  const drawerRef = useRef<HTMLElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    let restoredLines: CartLine[] = [];
    try {
      const saved = window.localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved) as Array<{ id?: unknown; quantity?: unknown }>;
        if (Array.isArray(parsed)) {
          restoredLines = parsed
            .filter(
              (line): line is CartLine =>
                typeof line.id === "string" &&
                isCheckoutItemId(line.id) &&
                Number.isInteger(line.quantity) &&
                Number(line.quantity) >= 1,
            )
            .map((line) => ({ ...line, quantity: Math.min(line.quantity, 10) }));
        }
      }
    } catch {
      window.localStorage.removeItem(STORAGE_KEY);
    }

    const restoreTimer = window.setTimeout(() => {
      setLines(restoredLines);
      setIsReady(true);
    }, 0);

    return () => window.clearTimeout(restoreTimer);
  }, []);

  useEffect(() => {
    if (!isReady) return;
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(lines));
    } catch {
      // The cart remains usable for the current visit when storage is unavailable.
    }
  }, [isReady, lines]);

  useEffect(() => {
    const clearCart = () => setLines([]);
    window.addEventListener("drfeelgood-cart-cleared", clearCart);
    return () => window.removeEventListener("drfeelgood-cart-cleared", clearCart);
  }, []);

  useEffect(() => {
    if (!isOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
        return;
      }

      if (event.key !== "Tab" || !drawerRef.current) return;
      const focusable = Array.from(
        drawerRef.current.querySelectorAll<HTMLElement>(
          'button:not([disabled]), a[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])',
        ),
      );
      if (focusable.length === 0) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen]);

  const addItem = useCallback((id: CheckoutItemId) => {
    setLines((current) => {
      const existing = current.find((line) => line.id === id);
      if (existing) {
        return current.map((line) =>
          line.id === id ? { ...line, quantity: Math.min(line.quantity + 1, 10) } : line,
        );
      }
      return [...current, { id, quantity: 1 }];
    });
    setCheckoutError("");
    setIsOpen(true);
  }, []);

  const updateQuantity = (id: CheckoutItemId, quantity: number) => {
    if (quantity <= 0) {
      setLines((current) => current.filter((line) => line.id !== id));
      return;
    }
    setLines((current) =>
      current.map((line) =>
        line.id === id ? { ...line, quantity: Math.min(quantity, 10) } : line,
      ),
    );
  };

  const subtotal = lines.reduce(
    (total, line) => total + checkoutCatalog[line.id].unitPrice * line.quantity,
    0,
  );
  const itemCount = lines.reduce((total, line) => total + line.quantity, 0);

  const startCheckout = async () => {
    if (lines.length === 0 || isCheckingOut) return;
    setIsCheckingOut(true);
    setCheckoutError("");

    try {
      const response = await fetch("/api/mercado-pago/preference", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ items: lines }),
      });
      const result = (await response.json()) as { checkoutUrl?: string; error?: string };
      if (!response.ok || !result.checkoutUrl) {
        throw new Error(result.error || "No pudimos iniciar el pago.");
      }
      window.location.assign(result.checkoutUrl);
    } catch (error) {
      setCheckoutError(
        error instanceof Error
          ? error.message
          : "No pudimos conectar con Mercado Pago. Intenta nuevamente.",
      );
      setIsCheckingOut(false);
    }
  };

  const contextValue = useMemo<CartContextValue>(
    () => ({
      lines,
      itemCount,
      isOpen,
      addItem,
      openCart: () => setIsOpen(true),
      closeCart: () => setIsOpen(false),
    }),
    [addItem, isOpen, itemCount, lines],
  );

  return (
    <CartContext.Provider value={contextValue}>
      {children}
      {isOpen ? (
        <div className={styles.overlay} onMouseDown={() => setIsOpen(false)}>
          <aside
            ref={drawerRef}
            className={styles.drawer}
            role="dialog"
            aria-modal="true"
            aria-labelledby="cart-title"
            onMouseDown={(event) => event.stopPropagation()}
          >
            <div className={styles.header}>
              <div>
                <span className={styles.eyebrow}>Tu selección</span>
                <h2 id="cart-title" className={styles.title}>Carrito de compras</h2>
              </div>
              <button
                ref={closeButtonRef}
                type="button"
                className={styles.closeButton}
                aria-label="Cerrar carrito"
                onClick={() => setIsOpen(false)}
              >
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M6 6l12 12M18 6 6 18" />
                </svg>
              </button>
            </div>

            <div className={styles.content}>
              {lines.length === 0 ? (
                <div className={styles.emptyState}>
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M5 8h14l-1 12H6L5 8Zm3 0V6a4 4 0 0 1 8 0v2" />
                  </svg>
                  <h3>Tu carrito está vacío</h3>
                  <p>Explora los tratamientos con precio y agrega las opciones que quieras pagar.</p>
                  <button type="button" className="btn btn-primary" onClick={() => setIsOpen(false)}>
                    Seguir explorando
                  </button>
                </div>
              ) : (
                <ul className={styles.lines}>
                  {lines.map((line) => {
                    const item = checkoutCatalog[line.id];
                    return (
                      <li key={line.id} className={styles.line}>
                        <div className={styles.imageWrap}>
                          <Image src={item.imageUrl} alt="" fill sizes="80px" className={styles.image} />
                        </div>
                        <div className={styles.lineBody}>
                          <h3>{item.serviceTitle}</h3>
                          <p>{item.optionLabel}</p>
                          <strong>{formatCLP(item.unitPrice)}</strong>
                          <div className={styles.lineActions}>
                            <div className={styles.quantity} aria-label={`Cantidad de ${item.serviceTitle}`}>
                              <button
                                type="button"
                                aria-label="Disminuir cantidad"
                                onClick={() => updateQuantity(line.id, line.quantity - 1)}
                              >
                                −
                              </button>
                              <span aria-live="polite">{line.quantity}</span>
                              <button
                                type="button"
                                aria-label="Aumentar cantidad"
                                disabled={line.quantity >= 10}
                                onClick={() => updateQuantity(line.id, line.quantity + 1)}
                              >
                                +
                              </button>
                            </div>
                            <button
                              type="button"
                              className={styles.removeButton}
                              onClick={() => updateQuantity(line.id, 0)}
                            >
                              Eliminar
                            </button>
                          </div>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              )}
            </div>

            {lines.length > 0 ? (
              <div className={styles.footer}>
                <div className={styles.totalRow}>
                  <span>Subtotal</span>
                  <strong>{formatCLP(subtotal)}</strong>
                </div>
                <p className={styles.paymentNote}>Pago seguro procesado por Mercado Pago Chile.</p>
                {checkoutError ? (
                  <p className={styles.error} role="alert">{checkoutError}</p>
                ) : null}
                <button
                  type="button"
                  className={`btn btn-primary ${styles.checkoutButton}`}
                  disabled={isCheckingOut}
                  onClick={startCheckout}
                >
                  {isCheckingOut ? "Conectando…" : "Pagar con Mercado Pago"}
                </button>
              </div>
            ) : null}
          </aside>
        </div>
      ) : null}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart debe usarse dentro de CartProvider");
  return context;
}
