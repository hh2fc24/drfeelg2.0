"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import styles from "./Navbar.module.css";

const navigation = [
  { href: "/", label: "Inicio" },
  { href: "/servicios", label: "Servicios" },
  { href: "/tecnologia", label: "Tecnologia" },
  { href: "/contacto", label: "Contacto" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
      <div className={`container ${styles.inner}`}>
        <Link href="/" className={styles.brand} onClick={() => setMenuOpen(false)}>
          <span className={styles.brandTop}>Laura Llamanos</span>
          <span className={styles.brandBottom}>Podologia Clinica y Estetica Facial</span>
        </Link>

        <nav className={`${styles.nav} ${menuOpen ? styles.open : ""}`}>
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={styles.link}
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}

          <Link
            href="/contacto#evaluacion"
            className={`btn btn-primary ${styles.cta}`}
            onClick={() => setMenuOpen(false)}
          >
            Evaluacion Gratuita
          </Link>
        </nav>

        <button
          type="button"
          className={styles.toggle}
          onClick={() => setMenuOpen((value) => !value)}
          aria-label="Abrir menu"
          aria-expanded={menuOpen}
        >
          <span className={`${styles.line} ${menuOpen ? styles.lineOpen : ""}`} />
        </button>
      </div>
    </header>
  );
}
