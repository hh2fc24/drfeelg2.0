"use client";

import { useEffect, useState } from "react";
import styles from "./ChatbotWidget.module.css";

const whatsappUrl =
  "https://wa.me/56900000000?text=Hola%2C%20quiero%20agendar%20una%20evaluacion%20gratuita%20en%20Laura%20Llamanos.";

export default function ChatbotWidget() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => setVisible(true), 1200);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <div className={`${styles.wrapper} ${visible ? styles.visible : ""}`}>
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Abrir WhatsApp de Laura Llamanos"
        className={styles.button}
      >
        <span className={styles.badge}>WhatsApp</span>
        <span className={styles.icon}>
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path
              d="M20.52 3.48A11.86 11.86 0 0 0 12.06 0C5.49 0 .16 5.34.16 11.9c0 2.1.55 4.15 1.6 5.95L0 24l6.31-1.65a11.85 11.85 0 0 0 5.75 1.47h.01c6.56 0 11.9-5.34 11.9-11.9a11.8 11.8 0 0 0-3.45-8.44ZM12.07 21.8a9.9 9.9 0 0 1-5.05-1.39l-.36-.21-3.74.98 1-3.65-.23-.37a9.82 9.82 0 0 1-1.52-5.25c0-5.45 4.44-9.89 9.9-9.89 2.64 0 5.12 1.03 6.98 2.9a9.8 9.8 0 0 1 2.89 6.98c0 5.45-4.44 9.89-9.88 9.9Zm5.42-7.41c-.3-.15-1.78-.88-2.06-.98-.28-.1-.48-.15-.68.15-.2.3-.78.98-.95 1.18-.18.2-.35.23-.66.08-.3-.15-1.27-.47-2.42-1.5a8.94 8.94 0 0 1-1.68-2.08c-.18-.3-.02-.46.13-.61.13-.13.3-.35.45-.53.15-.18.2-.3.3-.5.1-.2.05-.38-.03-.53-.08-.15-.68-1.64-.94-2.25-.25-.59-.5-.5-.69-.5h-.58c-.2 0-.53.08-.8.38-.27.3-1.03 1-1.03 2.43 0 1.43 1.05 2.81 1.2 3 .15.2 2.05 3.12 4.96 4.37.69.3 1.23.47 1.65.6.7.22 1.34.19 1.85.12.56-.08 1.78-.73 2.03-1.43.25-.7.25-1.3.18-1.43-.08-.13-.28-.2-.58-.35Z"
              fill="currentColor"
            />
          </svg>
        </span>
      </a>
    </div>
  );
}
