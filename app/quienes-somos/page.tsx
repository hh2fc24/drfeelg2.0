import styles from "./page.module.css";
import Link from 'next/link';

export default function QuienesSomos() {
    return (
        <div className={styles.aboutPage}>
            <header className={styles.header}>
                <div className="container">
                    <div className="animate-fade-up">
                        <span className={styles.eyebrow}>Nuestra Clínica</span>
                    </div>
                    <h1 className={`${styles.title} animate-fade-up delay-1`}>
                        Atención profesional con foco en la <span className={styles.highlight}>seguridad</span>.
                    </h1>
                    <p className={`${styles.subtitle} animate-fade-up delay-2`}>
                        Trabajamos con evaluación clínica, tecnología certificada y un acompañamiento cercano en cada tratamiento.
                    </p>
                </div>
            </header>

            <section className={styles.manifestoSection}>
                <div className={`container ${styles.grid}`}>

                    <div className={`${styles.content} animate-fade-up`}>
                        <span className={styles.chapterNumber}>Sección I</span>
                        <h2 className={styles.sectionTitle}>Nuestro enfoque</h2>
                        <div className={styles.textBlock}>
                            <p className={styles.text}>
                                Cada paciente tiene necesidades distintas. Por eso priorizamos una evaluación responsable antes de indicar cualquier procedimiento.
                            </p>
                            <p className={styles.text}>
                                Nuestro objetivo es entregar una atención clara, segura y personalizada, con procedimientos acordes a cada caso y expectativas realistas.
                            </p>
                        </div>
                    </div>

                    <div className={`${styles.imageWrapper} animate-fade-up delay-2 mask-arch`}>
                        <div className={styles.imagePlaceholder} style={{ backgroundImage: "url('/images/instalaciones/clinica5.jpg')" }}></div>
                    </div>
                </div>
            </section>

            <section className={styles.missionVisionSection}>
                <div className="container">
                    <div className={styles.mvHeader}>
                        <span className={`${styles.chapterNumber} animate-fade-up`}>Sección II</span>
                        <h2 className={`${styles.sectionTitle} animate-fade-up delay-1`}>Misión y <span className={styles.highlight}>visión</span></h2>
                        <p className={`${styles.text} animate-fade-up delay-2`}>
                            Nuestro compromiso es entregar atención profesional, indicaciones claras y seguimiento responsable.
                        </p>
                    </div>

                    <div className={styles.mvGrid}>
                        <article className={`${styles.mvCard} animate-fade-up delay-1`}>
                            <span className={styles.mvLabel}>Misión</span>
                            <h3 className={styles.mvTitle}>Cuidado integral y personalizado</h3>
                            <p className={styles.mvText}>
                                Entregar tratamientos indicados según evaluación clínica, priorizando seguridad, información clara y resultados acordes a cada paciente.
                            </p>
                            <p className={styles.mvText}>
                                Acompañamos cada decisión terapéutica desde la evaluación inicial hasta los controles posteriores.
                            </p>
                        </article>

                        <article className={`${styles.mvCard} animate-fade-up delay-2`}>
                            <span className={styles.mvLabel}>Visión</span>
                            <h3 className={styles.mvTitle}>Ser una clínica confiable y cercana</h3>
                            <p className={styles.mvText}>
                                Queremos ser reconocidos por una atención seria, humana y profesional, tanto en estética como en podología clínica.
                            </p>
                            <p className={styles.mvText}>
                                Buscamos construir relaciones de confianza a través de una atención responsable y consistente en el tiempo.
                            </p>
                        </article>
                    </div>
                </div>
            </section>

            <section className={styles.techSection}>
                <div className="container">
                    <div className={styles.techHeader}>
                        <h2 className={`${styles.sectionTitle} animate-fade-up`}>Nuestro estándar <span className={styles.highlight}>de atención</span></h2>
                        <p className={`${styles.text} animate-fade-up delay-1`}>
                            Nuestra atención se apoya en tres pilares principales.
                        </p>
                    </div>

                    <div className={styles.featuresGrid}>
                        <div className={`${styles.featureBox} animate-fade-up delay-1`}>
                            <div className={styles.featureLine}></div>
                            <h3 className={styles.featureTitle}>Excelencia Humana</h3>
                            <p className={styles.featureText}>
                                Staff compuesto íntegramente por profesionales sanitarios homologados, cuyo criterio clínico prioriza siempre la seguridad y armonía por sobre excesos estéticos.
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

            <section className={styles.teamSection}>
                <div className="container">
                    <div className={styles.teamHeader}>
                        <h2 className={`${styles.sectionTitle} animate-fade-up`}>Nuestro <span className={styles.highlight}>Equipo</span></h2>
                        <p className={`${styles.text} animate-fade-up delay-1`}>
                            Conoce a los profesionales de la salud detrás de cada transformación. 
                        </p>
                    </div>

                    <div className={styles.teamGrid}>
                        <article className={`${styles.teamCard} animate-fade-up delay-1`}>
                            <div className={styles.teamImageWrapper}>
                                <div className={styles.teamImagePlaceholder} style={{ backgroundImage: "url('/images/equipo/monica_leon.jpg')" }}></div>
                            </div>
                            <h3 className={styles.teamName}>Dra. Mónica León</h3>
                            <span className={styles.teamRole}>Medicina Integrativa</span>
                        </article>

                        <article className={`${styles.teamCard} animate-fade-up delay-2`}>
                            <div className={styles.teamImageWrapper}>
                                <div className={styles.teamImagePlaceholder} style={{ backgroundImage: "url('/images/equipo/maria_paz.jpg')" }}></div>
                            </div>
                            <h3 className={styles.teamName}>María Paz</h3>
                            <span className={styles.teamRole}>Podóloga</span>
                        </article>

                        <article className={`${styles.teamCard} animate-fade-up delay-3`}>
                            <div className={styles.teamImageWrapper}>
                                <div className={styles.teamImagePlaceholder} style={{ backgroundImage: "url('/images/equipo/miriam_roman.jpg')" }}></div>
                            </div>
                            <h3 className={styles.teamName}>Miriam Román</h3>
                            <span className={styles.teamRole}>Enfermera</span>
                        </article>

                        <article className={`${styles.teamCard} animate-fade-up delay-1`}>
                            <div className={styles.teamImageWrapper}>
                                <div className={styles.teamImagePlaceholder} style={{ backgroundImage: "url('/images/equipo/nicole.jpg')" }}></div>
                            </div>
                            <h3 className={styles.teamName}>Nicole</h3>
                            <span className={styles.teamRole}>Enfermera y Administradora</span>
                        </article>

                        <article className={`${styles.teamCard} animate-fade-up delay-2`}>
                            <div className={styles.teamImageWrapper}>
                                <div className={styles.teamImagePlaceholder} style={{ backgroundImage: "url('/images/equipo/almendra_villesca.jpg')" }}></div>
                            </div>
                            <h3 className={styles.teamName}>Almendra Villesca</h3>
                            <span className={styles.teamRole}>Nutricionista</span>
                        </article>

                        <article className={`${styles.teamCard} animate-fade-up delay-3`}>
                            <div className={styles.teamImageWrapper}>
                                <div className={styles.teamImagePlaceholder} style={{ backgroundImage: "url('/images/equipo/paulina_munoz.jpg')" }}></div>
                            </div>
                            <h3 className={styles.teamName}>Paulina Muñoz</h3>
                            <span className={styles.teamRole}>Enfermera</span>
                        </article>
                    </div>
                </div>
            </section>

            <section className={styles.facilitiesSection}>
                <div className="container">
                    <div className={styles.teamHeader}>
                        <h2 className={`${styles.sectionTitle} animate-fade-up`}>Nuestras <span className={styles.highlight}>Instalaciones</span></h2>
                    </div>
                    <div className={styles.facilitiesGrid}>
                        <div className={`${styles.facilitiesGrid_item} animate-fade-up`} style={{ animationDelay: '0.1s' }}>
                            <div className={styles.facilitiesImage} style={{ backgroundImage: "url('/images/instalaciones/clinicaII.jpg')" }}></div>
                        </div>
                        <div className={`${styles.facilitiesGrid_item} animate-fade-up`} style={{ animationDelay: '0.2s' }}>
                            <div className={styles.facilitiesImage} style={{ backgroundImage: "url('/images/instalaciones/marca.jpg')" }}></div>
                        </div>
                        <div className={`${styles.facilitiesGrid_item} animate-fade-up`} style={{ animationDelay: '0.3s' }}>
                            <div className={styles.facilitiesImage} style={{ backgroundImage: "url('/images/equipo/doc_1.jpg')" }}></div>
                        </div>
                        <div className={`${styles.facilitiesGrid_item} animate-fade-up`} style={{ animationDelay: '0.4s' }}>
                            <div className={styles.facilitiesImage} style={{ backgroundImage: "url('/images/instalaciones/productos.jpg')" }}></div>
                        </div>
                        <div className={`${styles.facilitiesGrid_item} animate-fade-up`} style={{ animationDelay: '0.5s' }}>
                            <div className={styles.facilitiesImage} style={{ backgroundImage: "url('/images/instalaciones/clinica1.jpg')" }}></div>
                        </div>
                        <div className={`${styles.facilitiesGrid_item} animate-fade-up`} style={{ animationDelay: '0.6s' }}>
                            <div className={styles.facilitiesImage} style={{ backgroundImage: "url('/images/instalaciones/instalacion_0075.jpg')" }}></div>
                        </div>
                        <div className={`${styles.facilitiesGrid_item} animate-fade-up`} style={{ animationDelay: '0.7s' }}>
                            <div className={styles.facilitiesImage} style={{ backgroundImage: "url('/images/instalaciones/clinica4.jpg')" }}></div>
                        </div>
                        <div className={`${styles.facilitiesGrid_item} animate-fade-up`} style={{ animationDelay: '0.8s' }}>
                            <div className={styles.facilitiesImage} style={{ backgroundImage: "url('/images/instalaciones/instalacion_0072.jpg')" }}></div>
                        </div>
                    </div>
                </div>
            </section>

            <section className={styles.ctaSection}>
                <div className={`container text-center animate-fade-up`}>
                    <span className={styles.eyebrowDark}>Evaluación Clínica</span>
                    <h2 className={styles.ctaTitle}>Agenda tu evaluación.</h2>
                    <p className={styles.ctaText}>Estamos disponibles para orientarte según tu motivo de consulta.</p>
                    <Link href="/contacto" className="btn btn-primary">Solicitar Evaluación</Link>
                </div>
            </section>
        </div>
    );
}
