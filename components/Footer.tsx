import Link from 'next/link';
import Image from 'next/image';
import styles from './Footer.module.css';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={`container ${styles.footerGrid}`}>
                <div className={styles.footerBrand}>
                    <Link href="/" className={styles.logoLink}>
                        <div className={styles.logo}>
                            <Image
                                src="/ll2.png"
                                alt="Dr. Feelgood"
                                width={320}
                                height={160}
                                className={styles.logoImage}
                                unoptimized
                            />
                        </div>
                    </Link>
                    <p className={styles.tagline}>Upgrade Yourself.</p>
                    <p className={styles.description}>
                        Clínica de bienestar integral y tratamientos estéticos de alto nivel.
                        Tecnología certificada y un equipo 100% de expertos clínicos para tu seguridad.
                    </p>
                </div>

                <div className={styles.footerLinks}>
                    <h3 className={styles.footerTitle}>Enlaces Rápidos</h3>
                    <ul>
                        <li><Link href="/">Inicio</Link></li>
                        <li><Link href="/servicios">Tratamientos</Link></li>
                        <li><Link href="/quienes-somos">Nosotros</Link></li>
                        <li><Link href="/contacto">Contacto</Link></li>
                    </ul>
                </div>

                <div className={styles.footerContact}>
                    <h3 className={styles.footerTitle}>Contacto</h3>
                    <address className={styles.address}>
                        <p><strong>Sucursal Apoquindo:</strong></p>
                        <p>Avda Apoquindo 6410 Of 504.</p>
                        <p>Ingreso Estacionamiento por calle Linneo 6393.</p>
                        <p className={styles.phone}>+56 2 3223 8587</p>
                        <p>apoquindo@drfeelgood.cl</p>
                        <p>Lun - Vie: 08:00 - 18:00</p>
                    </address>
                </div>
            </div>

            <div className={styles.footerBottom}>
                <div className="container">
                    <p>&copy; {new Date().getFullYear()} Dr. Feelgood - Upgrade Yourself. Todos los derechos reservados.</p>
                </div>
            </div>
        </footer>
    );
}
