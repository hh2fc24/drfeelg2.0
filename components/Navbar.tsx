'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import styles from './Navbar.module.css';

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

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
                        src="/ll2.png"
                        alt="Dr. Feelgood"
                        width={220}
                        height={110}
                        className={styles.logoImage}
                        priority
                        unoptimized
                    />
                </Link>

                {/* Desktop Menu */}
                <nav className={`${styles.navLinks} ${menuOpen ? styles.navOpen : ''}`}>
                    <Link href="/" className={styles.navLink} onClick={() => setMenuOpen(false)}>Inicio</Link>
                    <Link href="/servicios" className={styles.navLink} onClick={() => setMenuOpen(false)}>Tratamientos</Link>
                    <Link href="/quienes-somos" className={styles.navLink} onClick={() => setMenuOpen(false)}>Nosotros</Link>
                    <Link href="/contacto" className={styles.navLink} onClick={() => setMenuOpen(false)}>Contacto</Link>

                    <Link href="/contacto" className={`btn btn-primary ${styles.ctaBtn}`} onClick={() => setMenuOpen(false)}>
                        Reservar Hora
                    </Link>
                </nav>

                {/* Mobile menu button */}
                <button
                    className={styles.menuToggle}
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle Navigation"
                >
                    <span className={`${styles.hamburger} ${menuOpen ? styles.hamburgerOpen : ''}`}></span>
                </button>
            </div>
        </header>
    );
}
