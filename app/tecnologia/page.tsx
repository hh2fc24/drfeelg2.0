import Link from "next/link";
import styles from "./page.module.css";

const technologySections = [
    {
        eyebrow: "Cámara Hiperbárica",
        title: "Oxigenación profunda para apoyar recuperación y reparación de tejidos.",
        highlight: "O2Life ST801",
        description: [
            "La cámara hiperbárica combina presión controlada y oxigenación para favorecer procesos naturales de recuperación. Es una tecnología de apoyo clínico orientada a tejidos, inflamación y bienestar general, siempre indicada según evaluación profesional.",
            "En la web la presentamos desde el beneficio real para el paciente: más oxigenación a nivel celular, recuperación acelerada y una experiencia cómoda dentro de un entorno clínico seguro."
        ],
        imageUrl: "/images/tratamientos/tratamiento1.jpg",
        imageAlt: "Box clínico real del proyecto asociado a recuperación y tecnología de apoyo",
        imageFit: "cover",
        specs: [
            { label: "Línea", value: "O2Life ST801" },
            { label: "Atributo clave", value: "Oxigenación celular profunda" },
            { label: "Enfoque web", value: "Recuperación acelerada de tejidos" },
        ]
    },
    {
        eyebrow: "Láser NEO YAG Q-Switched",
        title: "Tecnología de 1064 nm para el tratamiento localizado de la onicomicosis.",
        highlight: "NEO YAG Q-Switched",
        description: [
            "Efecto térmico selectivo: el láser NEO YAG emite una longitud de onda de 1064 nm. Esta luz atraviesa la placa de la uña afectada y penetra hasta el lecho ungueal.",
            "Destrucción del hongo: la energía lumínica se convierte en calor concentrado de forma rápida, en nanosegundos. Este incremento térmico degrada y destruye las estructuras de los hongos sin dañar la piel ni los tejidos sanos que rodean la uña.",
            "Alternativa médica: al ser un método físico y localizado, representa una excelente opción para personas que no pueden o prefieren no tomar medicamentos antifúngicos orales debido a contraindicaciones médicas o riesgos de toxicidad hepática."
        ],
        imageUrl: "/images/sourced/neo-yag-q-switched.png",
        imageAlt: "Equipo láser NEO YAG Q-Switched",
        imageFit: "contain",
        specs: [
            { label: "Equipo", value: "Láser NEO YAG Q-Switched" },
            { label: "Longitud de onda", value: "1064 nm" },
            { label: "Uso principal", value: "Tratamiento de onicomicosis" },
            { label: "Atributo clave", value: "Método físico y localizado" },
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
        imageUrl: "/images/tratamientos/podologia-clinica.png",
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
                        Cámara Hiperbárica O2Life ST801, Láser NEO YAG Q-Switched y un entorno de atención preparado para podología clínica y estética facial.
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
                    <h2 className={styles.noteTitle}>La tecnología no reemplaza la evaluación profesional.</h2>
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
