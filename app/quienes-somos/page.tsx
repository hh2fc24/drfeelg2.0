import styles from "./page.module.css";
import Link from 'next/link';

export default function QuienesSomos() {
    return (
        <div className={styles.aboutPage}>
            <header className={styles.header}>
                <div className="container">
                    <div className="animate-fade-up">
                        <span className={styles.eyebrow}>El Manifiesto</span>
                    </div>
                    <h1 className={`${styles.title} animate-fade-up delay-1`}>
                        Una Nueva Visión de la <span className={styles.highlight}>Estética</span>.
                    </h1>
                    <p className={`${styles.subtitle} animate-fade-up delay-2`}>
                        Rechazamos las transformaciones invasivas. Celeramos la elevación de tu belleza natural a través de la ciencia, la empatía y la precisión médica.
                    </p>
                </div>
            </header>

            <section className={styles.manifestoSection}>
                <div className={`container ${styles.grid}`}>

                    <div className={`${styles.content} animate-fade-up`}>
                        <span className={styles.chapterNumber}>Capítulo I</span>
                        <h2 className={styles.sectionTitle}>La Filosofía </h2>
                        <div className={styles.textBlock}>
                            <p className={styles.text}>
                                No importa si eres hombre o mujer, joven o mayor, simplemente tienes derecho a sentirte bien contigo mismo. Pero &quot;sentirse bien&quot; no debería requerir perder tu identidad en un quirófano.
                            </p>
                            <p className={styles.text}>
                                Nacimos como una antítesis a la estética rápida e irresponsable. Nuestro equipo clínico se dedica a diseñar hojas de ruta hiper-personalizadas. Intervenimos con sutileza, apoyándonos en la tecnología de grado médico más refinada del mundo para que te veas más descansado, más firme, pero siempre siendo tú.
                            </p>
                        </div>
                    </div>

                    <div className={`${styles.imageWrapper} animate-fade-up delay-2 mask-arch`}>
                        <div className={styles.imagePlaceholder} style={{ backgroundImage: "url('https://images.unsplash.com/photo-1512413914488-dc1e102f9e41?auto=format&fit=crop&q=80&w=800')" }}></div>
                    </div>
                </div>
            </section>

            <section className={styles.techSection}>
                <div className="container">
                    <div className={styles.techHeader}>
                        <h2 className={`${styles.sectionTitle} animate-fade-up`}>El Estándar <span className={styles.highlight}>Dr. Feelgood</span></h2>
                        <p className={`${styles.text} animate-fade-up delay-1`}>
                            Nuestra promesa clínica descansa sobre tres pilares innegociables.
                        </p>
                    </div>

                    <div className={styles.featuresGrid}>
                        <div className={`${styles.featureBox} animate-fade-up delay-1`}>
                            <div className={styles.featureLine}></div>
                            <h3 className={styles.featureTitle}>Excelencia Humana</h3>
                            <p className={styles.featureText}>
                                Staff compuesto íntegramente por profesionales sanitarios homologados, cuyo criterio médico prioriza siempre la seguridad y armonía por sobre excesos estéticos.
                            </p>
                        </div>

                        <div className={`${styles.featureBox} animate-fade-up delay-2`}>
                            <div className={styles.featureLine}></div>
                            <h3 className={styles.featureTitle}>Tecnología Certificada</h3>
                            <p className={styles.featureText}>
                                Desde el análisis de piel con Inteligencia Artificial hasta plataformas inglesas y alemanas (FDA/CE) de láser de baja frecuencia y regeneración dérmica.
                            </p>
                        </div>

                        <div className={`${styles.featureBox} animate-fade-up delay-3`}>
                            <div className={styles.featureLine}></div>
                            <h3 className={styles.featureTitle}>Acompañamiento Total</h3>
                            <p className={styles.featureText}>
                                El bienestar estético no es un evento aislado. Nuestros tratamientos de escultura corporal incluyen apoyo nutricional inteligente y kinesiológico.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className={styles.ctaSection}>
                <div className={`container text-center animate-fade-up`}>
                    <span className={styles.eyebrowDark}>Evaluación Clínica</span>
                    <h2 className={styles.ctaTitle}>Empieza tu transición hoy.</h2>
                    <p className={styles.ctaText}>Da el paso hacia un cuidado personal de nivel superior.</p>
                    <Link href="/contacto" className="btn btn-primary">Agendar Diagnóstico Personalizado</Link>
                </div>
            </section>
        </div>
    );
}
