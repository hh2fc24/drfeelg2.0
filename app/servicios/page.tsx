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
            title: "Evaluación Diagnóstica Integral",
            description: "¿No sabes por dónde empezar? Reserva una evaluación diagnóstica con médicos, enfermeras y profesionales especialistas según tu caso. Revisaremos tu motivo de consulta de forma personalizada para orientar el tratamiento más adecuado, con resultados armónicos, naturales y seguros.",
            category: "Primera Visita",
            filterCategory: "Evaluación Clínica",
            imageUrl: "/images/instalaciones/instalacion_0075.jpg",
            modalImageUrl: "/images/instalaciones/instalacion_0075.jpg",
            basePrice: "$25.000",
            discountBadge: "Abonable",
            benefitsTitle: "¿Qué incluye nuestra evaluación?",
            benefits: [
                "Entrevista inicial y ficha clínica completa.",
                "Análisis profesional de objetivos, antecedentes y zonas a tratar.",
                "Resolución de dudas sin compromiso.",
                "Orientación clara sobre alternativas, tiempos y cuidados.",
                "Elaboración de plan de tratamiento personalizado.",
                "Valor de la consulta abonable a tu primer tratamiento."
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
            description: "Limpieza facial tecnológica orientada a higiene profunda, extracción controlada, hidratación y luminosidad. Ideal para preparar la piel antes de otros tratamientos o mantener una rutina profesional de cuidado facial.",
            category: "Higiene Profunda e Hidratación",
            filterCategory: "Estética Facial",
            imageUrl: "/images/tratamientos/hydromax2.jpg",
            modalImageUrl: "/images/tratamientos/hydromax2.jpg",
            imagePosition: "center",
            benefitsTitle: "Objetivos del tratamiento",
            benefits: [
                "Limpieza profunda y retiro de impurezas.",
                "Apoyo a pieles opacas, congestionadas o deshidratadas.",
                "Hidratación y sensación de piel más fresca.",
                "Puede combinarse con protocolos faciales indicados por el equipo."
            ],
            prices: [
                "Valor definido según evaluación y protocolo facial."
            ]
        },
        {
            title: "Lipoláser Corporal",
            description: [
                "Tratamiento corporal no invasivo orientado a grasa localizada, modelación y reducción de medidas sin cirugía.",
                "El protocolo combina tecnología y acompañamiento profesional para trabajar zonas específicas de acuerdo con el diagnóstico corporal."
            ],
            category: "Reductivo sin Cirugía",
            filterCategory: "Corporal y Bienestar",
            imageUrl: "/images/isolated_liposculpt_machine_1772368543072.png",
            modalImageUrl: "/images/isolated_liposculpt_machine_1772368543072.png",
            imageFit: "contain",
            imageBackground: "#f9f7f5",
            benefitsTitle: "Enfoque Dr. Feelgood",
            benefits: [
                "Reduce medidas y modela zonas localizadas.",
                "Apoya el manejo de celulitis y flacidez según caso.",
                "Puede complementarse con radiofrecuencia, vacuum o ejercicio en plataforma según protocolo.",
                "Sin cirugía, sin cicatrices y sin tiempo de recuperación.",
                "Serás evaluado por profesionales para confirmar si eres candidata o candidato."
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
            description: "Tratamiento que combina el aumento de la presión atmosférica junto con una alta concentración de oxígeno. Gracias a esto, el organismo logra una mayor oxigenación a nivel celular, favoreciendo distintos procesos naturales del cuerpo.",
            category: "Cuerpo Entero",
            filterCategory: "Corporal y Bienestar",
            imageUrl: "/images/tratamientos/tratamiento1.jpg",
            modalImageUrl: "/images/tratamientos/tratamiento1.jpg",
            imagePosition: "center",
            basePrice: "$20.000",
            benefitsTitle: "Beneficios",
            benefits: [
                "Disminución de la inflamación y apoyo al sistema vascular.",
                "Aceleración de la recuperación y reparación de tejidos.",
                "Estimulación de la energía celular y mejor cicatrización.",
                "Recuperación muscular más rápida y apoyo en lesiones deportivas."
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
