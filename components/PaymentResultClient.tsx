"use client";

import { useEffect } from "react";

export default function PaymentResultClient({ clearCart }: { clearCart: boolean }) {
  useEffect(() => {
    if (!clearCart) return;
    window.localStorage.removeItem("drfeelgood-cart-v1");
    window.dispatchEvent(new Event("drfeelgood-cart-cleared"));
  }, [clearCart]);

  return null;
}
