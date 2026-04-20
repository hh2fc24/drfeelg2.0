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

    const filters = ["Todos", "Evaluación Clínica", "Estética Facial", "Bienestar Integral"];

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
            description: "¿No sabes por dónde empezar? Reserva una evaluación clínica con nuestros médicos especialistas. Analizaremos tu caso de forma personalizada, recomendando los tratamientos exactos para lograr tus objetivos con resultados armónicos y naturales.",
            category: "Primera Visita",
            filterCategory: "Evaluación Clínica",
            imageUrl: "/images/instalaciones/instalacion_0075.jpg",
            modalImageUrl: "/images/instalaciones/instalacion_0075.jpg",
            basePrice: "$25.000",
            discountBadge: "Abonable",
            benefitsTitle: "¿Qué incluye nuestra evaluación?",
            benefits: [
                "Entrevista y ficha clínica exhaustiva.",
                "Análisis anatómico y diagnóstico estructurado.",
                "Resolución de dudas sin compromiso.",
                "Elaboración de plan de tratamiento personalizado.",
                "Valor de la consulta es abonable a tu primer tratamiento."
            ]
        },
        {
            title: "Botox (Dysport)",
            description: [
                "El tratamiento con Toxina Botulínica Tipo A, conocido comúnmente como Botox, es uno de los procedimientos estéticos más utilizados en el mundo para suavizar arrugas de expresión y prevenir el envejecimiento facial.",
                "Con el paso del tiempo, los movimientos repetitivos del rostro pueden generar líneas y arrugas visibles. La toxina botulínica actúa relajando de forma controlada los músculos responsables de estas arrugas, permitiendo que la piel se vea más lisa, descansada y rejuvenecida.",
                "En Dr. Feelgood ocupamos Dysport. Una forma altamente purificada de Toxina Botulínica Tipo A, utilizada por especialistas en todo el mundo para relajar de manera precisa los músculos."
            ],
            category: "Rostro Completo",
            filterCategory: "Estética Facial",
            imageUrl: "/images/sourced/dysport-official.png",
            modalImageUrl: "/images/sourced/dysport-official.png",
            imageFit: "contain",
            imageBackground: "#f9f7f5",
            basePrice: "$150.000",
            discountBadge: "DCTO. TERCIO",
            benefitsTitle: "¿Por qué elegir Dysport?",
            benefits: [
                "Resultados naturales: Suaviza las arrugas sin congelar la expresión facial.",
                "Inicio de acción rápido: Efectos visibles entre 2 y 3 días.",
                "Tratamiento rápido y mínimamente invasivo: Sin tiempo de recuperación.",
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
                "Es una sustancia natural de nuestro organismo que cumple un rol fundamental en la hidratación, elasticidad y firmeza de la piel. Con el paso del tiempo, su presencia disminuye, provocando pérdida de volumen.",
                "En medicina estética, se utiliza para restaurar volumen, mejorar contornos faciales y aportar hidratación profunda, logrando resultados armónicos y naturales."
            ],
            category: "Labios, Ojeras y Pómulos",
            filterCategory: "Estética Facial",
            imageUrl: "/images/sourced/restylane-fillers-official.png",
            modalImageUrl: "/images/sourced/restylane-fillers-official.png",
            imageFit: "contain",
            imageBackground: "#f9f7f5",
            basePrice: "$180.000",
            discountBadge: "PROMO JERINGA",
            benefitsTitle: "Zonas de Aplicación y Valores",
            benefits: [
                "Relleno de Ojeras",
                "Relleno Surco Nasogeniano",
                "Perfilado Mandibular y Mentón",
                "Relleno de Pómulos",
                "Skinbooster Hidratación Profunda"
            ],
            prices: [
                "Perfilado / Relleno de labios: $180.000 (Ref. $240.000) 1 Jeringa",
                "Rinomodelación: $180.000 (Ref. $250.000) 1 Jeringa"
            ]
        },
        {
            title: "Cámara Hiperbárica O2Life ST801",
            description: "Tratamiento que combina el aumento de la presión atmosférica junto con una alta concentración de oxígeno. Gracias a esto, el organismo logra una mayor oxigenación a nivel celular, favoreciendo distintos procesos naturales del cuerpo.",
            category: "Cuerpo Entero",
            filterCategory: "Bienestar Integral",
            imageUrl: "/images/tratamientos/tratamiento1.jpg",
            modalImageUrl: "/images/tratamientos/tratamiento1.jpg",
            imagePosition: "center",
            basePrice: "$20.000",
            benefitsTitle: "Beneficios",
            benefits: [
                "Disminución de la inflamación y favorece el sistema vascular.",
                "Aceleración de la recuperación y reparación de tejidos.",
                "Estimulación de la energía celular y mejor cicatrización.",
                "Recuperación muscular mas rápiday recuperación de lesiones deportivas."
            ],
            prices: [
                "1 sesión de 60 minutos: $20.000",
                "Pack 10 sesiones: $199.000"
            ]
        },
        {
            title: "Podología Clínica",
            description: "Ofrecemos un servicio integral de podologia clínica y estética, enfocado en la salud, prevención y bienestar de tus pies. Nuestros tratamientos están diseñados para abordar tanto afecciones podológicas como el cuidado estético.",
            category: "Pies",
            filterCategory: "Bienestar Integral",
            imageUrl: "/images/tratamientos/podologia.jpg",
            modalImageUrl: "/images/tratamientos/podologia.jpg",
            basePrice: "$35.000",
            benefitsTitle: "Nuestros Tratamientos",
            benefits: [
                "Podologia Clínica Básica: evaluacion, onicotomia, pulido de talones...",
                "Podología clínica uña encarnada o despiculizacion.",
                "Podología clínica y onicomicosis.",
                "Podología clínica y helomas o queratosis.",
                "Podología clínica spa: hidromasaje infrarrojo, exfoliación e hidratación."
            ],
            prices: [
                "Podologia Clinica Basica: $35.000",
                "Uña encarnada o despiculizacion: $40.000",
                "Onicomicosis: $40.000",
                "Helomas o queratosis: $40.000",
                "Podología clínica spa: $45.000"
            ]
        },
        {
            title: "Taping Neuromuscular",
            description: "Es una técnica terapéutica que utiliza cintas elásticas adhesivas. Estimulando músculos, mejorando la circulación y disminuyendo el dolor, sin limitar el movimiento natural del pie.",
            category: "Pies y Tobillos",
            filterCategory: "Bienestar Integral",
            imageUrl: "/images/instalaciones/instalacion_0072.jpg",
            modalImageUrl: "/images/instalaciones/instalacion_0072.jpg",
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
            filterCategory: "Bienestar Integral",
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
                    <h2 style={{ textAlign: 'center', fontFamily: 'var(--font-serif)', fontSize: '2.5rem', marginBottom: '3rem', color: 'var(--color-primary-gold-dark)' }}>Información importante</h2>
                    <div className={styles.quoteGrid}>
                        <div className={styles.quoteCard}><p>La evaluación clínica permite indicar el tratamiento adecuado en cada caso.</p></div>
                        <div className={styles.quoteCard}><p>Botox y ácido hialurónico tienen objetivos distintos y se indican según evaluación.</p></div>
                        <div className={styles.quoteCard}><p>En podología clínica priorizamos salud, prevención y comodidad del paciente.</p></div>
                        <div className={styles.quoteCard}><p>El Láser Fox es una alternativa clínica e indolora para onicomicosis.</p></div>
                        <div className={styles.quoteCard}><p>La cámara hiperbárica favorece la oxigenación y la recuperación de tejidos.</p></div>
                        <div className={styles.quoteCard}><p>Cada procedimiento incluye indicaciones y cuidados posteriores claros.</p></div>
                        <div className={styles.quoteCard}><p>Si tienes dudas, nuestro equipo puede orientarte antes de comenzar.</p></div>
                        <div className={styles.quoteCard}><p>Puedes solicitar tu evaluación desde la sección de contacto.</p></div>
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
