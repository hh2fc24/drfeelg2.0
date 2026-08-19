"use client";

import { useState } from "react";
import ServiceCard from "@/components/ServiceCard";
import ServiceModal from "@/components/ServiceModal";
import styles from "./page.module.css";
import Link from "next/link";

export default function Servicios() {
    type ServiceType = {
        title: string;
        description: string | string[];
        category: string;
        filterCategory: string;
        benefitsTitle?: string;
        benefits?: string[];
        prices?: string[];
        imageUrl?: string;
        modalImageUrl?: string;
        imageFit?: "cover" | "contain";
        imagePosition?: string;
        imageBackground?: string;
        videoUrl?: string;
        galleryUrls?: string[];
        href?: string;
        basePrice?: string;
        discountBadge?: string;
        priceSuffix?: string;
    };
    const [selectedService, setSelectedService] = useState<ServiceType | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [activeFilter, setActiveFilter] = useState("Todos");

    const filters = ["Todos", "Evaluación Clínica", "Estética Facial", "Podología Clínica", "Corporal y Bienestar"];

    const handleOpenModal = (service: ServiceType) => {
        setSelectedService(service);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setTimeout(() => setSelectedService(null), 500);
    };

    const allTreatments: ServiceType[] = [
        {
            title: "Evaluación Nutricional con BodyPro y Plan Personalizado",
            description: "Análisis clínico avanzado de composición corporal diseñado para evaluar de forma precisa tu porcentaje de grasa, masa muscular y agua corporal. Junto a nuestros profesionales de salud, diseñaremos una pauta alimentaria y un plan nutricional personalizado que se adapte de verdad a tus objetivos, salud y estilo de vida.",
            category: "Primera Visita",
            filterCategory: "Evaluación Clínica",
            imageUrl: "/images/instalaciones/instalacion_0075.jpg",
            modalImageUrl: "/images/instalaciones/instalacion_0075.jpg",
            basePrice: "$35.000",
            discountBadge: "Abonable",
            benefitsTitle: "¿Qué incluye nuestra evaluación?",
            benefits: [
                "Medición de composición corporal avanzada con BodyPro.",
                "Análisis detallado de porcentaje de grasa, masa muscular y agua corporal.",
                "Entrevista clínica y revisión de hábitos y antecedentes de salud.",
                "Elaboración de pauta alimentaria y metas de forma personalizada.",
                "Orientación profesional sin compromiso para resolver todas tus dudas.",
                "Valor de la consulta abonable a tu plan de tratamiento."
            ]
        },
        {
            title: "Botox (Dysport)",
            description: [
                "El tratamiento con Toxina Botulínica Tipo A, conocido comúnmente como Botox, es uno de los procedimientos estéticos más utilizados en el mundo para suavizar arrugas de expresión y prevenir el envejecimiento facial.",
                "Con el paso del tiempo, los movimientos repetitivos del rostro pueden generar líneas y arrugas visibles. La toxina botulínica actúa relajando de forma controlada los músculos responsables de estas arrugas, permitiendo que la piel se vea más lisa, descansada y rejuvenecida.",
                "En Dr. Feelgood trabajamos con Dysport. La indicación se realiza de forma personalizada para tratar frente, entrecejo, patas de gallo u otras zonas avanzadas cuando corresponde."
            ],
            category: "Rostro Completo",
            filterCategory: "Estética Facial",
            imageUrl: "/images/sourced/dysport-500-package-official.png",
            modalImageUrl: "/images/sourced/dysport-500-package-official.png",
            imageFit: "contain",
            imageBackground: "#f9f7f5",
            basePrice: "$150.000",
            discountBadge: "DCTO. TERCIO",
            benefitsTitle: "¿Por qué elegir Dysport?",
            benefits: [
                "Resultados naturales: Suaviza las arrugas sin congelar la expresión facial.",
                "Inicio de acción rápido: Efectos visibles entre 2 y 3 días.",
                "Tratamiento rápido y mínimamente invasivo: permite retomar la rutina habitual con indicaciones simples.",
                "Resultados duraderos: Los efectos suelen mantenerse entre 4 y 6 meses."
            ],
            prices: [
                "Tercio superior (2 zonas): $150.000 con Dscto. (Ref. $200.000)",
                "Tercio superior (3 zonas): $180.000 con Dscto. (Ref. $250.000)",
                "Botox Avanzado: Bandas Platismales Cuello",
                "Botox Avanzado: Bruxismo y Afinamiento de Rostro",
                "Botox Avanzado: Hiperhidrosis Axilar",
                "Botox Avanzado: Hiperhidrosis Palmar"
            ]
        },
        {
            title: "Ácido Hialurónico",
            description: [
                "El ácido hialurónico es una sustancia presente de forma natural en el organismo y cumple un rol importante en hidratación, elasticidad y firmeza de la piel.",
                "En Dr. Feelgood se trabaja principalmente con Teosyal y, según evaluación, también con Restylane en algunos casos. Se utiliza para restaurar volumen, mejorar contornos y acompañar rasgos con resultados armónicos y naturales."
            ],
            category: "Labios, Ojeras, Pómulos y Perfilado",
            filterCategory: "Estética Facial",
            imageUrl: "/images/sourced/teosyal-rha-line.jpg",
            modalImageUrl: "/images/sourced/teosyal-rha-line.jpg",
            imageFit: "contain",
            imageBackground: "#f9f7f5",
            basePrice: "$180.000",
            discountBadge: "PROMO JERINGA",
            benefitsTitle: "Zonas de Aplicación y Valores",
            benefits: [
                "Perfilado y relleno de labios.",
                "Rinomodelación sin cirugía.",
                "Relleno de ojeras y surco nasogeniano.",
                "Rest Full Lift de pómulos según evaluación.",
                "Código de barras, arco mandibular, borde mandibular y mentón.",
                "Skinbooster e hidratación profunda."
            ],
            prices: [
                "Perfilado / Relleno de labios: $180.000 (Ref. $240.000) 1 Jeringa",
                "Rinomodelación: $180.000 (Ref. $250.000) 1 Jeringa",
                "Otras zonas: valor definido según evaluación profesional."
            ]
        },
        {
            title: "Mesoterapia y Microneedling Facial y Corporal",
            description: [
                "Tratamientos orientados a mejorar calidad de piel, luminosidad, textura y soporte cutáneo mediante protocolos personalizados.",
                "La indicación puede incluir PRP, Pink Glow, exosomas con dermapen, Sculptra, vitamina C, Dermastabilon u otros activos, siempre según evaluación profesional y objetivo del paciente."
            ],
            category: "Piel, Regeneración y Bioestimulación",
            filterCategory: "Estética Facial",
            imageUrl: "/images/instalaciones/productos.jpg",
            modalImageUrl: "/images/instalaciones/productos.jpg",
            imagePosition: "center",
            discountBadge: "Evaluación",
            benefitsTitle: "Protocolos disponibles",
            benefits: [
                "Plasma Rico en Plaquetas facial.",
                "Tratamiento para caída de cabello con PRP.",
                "Mesoterapia facial y corporal, incluida mesoterapia corporal para grasa localizada con Dermastabilon.",
                "Pink Glow y exosomas con dermapen.",
                "Sculptra y vitamina C según indicación.",
                "Plan ajustado a diagnóstico, zona y tolerancia de cada paciente."
            ],
            prices: [
                "Valor definido según protocolo y evaluación profesional."
            ]
        },
        {
            title: "Limpieza Facial Hydromax",
            description: "Higiene facial tecnológica que entrega una limpieza profunda, extracción controlada y una hidratación intensa. Incluye limpieza profunda integral y aplicación de nutrientes y activos seleccionados según los requerimientos específicos de cada tipo de piel para devolverle luminosidad y lozanía.",
            category: "Higiene Profunda e Hidratación",
            filterCategory: "Estética Facial",
            imageUrl: "/images/sourced/hydromax_real.png",
            modalImageUrl: "/images/sourced/hydromax_real.png",
            imageFit: "cover",
            basePrice: "$40.000",
            benefitsTitle: "Objetivos del tratamiento",
            benefits: [
                "Limpieza profunda y retiro de impurezas acumuladas.",
                "Aplicación personalizada de nutrientes según el requerimiento de tu piel.",
                "Apoyo y renovación para pieles deshidratadas o congestionadas.",
                "Sensación inmediata de frescura, suavidad y luminosidad profesional."
            ]
        },
        {
            title: "Lipoláser Corporal",
            description: [
                "Tratamiento corporal no invasivo con nuestro equipo i-lipo real, diseñado para trabajar grasa localizada, modelación de contornos y reducción de medidas de forma segura y sin cirugía.",
                "El protocolo combina tecnología láser avanzada con acompañamiento profesional para tratar zonas específicas con un alto nivel de eficacia."
            ],
            category: "Reductivo sin Cirugía",
            filterCategory: "Corporal y Bienestar",
            imageUrl: "/images/sourced/ilipo_real.png",
            modalImageUrl: "/images/sourced/ilipo_real.png",
            imageFit: "cover",
            benefitsTitle: "Enfoque Dr. Feelgood",
            benefits: [
                "Reduce medidas y modela zonas localizadas de forma no invasiva.",
                "Apoya el manejo de celulitis y flacidez según tu caso clínico.",
                "Protocolos personalizados con i-lipo real para asegurar resultados.",
                "Sin cirugía, sin cicatrices, permitiendo retomar tus actividades al instante.",
                "Evaluación diagnóstica previa por profesionales para confirmar idoneidad."
            ],
            prices: [
                "Valor definido según zona, número de sesiones y evaluación profesional."
            ]
        },
        {
            title: "Sueroterapia",
            description: "Protocolos endovenosos de apoyo al bienestar general, indicados de forma responsable según antecedentes, objetivo y evaluación profesional previa.",
            category: "Bienestar y Recuperación",
            filterCategory: "Corporal y Bienestar",
            imageUrl: "/images/instalaciones/clinica1.jpg",
            modalImageUrl: "/images/instalaciones/clinica1.jpg",
            imagePosition: "center",
            benefitsTitle: "Protocolos destacados",
            benefits: [
                "Megadosis de vitamina C.",
                "Complejo B.",
                "Glutathion.",
                "Indicación individual según antecedentes y objetivos."
            ],
            prices: [
                "Valor definido según protocolo y evaluación profesional."
            ]
        },
        {
            title: "Cámara Hiperbárica O2Life ST801",
            description: "Sesión de oxigenoterapia en nuestra cámara hiperbárica real. Combina el aumento controlado de la presión atmosférica con un flujo de alta concentración de oxígeno, logrando una profunda oxigenación celular que favorece la desinflamación y estimula los procesos de reparación naturales del cuerpo.",
            category: "Cuerpo Entero",
            filterCategory: "Corporal y Bienestar",
            imageUrl: "/images/sourced/camara_hiperbarica_real.png",
            modalImageUrl: "/images/sourced/camara_hiperbarica_real.png",
            imageFit: "contain",
            imageBackground: "#ffffff",
            basePrice: "$20.000",
            benefitsTitle: "Beneficios",
            benefits: [
                "Favorece la oxigenación celular profunda en todo el cuerpo.",
                "Disminución de inflamación generalizada y apoyo vascular.",
                "Aceleración en la recuperación muscular y de lesiones deportivas.",
                "Estimulación celular que mejora la cicatrización y reparación de tejidos."
            ],
            prices: [
                "1 sesión de 60 minutos: $20.000",
                "Pack 10 sesiones: $199.000"
            ]
        },
        {
            title: "Podología Clínica",
            description: "Ofrecemos un servicio integral de podología clínica enfocado en salud, prevención y bienestar de tus pies. Aquí la prioridad no es estética: es evaluación técnica, higiene clínica, manejo de molestias y prevención.",
            category: "Pies",
            filterCategory: "Podología Clínica",
            imageUrl: "/images/tratamientos/podologia.jpg",
            modalImageUrl: "/images/tratamientos/podologia.jpg",
            basePrice: "$35.000",
            benefitsTitle: "Nuestros Tratamientos",
            benefits: [
                "Podología clínica básica: evaluación, onicotomía y pulido de talones.",
                "Podología clínica uña encarnada o despiculización.",
                "Podología clínica y onicomicosis.",
                "Podología clínica y helomas o queratosis.",
                "Podología clínica spa: hidromasaje infrarrojo, exfoliación e hidratación."
            ],
            prices: [
                "Podología clínica básica: $35.000",
                "Uña encarnada o despiculización: $40.000",
                "Onicomicosis: $40.000",
                "Helomas o queratosis: $40.000",
                "Podología clínica spa: $45.000"
            ]
        },
        {
            title: "Taping Neuromuscular",
            description: "Es una técnica terapéutica que utiliza cintas elásticas adhesivas. Estimulando músculos, mejorando la circulación y disminuyendo el dolor, sin limitar el movimiento natural del pie.",
            category: "Pies y Tobillos",
            filterCategory: "Podología Clínica",
            imageUrl: "/images/tratamientos/tratamiento2.jpg",
            modalImageUrl: "/images/tratamientos/tratamiento2.jpg",
            benefitsTitle: "Se utiliza para",
            benefits: [
                "Dolor e inflamación de hallux valgus o incipiente",
                "Fascitis plantar y espolón calcáneo",
                "Torceduras de tobillo y desgarro muscular"
            ]
        },
        {
            title: "Uñas con Hongos (Láser Fox)",
            description: [
                "La Onicomicosis, también conocida como infección por hongos en las uñas, es una afección común. El tratamiento láser ha surgido como una alternativa altamente efectiva para eliminar los hongos, evitando los efectos secundarios indeseables de los tratamientos tradicionales.",
                "A diferencia de los medicamentos antifúngicos, el láser emite una energía que penetra la uña, eliminando el hongo de raíz. Es no invasivo e indoloro."
            ],
            category: "Pies y Manos",
            filterCategory: "Podología Clínica",
            imageUrl: "/images/sourced/fox-980-official.png",
            modalImageUrl: "/images/sourced/fox-980-official.png",
            imageFit: "contain",
            imageBackground: "#f9f7f5",
            basePrice: "$199.000",
            priceSuffix: "pack 6 sesiones",
            discountBadge: "PACK LÁSER",
            benefitsTitle: "Beneficios",
            benefits: [
                "Procedimiento no invasivo e indoloro.",
                "Seguro, certificado por la comunidad europea.",
                "Eficaz en más del 90% de los casos.",
                "No requiere anestesia ni tiempo de recuperación."
            ],
            prices: [
                "Pack de 6 sesiones: $199.000"
            ]
        }
    ];

    const filteredTreatments = activeFilter === "Todos" 
        ? allTreatments 
        : allTreatments.filter(t => t.filterCategory === activeFilter);

    return (
        <div className={styles.servicesPage}>
            <header className={styles.header}>
                <div className={`container ${styles.headerContainer}`}>
                    <div className="animate-fade-up">
                        <span className={styles.eyebrow}>Servicios</span>
                    </div>
                    <h1 className="animate-fade-up delay-1">
                        <span className={styles.titleLine}>Tratamientos y</span>
                        <span className={styles.titleLine}><span className={styles.highlight}>atención clínica</span></span>
                    </h1>
                    <p className={`${styles.subtitle} animate-fade-up delay-2`}>
                        Revisa nuestras áreas de atención y encuentra la opción que mejor se ajuste a tu motivo de consulta.
                    </p>
                </div>
            </header>

            <section className="section" id="catalogo">
                <div className="container">
                    {/* E-Commerce Style Filter Bar */}
                    <div className={`${styles.filterBar} animate-fade-up delay-3`}>
                        {filters.map((f, idx) => (
                            <button 
                                key={idx}
                                className={`${styles.filterBtn} ${activeFilter === f ? styles.filterBtnActive : ""}`}
                                onClick={() => setActiveFilter(f)}
                            >
                                {f}
                            </button>
                        ))}
                    </div>

                    <div className={`${styles.grid} ${filteredTreatments.length <= 2 ? styles.gridCompact : ""}`}>
                        {filteredTreatments.map((s, idx) => (
                            <div key={`${activeFilter}-${idx}`} className="animate-fade-up">
                                <ServiceCard {...s} onClick={() => handleOpenModal(s)} />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <div className={styles.divider}><div className="container"><hr /></div></div>

            {/* Casos Clínicos - Antes y Después Section */}
            <section className={styles.resultsSection} id="resultados">
                <div className="container">
                    <div className={styles.resultsHeader}>
                        <span className={styles.resultsEyebrow}>Casos Clínicos</span>
                        <h2 className={styles.resultsTitle}>Resultados Reales</h2>
                        <p className={styles.resultsSubtitle}>
                            Antes y después de tratamientos realizados en nuestro centro. Cada proceso responde a un plan integral diseñado por profesionales para lograr armonía, simetría y naturalidad.
                        </p>
                    </div>

                    <div className={styles.resultsGrid}>
                        {/* Caso 1 */}
                        <div className={`${styles.resultCard} animate-fade-up`}>
                            <div className={styles.resultTopBox}>
                                DEFINICIÓN Y PROYECCIÓN CON ÁCIDO HIALURÓNICO
                            </div>
                            <div className={styles.resultImageWrapper}>
                                <div 
                                    className={styles.resultImage} 
                                    style={{ backgroundImage: "url('/images/sourced/before_after_nose_1.png')" }}
                                ></div>
                            </div>
                            <div className={styles.resultContent}>
                                <h3 className={styles.resultCardTitle}>Rinomodelación</h3>
                                <p className={styles.resultCardDesc}>
                                    Armonización nasal clínica sin cirugía mediante inyección precisa de ácido hialurónico, logrando una rectificación del dorso y elevación sutil de la punta nasal con un perfil equilibrado.
                                </p>
                            </div>
                        </div>

                        {/* Caso 2 */}
                        <div className={`${styles.resultCard} animate-fade-up delay-1`}>
                            <div className={styles.resultTopBox}>
                                SUAVIZADO DE CABALLETE CON ÁCIDO HIALURÓNICO
                            </div>
                            <div className={styles.resultImageWrapper}>
                                <div 
                                    className={styles.resultImage} 
                                    style={{ backgroundImage: "url('/images/sourced/before_after_nose_2.png')" }}
                                ></div>
                            </div>
                            <div className={styles.resultContent}>
                                <h3 className={styles.resultCardTitle}>Rinomodelación</h3>
                                <p className={styles.resultCardDesc}>
                                    Alineación estética del puente y dorso nasal en paciente. Se suaviza la curvatura del caballete de forma sutil y proporcionada, mejorando la armonía general de los rasgos faciales.
                                </p>
                            </div>
                        </div>

                        {/* Caso 3 */}
                        <div className={`${styles.resultCard} animate-fade-up delay-2`}>
                            <div className={styles.resultTopBox}>
                                LÍNEAS DE EXPRESIÓN CON BOTOX DYSPORT
                            </div>
                            <div className={styles.resultImageWrapper}>
                                <div 
                                    className={styles.resultImage} 
                                    style={{ backgroundImage: "url('/images/sourced/before_after_wrinkles.png')" }}
                                ></div>
                            </div>
                            <div className={styles.resultContent}>
                                <h3 className={styles.resultCardTitle}>Rejuvenecimiento Facial</h3>
                                <p className={styles.resultCardDesc}>
                                    Tratamiento enfocado en la relajación muscular y soporte cutáneo para suavizar líneas dinámicas y arrugas de expresión profundas, devolviendo frescura y lozanía al rostro.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className={styles.divider}><div className="container"><hr /></div></div>

            {/* Strategic Phrases - Quote Banner */}
            <section className={`section ${styles.quoteSection}`}>
                <div className="container animate-fade-up">
                    <h2 style={{ textAlign: 'center', fontFamily: 'var(--font-serif)', fontSize: '2.5rem', marginBottom: '3rem', color: 'var(--color-primary-gold-dark)' }}>Cuidado profesional, resultados naturales</h2>
                    <div className={styles.quoteGrid}>
                        <div className={styles.quoteCard}><p>Resalta tu belleza natural, nosotros solo te ayudamos a verla.</p></div>
                        <div className={styles.quoteCard}><p>No es solo un tratamiento, es tu momento de desconexión.</p></div>
                        <div className={styles.quoteCard}><p>Tu piel tiene memoria, dale un tratamiento que valga la pena recordar.</p></div>
                        <div className={styles.quoteCard}><p>Cuida tu piel hoy, ella te lo agradecerá mañana.</p></div>
                        <div className={styles.quoteCard}><p>La evaluación profesional permite indicar el tratamiento adecuado en cada caso.</p></div>
                        <div className={styles.quoteCard}><p>Botox y ácido hialurónico tienen objetivos distintos y se indican según diagnóstico.</p></div>
                        <div className={styles.quoteCard}><p>En podología clínica priorizamos salud, prevención y comodidad del paciente.</p></div>
                        <div className={styles.quoteCard}><p>¿Lista para tu mejor versión? Agenda tu evaluación personalizada hoy.</p></div>
                    </div>
                </div>
            </section>

            <section className={`section ${styles.ctaSection}`}>
                <div className={`container ${styles.ctaContainer} animate-fade-up`}>
                    <h2 className={styles.ctaTitle}>¿Tienes dudas sobre qué tratamiento necesitas?</h2>
                    <p className={styles.ctaSubtitle}>Solicita una evaluación y te orientaremos de acuerdo con tu caso.</p>
                    <Link href="/contacto" className="btn" style={{ backgroundColor: 'var(--color-primary-gold)', color: '#fff', border: 'none', padding: '1.2rem 3rem' }}>Evaluación Gratuita</Link>
                </div>
            </section>

            <ServiceModal
                isOpen={isModalOpen}
                onClose={handleCloseModal}
                service={selectedService}
            />
        </div>
    );
}
