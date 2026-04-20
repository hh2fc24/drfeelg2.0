import Link from "next/link";
import styles from "./page.module.css";

const technologySections = [
    {
        eyebrow: "Cámara Hiperbárica",
        title: "Oxigenación profunda para apoyar recuperación y reparación de tejidos.",
        highlight: "O2Life ST801",
        description: [
            "La cámara hiperbárica combina presión controlada y oxigenación para favorecer procesos naturales de recuperación. Es una tecnología de apoyo clínico orientada a tejidos, inflamación y bienestar general, siempre indicada según evaluación.",
            "En la web la presentamos desde el beneficio real para el paciente: más oxigenación a nivel celular, recuperación acelerada y una experiencia cómoda dentro de un entorno clínico seguro."
        ],
        imageUrl: "/images/tratamientos/tratamiento1.jpg",
        imageAlt: "Box clínico real del proyecto asociado a recuperación y tecnología de apoyo",
        imageFit: "cover",
        specs: [
            { label: "Línea", value: "O2Life ST801" },
            { label: "Presión referencial", value: "1.4 ATA y 1.5 ATA" },
            { label: "Atributo clave", value: "Oxigenación celular profunda" },
            { label: "Enfoque web", value: "Recuperación acelerada de tejidos" },
        ],
        bullets: [
            "Apoyo a la recuperación y reparación de tejidos.",
            "Puede favorecer una mejor respuesta en procesos inflamatorios.",
            "Tecnología orientada a bienestar, descanso y recuperación.",
            "Se indica de forma personalizada según motivo de consulta."
        ]
    },
    {
        eyebrow: "Láser Podológico",
        title: "Precisión alemana para onicomicosis, verrugas y cirugía menor.",
        highlight: "FOX de A.R.C. Laser",
        description: [
            "El Láser Fox debe verse como un diferencial tecnológico real. Es una plataforma alemana orientada a podología clínica, especialmente relevante para onicomicosis por su precisión y experiencia indolora para el paciente.",
            "La forma correcta de comunicarlo no es grandilocuente: tecnología clínica de precisión, no invasiva, con una aplicación cómoda y enfocada en indicaciones podológicas concretas."
        ],
        imageUrl: "/images/sourced/fox-980-official.png",
        imageAlt: "Equipo FOX 980 de A.R.C. Laser",
        imageFit: "contain",
        specs: [
            { label: "Equipo", value: "Láser Podología FOX" },
            { label: "Origen", value: "Tecnología alemana A.R.C. Laser" },
            { label: "Uso principal", value: "Onicomicosis y podología láser" },
            { label: "Atributo clave", value: "Precisión clínica e indolora" },
        ],
        bullets: [
            "Alternativa clínica para onicomicosis.",
            "Aplicación precisa en podología especializada.",
            "Procedimiento cómodo, sin necesidad de un relato exagerado.",
            "Debe comunicarse con foco médico y no solo comercial."
        ]
    }
];

const clinicalEnvironment = [
    {
        title: "Box clínico",
        text: "Espacios limpios, equipamiento visible y una experiencia ordenada desde la evaluación hasta el procedimiento.",
        imageUrl: "/images/tratamientos/tratamiento1.jpg",
    },
    {
        title: "Atención podológica",
        text: "La podología se presenta como salud del pie: evaluación, manejo técnico y prevención dentro de un box real.",
        imageUrl: "/images/tratamientos/podologia.jpg",
    },
    {
        title: "Entorno de espera",
        text: "La experiencia sigue sintiéndose clínica y cuidada incluso fuera del box, sin perder cercanía con el paciente.",
        imageUrl: "/images/instalaciones/clinica5.jpg",
    }
];

