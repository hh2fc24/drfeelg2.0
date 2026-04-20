import EvaluationForm from "@/components/EvaluationForm";
import styles from "./page.module.css";

const mapUrl =
  "https://www.google.com/maps?q=Av.+Apoquindo+6410+Oficina+504,+Las+Condes,+Santiago&output=embed";

export default function ContactoPage() {
  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className={`container ${styles.heroGrid}`}>
          <div>
            <p className="eyebrow">Contacto</p>
            <h1>El formulario de evaluacion es el corazon de la conversion.</h1>
            <p className={styles.lead}>
              Capturamos el WhatsApp del lead, explicamos que incluye la
              evaluacion gratuita y llevamos al paciente directo a WhatsApp para
              continuar la coordinacion.
            </p>

            <div className={styles.infoGrid}>
              <article className={styles.infoCard}>
                <h2>Direccion</h2>
                <p>Av. Apoquindo 6410, Oficina 504</p>
                <p>Ingreso por Linneo 6393</p>
                <p>Las Condes, Santiago</p>
              </article>

              <article className={styles.infoCard}>
                <h2>Contacto directo</h2>
                <p>+56 2 3223 8587</p>
                <p>Respuesta por WhatsApp y seguimiento de evaluaciones.</p>
              </article>

              <article className={styles.infoCard}>
                <h2>Horario</h2>
                <p>Lunes a Viernes</p>
                <p>08:00 a 18:00 hrs</p>
              </article>
            </div>
          </div>

          <div id="evaluacion">
            <EvaluationForm />
          </div>
        </div>
      </section>

      <section className="section">
        <div className={`container ${styles.mapLayout}`}>
          <div className={styles.mapCopy}>
            <p className="eyebrow">Ubicacion</p>
            <h2>Mapa visible y direccion clara en el cierre de conversion.</h2>
            <p>
              El objetivo es que el usuario encuentre rapido como llegar y no
              abandone la decision despues de completar la evaluacion.
            </p>
          </div>

          <div className={styles.mapFrame}>
            <iframe
              title="Mapa de Laura Llamanos"
              src={mapUrl}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
