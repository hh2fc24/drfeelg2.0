'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { useCart } from '@/components/CartProvider';
import styles from './Navbar.module.css';

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const { itemCount, openCart } = useCart();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
            <div className={`container ${styles.navbar}`}>
                <Link href="/" className={styles.logo}>
                    <Image
                        src="/logo-dr-original.png"
                        alt="Dr. Feelgood"
                        width={2000}
                        height={2000}
                        sizes="(max-width: 1100px) 104px, 120px"
                        className={styles.logoImage}
                        priority
                    />
                </Link>

                {/* Desktop Menu */}
                <nav id="main-navigation" className={`${styles.navLinks} ${menuOpen ? styles.navOpen : ''}`} aria-label="Navegación principal">
                    <Link href="/" className={styles.navLink} onClick={() => setMenuOpen(false)}>Inicio</Link>
                    <Link href="/servicios" className={styles.navLink} onClick={() => setMenuOpen(false)}>Tratamientos</Link>
                    <Link href="/tecnologia" className={styles.navLink} onClick={() => setMenuOpen(false)}>Tecnología</Link>
                    <Link href="/quienes-somos" className={styles.navLink} onClick={() => setMenuOpen(false)}>Nosotros</Link>
                    <Link href="/contacto" className={styles.navLink} onClick={() => setMenuOpen(false)}>Contacto</Link>

                    <Link href="/contacto" className={`btn btn-primary ${styles.ctaBtn}`} onClick={() => setMenuOpen(false)}>
                        Evaluación Gratuita
                    </Link>
                </nav>

                <div className={styles.actions}>
                    <button
                        type="button"
                        className={styles.cartButton}
                        onClick={openCart}
                        aria-label={`Abrir carrito, ${itemCount} ${itemCount === 1 ? 'producto' : 'productos'}`}
                    >
                        <svg viewBox="0 0 24 24" aria-hidden="true">
                            <path d="M3 4h2l2.1 10.1a2 2 0 0 0 2 1.6h7.8a2 2 0 0 0 2-1.6L20 7H6M9.5 20a.8.8 0 1 1-1.6 0 .8.8 0 0 1 1.6 0Zm8 0a.8.8 0 1 1-1.6 0 .8.8 0 0 1 1.6 0Z" />
                        </svg>
                        <span className={styles.cartLabel}>Carrito</span>
                        {itemCount > 0 ? <span className={styles.cartCount}>{itemCount}</span> : null}
                    </button>

                    <button
                        className={styles.menuToggle}
                        onClick={() => setMenuOpen(!menuOpen)}
                        aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
                        aria-expanded={menuOpen}
                        aria-controls="main-navigation"
                    >
                        <span className={`${styles.hamburger} ${menuOpen ? styles.hamburgerOpen : ''}`}></span>
                    </button>
                </div>
            </div>
        </header>
    );
}
