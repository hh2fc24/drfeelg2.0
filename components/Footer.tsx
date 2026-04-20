import Link from "next/link";
import styles from "./Footer.module.css";

const mapUrl =
  "https://www.google.com/maps?q=Av.+Apoquindo+6410+Oficina+504,+Las+Condes,+Santiago&output=embed";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.grid}`}>
        <div className={styles.brandBlock}>
          <p className="eyebrow">Laura Llamanos</p>
          <h2>Atencion profesional con foco medico, cercano y claro.</h2>
          <p className={styles.copy}>
            Evaluaciones gratuitas, podologia clinica y tecnologia aplicada
            para recuperacion de tejidos y salud del pie.
          </p>
          <Link href="/contacto#evaluacion" className="btn btn-primary">
            Evaluacion Gratuita
          </Link>
        </div>

        <div className={styles.linksBlock}>
          <div>
            <h3>Navegacion</h3>
            <ul>
              <li>
                <Link href="/">Inicio</Link>
              </li>
              <li>
                <Link href="/servicios">Servicios</Link>
              </li>
              <li>
                <Link href="/tecnologia">Tecnologia</Link>
              </li>
              <li>
                <Link href="/contacto">Contacto</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3>Direccion</h3>
            <address className={styles.address}>
              <p>Av. Apoquindo 6410, Oficina 504</p>
              <p>Ingreso por Linneo 6393</p>
              <p>Las Condes, Santiago</p>
              <p className={styles.phone}>+56 2 3223 8587</p>
            </address>
          </div>
        </div>

        <div className={styles.mapBlock}>
          <h3>Como llegar</h3>
          <div className={styles.mapFrame}>
            <iframe
              title="Mapa Laura Llamanos"
              src={mapUrl}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>

      <div className={styles.bottom}>
        <div className="container">
          <p>Laura Llamanos. Sitio orientado a evaluacion gratuita y contacto por WhatsApp.</p>
        </div>
      </div>
    </footer>
  );
}
