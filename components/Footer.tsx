import Link from 'next/link';
import Image from 'next/image';
import { clinicContact } from '@/lib/clinic';
import styles from './Footer.module.css';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={`container ${styles.footerGrid}`}>
                <div className={styles.footerBrand}>
                    <Link href="/" className={styles.logoLink}>
                        <div className={styles.logo}>
                            <Image
                                src="/ll2.png?v=20260305"
                                alt="Dr. Feelgood"
                                width={320}
                                height={160}
                                className={styles.logoImage}
                                unoptimized
                            />
                        </div>
                    </Link>
                    <p className={styles.tagline}>Clínica estética y podología</p>
                    <p className={styles.description}>
                        Atención profesional, tecnología certificada y acompañamiento personalizado para cada paciente.
                    </p>
                </div>

                <div className={styles.footerLinks}>
                    <h3 className={styles.footerTitle}>Enlaces Rápidos</h3>
                    <ul>
                        <li><Link href="/">Inicio</Link></li>
                        <li><Link href="/servicios">Tratamientos</Link></li>
                        <li><Link href="/tecnologia">Tecnología</Link></li>
                        <li><Link href="/quienes-somos">Nosotros</Link></li>
                        <li><Link href="/contacto">Contacto</Link></li>
                    </ul>
                </div>

                <div className={styles.footerContact}>
                    <h3 className={styles.footerTitle}>Contacto</h3>
                    <address className={styles.address}>
                        <p><strong>Sucursal Apoquindo:</strong></p>
                        <p>{clinicContact.addressLine1}</p>
                        <p>{clinicContact.addressLine2}</p>
                        <p>{clinicContact.city}</p>
                        <p className={styles.phone}>{clinicContact.phoneDisplay}</p>
                        <p>{clinicContact.email}</p>
                        <p>{clinicContact.hoursLabel}: {clinicContact.hoursValue}</p>
                    </address>
                </div>
            </div>

            <div className="container">
                <div className={styles.mapSection}>
                    <div className={styles.mapHeader}>
                        <h3 className={styles.footerTitle}>Ubicación</h3>
                        <p className={styles.mapText}>Encuéntranos en Apoquindo con acceso y dirección clara para el paciente.</p>
                    </div>
                    <div className={styles.mapFrame}>
                        <iframe
                            src={clinicContact.mapsEmbedUrl}
                            title="Mapa Dr. Feelgood Apoquindo"
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        />
                    </div>
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
