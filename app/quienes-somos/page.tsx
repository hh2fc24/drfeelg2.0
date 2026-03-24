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
                        Rechazamos las transformaciones invasivas. Celebramos la elevación de tu belleza natural a través de la ciencia, la empatía y la precisión médica.
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

            <section className={styles.missionVisionSection}>
                <div className="container">
                    <div className={styles.mvHeader}>
                        <span className={`${styles.chapterNumber} animate-fade-up`}>Capítulo II</span>
                        <h2 className={`${styles.sectionTitle} animate-fade-up delay-1`}>Misión y <span className={styles.highlight}>Visión</span></h2>
                        <p className={`${styles.text} animate-fade-up delay-2`}>
                            Nuestro compromiso institucional integra excelencia clínica, selección rigurosa de marcas y un acompañamiento permanente para resultados sostenibles y seguros.
                        </p>
                    </div>

                    <div className={styles.mvGrid}>
                        <article className={`${styles.mvCard} animate-fade-up delay-1`}>
                            <span className={styles.mvLabel}>Misión</span>
                            <h3 className={styles.mvTitle}>Cuidado integral con estándar superior</h3>
                            <p className={styles.mvText}>
                                Entregar protocolos personalizados basados en evidencia, utilizando productos y aparatología de marcas reconocidas internacionalmente, para proteger la salud de nuestros pacientes y potenciar resultados estéticos naturales.
                            </p>
                            <p className={styles.mvText}>
                                Asesoramos de forma honesta y completa en cada decisión terapéutica, desde la evaluación inicial hasta el seguimiento final.
                            </p>
                        </article>

                        <article className={`${styles.mvCard} animate-fade-up delay-2`}>
                            <span className={styles.mvLabel}>Visión</span>
                            <h3 className={styles.mvTitle}>Ser referencia en estética médica responsable</h3>
                            <p className={styles.mvText}>
                                Consolidarnos como una clínica líder en bienestar estético-clínico, distinguida por la calidad de sus tratamientos, la curaduría de las mejores marcas y una experiencia profesional profundamente humana.
                            </p>
                            <p className={styles.mvText}>
                                Aspiramos a acompañar a cada cliente durante todo su proceso de transformación, construyendo confianza, adherencia y resultados consistentes en el tiempo.
                            </p>
                        </article>
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
                    <h2 className={styles.ctaTitle}>Empieza tu transición hoy.</h2>
                    <p className={styles.ctaText}>Da el paso hacia un cuidado personal de nivel superior.</p>
                    <Link href="/contacto" className="btn btn-primary">Agendar Diagnóstico Personalizado</Link>
                </div>
            </section>
        </div>
    );
}