export default function Tecnologia() {
    return (
        <div className={styles.technologyPage}>
            <header className={styles.header}>
                <div className={`container ${styles.headerContainer}`}>
                    <div className="animate-fade-up">
                        <span className={styles.eyebrow}>Tecnología Clínica</span>
                    </div>
                    <h1 className="animate-fade-up delay-1">
                        <span className={styles.titleLine}>Equipamiento que</span>
                        <span className={styles.titleLine}>
                            respalda una <span className={styles.highlight}>atención seria</span>
                        </span>
                    </h1>
                    <p className={`${styles.subtitle} animate-fade-up delay-2`}>
                        Presentamos la tecnología desde su utilidad clínica y la experiencia real del paciente:
                        Cámara Hiperbárica O2Life ST801, Láser Fox y un entorno de atención preparado para podología clínica y estética facial.
                    </p>
                </div>
            </header>

            {technologySections.map((section, index) => (
                <section
                    key={section.title}
                    className={`${styles.deviceSection} ${index % 2 === 1 ? styles.deviceSectionAlt : ""}`}
                >
                    <div className={`container ${styles.deviceGrid}`}>
                        <div className={`${styles.deviceMedia} animate-fade-up`}>
                            <div className={styles.deviceImageFrame}>
                                <div
                                    className={styles.deviceImage}
                                    style={{
                                        backgroundImage: `url(${section.imageUrl})`,
                                        backgroundSize: section.imageFit,
                                    }}
                                    aria-label={section.imageAlt}
                                    role="img"
                                ></div>
                            </div>
                        </div>

                        <div className={`${styles.deviceContent} animate-fade-up delay-1`}>
                            <span className={styles.sectionEyebrow}>{section.eyebrow}</span>
                            <h2 className={styles.sectionTitle}>
                                {section.title}
                            </h2>
                            <p className={styles.leadLabel}>{section.highlight}</p>

                            <div className={styles.textBlock}>
                                {section.description.map((paragraph) => (
                                    <p key={paragraph} className={styles.text}>
                                        {paragraph}
                                    </p>
                                ))}
                            </div>

                            <div className={styles.specGrid}>
                                {section.specs.map((spec) => (
                                    <div key={spec.label} className={styles.specCard}>
                                        <span className={styles.specLabel}>{spec.label}</span>
                                        <strong className={styles.specValue}>{spec.value}</strong>
                                    </div>
                                ))}
                            </div>

                            <div className={styles.bulletBlock}>
                                <h3 className={styles.bulletTitle}>Lo importante para comunicar en la web</h3>
                                <ul className={styles.bulletList}>
                                    {section.bullets.map((bullet) => (
                                        <li key={bullet}>{bullet}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
            ))}

            <section className={styles.environmentSection}>
                <div className="container">
                    <div className={`${styles.environmentHeader} animate-fade-up`}>
                        <span className={styles.eyebrow}>Entorno Clínico</span>
                        <h2 className={styles.sectionTitle}>
                            La tecnología se entiende mejor cuando se ve dentro de una atención real.
                        </h2>
                        <p className={styles.subtitle}>
                            El box, el sillón podológico, la iluminación y la higiene también comunican estándar clínico.
                        </p>
                    </div>

                    <div className={styles.environmentGrid}>
                        {clinicalEnvironment.map((item, index) => (
                            <article key={item.title} className={`animate-fade-up delay-${index + 1} ${styles.environmentCard}`}>
                                <div
                                    className={styles.environmentImage}
                                    style={{ backgroundImage: `url(${item.imageUrl})` }}
                                ></div>
                                <div className={styles.environmentContent}>
                                    <h3 className={styles.environmentTitle}>{item.title}</h3>
                                    <p className={styles.environmentText}>{item.text}</p>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className={styles.noteSection}>
                <div className={`container ${styles.noteBox} animate-fade-up`}>
                    <span className={styles.noteEyebrow}>Criterio Clínico</span>
                    <h2 className={styles.noteTitle}>La tecnología no reemplaza la evaluación médica.</h2>
                    <p className={styles.noteText}>
                        Cada equipo se comunica como apoyo diagnóstico o terapéutico dentro de una atención profesional.
                        La indicación siempre debe responder al motivo de consulta del paciente y no a una promesa genérica.
                    </p>
                </div>
            </section>

            <section className={styles.ctaSection}>
                <div className={`container ${styles.ctaContainer} animate-fade-up`}>
                    <span className={styles.noteEyebrow}>Siguiente Paso</span>
                    <h2 className={styles.ctaTitle}>Si quieres saber qué tecnología aplica para tu caso, agenda una evaluación.</h2>
                    <p className={styles.ctaText}>
                        Nuestro equipo puede orientarte según tu motivo de consulta y explicarte qué procedimiento o tecnología tiene sentido para ti.
                    </p>
                    <Link href="/contacto" className="btn btn-primary">
                        Evaluación Gratuita
                    </Link>
                </div>
            </section>
        </div>
    );
}
