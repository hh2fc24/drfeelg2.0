"use client";

import { useState } from "react";
import ServiceCard from "@/components/ServiceCard";
import ServiceModal from "@/components/ServiceModal";
import styles from "./page.module.css";
import Link from "next/link";

export default function Servicios() {
    type ServiceType = { title: string; description: string | string[]; category: string; benefitsTitle?: string; benefits?: string[]; prices?: string[]; imageUrl?: string; modalImageUrl?: string; videoUrl?: string; galleryUrls?: string[]; href?: string; };
    const [selectedService, setSelectedService] = useState<ServiceType | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpenModal = (service: ServiceType) => {
        setSelectedService(service);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        // Retain the service data briefly so exit animation holds content
        setTimeout(() => setSelectedService(null), 500);
    };
    const salud = [
        {
            title: "Cámaras Hiperbáricas",
            description: "Tratamiento que combina el aumento de la presión atmosférica junto con una alta concentración de oxígeno. Gracias a esto, el organismo logra una mayor oxigenación a nivel celular, favoreciendo distintos procesos naturales del cuerpo.",
            category: "Bienestar Integral",
            imageUrl: "/images/tratamientos/tratamiento1.jpg", 
            modalImageUrl: "/images/tratamientos/tratamiento1.jpg", 
            benefitsTitle: "Beneficios",
            benefits: [
                "Disminución de la inflamación.",
                "Favorece el sistema Vascular.",
                "Aceleración de la recuperación y reparación de tejidos.",
                "Estimulación de la energía celular.",
                "Mejor Cicatrización de Heridas.",
                "Recuperación muscular mas rapida.",
                "Recuperación de lesiones (desgarro muscular, esguince, tendinitis)."
            ],
            prices: [
                "1 sesión de 60 minutos: $20.000",
                "Pack 10 sesiones: $199.000"
            ]
        },
        {
            title: "Podología Clínica",
            description: "Ofrecemos un servicio integral de podologia Clinica y Estetica, enfocado en la salud, prevención y bienestar de tus pies. Nuestros tratamientos están diseñados para abordar tanto afecciones podológicas como el cuidado estético, entregando soluciones profesionales adaptadas a cada paciente.",
            category: "Bienestar Integral",
            imageUrl: "/images/tratamientos/podologia.jpg",
            modalImageUrl: "/images/tratamientos/podologia.jpg",
            benefitsTitle: "Nuestros Tratamientos",
            benefits: [
                "Podologia Clinica Basica: evaluacion, onicotomia, pulido de talones, hidratación y masaje final.",
                "Podología clínica uña encarnada o despiculizacion + tratamiento para formar bordes laterales.",
                "Podología clínica y onicomicosis: evaluación, onicotomia, desbastado de láminas, pulido de talones, hidratación y masaje final.",
                "Podología clínica y helomas o queratosis: evaluación, onicotomia, desbastado de láminas, retiro de queratosis y helomas, hidratación y masaje final.",
                "Reconstrucción de uñas con onicomicosis: tratamiento con gel antimicótico (se puede esmaltar).",
                "Podología clínica spa: onicotomia, pulido de talones, desbastado, 15 min de hidromasaje con luz infrarroja, exfoliación, hidratación y masaje."
            ],
            prices: [
                "Podologia Clinica Basica: $35.000",
                "Uña encarnada o despiculizacion: $40.000",
                "Onicomicosis: $40.000",
                "Helomas o queratosis: $40.000",
                "Reconstrucción uñas con onicomicosis: $70.000",
                "Podología clínica spa: $45.000"
            ]
        },
        {
            title: "Taping Neuromuscular en pies",
            description: "Es una técnica terapéutica que utiliza cintas elásticas adhesivas. Estimulando músculos, mejorando la circulación y disminuyendo el dolor, sin limitar el movimiento natural del pie.",
            category: "Bienestar Integral",
            imageUrl: "/images/tratamientos/podologia2.jpg",
            modalImageUrl: "/images/tratamientos/podologia2.jpg",
            benefitsTitle: "Se utiliza para",
            benefits: [
                "Dolor e inflamación de hallux valgus",
                "Tratamiento para hallux valgus incipiente",
                "Fascitis plantar",
                "Espolón calcáneo",
                "Torceduras de tobillo",
                "Desgarro muscular"
            ]
        },
        {
            title: "Tratamiento Uñas con Hongos (Láser Fox)",
            description: [
                "La Onicomicosis, también conocida como infección por hongos en las uñas o Tinea Unguim, es una afección común que afecta tanto a las uñas de los pies como de las manos. El tratamiento láser para onicomicosis ha surgido como una alternativa altamente efectiva para eliminar los hongos, evitando los efectos secundarios indeseables de los tratamientos tradicionales.",
                "A diferencia de los medicamentos antifúngicos, que pueden ocasionar daños sistémicos, el láser para uñas con hongo es un procedimiento no invasivo, indoloro y sin efectos secundarios. El láser emite una energía que penetra la uña, eliminando el hongo de raíz.",
                "Se aplica un láser de baja frecuencia que produce una energía térmica que daña las paredes celulares de los hongos, ocasionando que pierdan su capacidad de sobrevivir y reproducirse. Así, a medida que la uña crece, el tejido nuevo sale sano."
            ],
            category: "Bienestar Integral",
            imageUrl: "/images/tratamientos/podologia2.jpg",
            modalImageUrl: "/images/tratamientos/podologia2.jpg",
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

    const estetica = [
        {
            title: "Botox",
            description: [
                "El tratamiento con Toxina Botulínica Tipo A, conocido comúnmente como Botox, es uno de los procedimientos estéticos más utilizados en el mundo para suavizar arrugas de expresión y prevenir el envejecimiento facial.",
                "Con el paso del tiempo, los movimientos repetitivos del rostro pueden generar líneas y arrugas visibles. La toxina botulínica actúa relajando de forma controlada los músculos responsables de estas arrugas, permitiendo que la piel se vea más lisa, descansada y rejuvenecida.",
                "En Dr. Feelgood ocupamos Dysport. Una forma altamente purificada de Toxina Botulínica Tipo A, utilizada por especialistas en todo el mundo para relajar de manera precisa los músculos responsables de las líneas de expresión. Gracias a su tecnología avanzada, permite lograr resultados naturales, armónicos y elegantes."
            ],
            category: "Estética Facial",
            imageUrl: "/images/tratamientos/tratamiento2.jpg",
            modalImageUrl: "/images/tratamientos/tratamiento2.jpg",
            benefitsTitle: "¿Por qué elegir Dysport?",
            benefits: [
                "Resultados naturales: Suaviza las arrugas sin congelar la expresión facial.",
                "Inicio de acción más rápido: Efectos visibles entre 2 y 3 días.",
                "Difusión más uniforme: Distribución homogénea en áreas como la frente.",
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
                "Es una sustancia que se encuentra de forma natural en nuestro organismo y cumple un rol fundamental en la hidratación, elasticidad y firmeza de la piel. Con el paso del tiempo, su presencia disminuye, lo que puede provocar pérdida de volumen, aparición de arrugas y signos visibles de envejecimiento.",
                "En medicina estética, el ácido hialurónico se utiliza para restaurar volumen, mejorar contornos faciales y aportar hidratación profunda, logrando resultados armónicos y naturales. Es un tratamiento mínimamente invasivo que permite realzar la belleza del rostro sin alterar su expresión.",
                "Gracias a su versatilidad, puede aplicarse en diferentes zonas a nivel facial. Cada tratamiento se debe realizar de manera personalizada para resaltar la belleza natural de cada paciente."
            ],
            category: "Estética Facial",
            imageUrl: "/images/tratamientos/hydromax2.jpg",
            modalImageUrl: "/images/tratamientos/hydromax2.jpg",
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
        }
    ];

    return (
        <div className={styles.servicesPage}>
            <header className={styles.header}>
                <div className={`container ${styles.headerContainer}`}>
                    <div className="animate-fade-up">
                        <span className={styles.eyebrow}>Excelencia Médica</span>
                    </div>
                    <h1 className="animate-fade-up delay-1">
                        <span className={styles.titleLine}>Ciencia, Precisión</span>
                        <span className={styles.titleLine}>y <span className={styles.highlight}>Resultados.</span></span>
                    </h1>
                    <p className={`${styles.subtitle} animate-fade-up delay-2`}>
                        Descubre nuestra rigurosa segmentación de tratamientos clínicos. Tecnología de vanguardia y protocolos médicos diseñados tanto para la armonía de tu silueta como para tu restablecimiento biológico sistémico.
                    </p>
                </div>
            </header>

            {/* SEGMENT 1: Salud Integral (Health) */}
            <section className="section" id="salud">
                <div className="container">
                    <div className={`${styles.categoryHeader} animate-fade-up`}>
                        <span className={styles.categoryNumber}>01</span>
                        <h2 className={styles.categoryTitle}>Bienestar Integral</h2>
                        <p className={styles.categoryDesc}>Tratamientos enfocados en la salud, recuperación funcional y bienestar sistémico, diseñados para restaurar tu calidad de vida.</p>
                    </div>
                    <div className={`${styles.grid} ${salud.length <= 2 ? styles.gridCompact : ""}`}>
                        {salud.map((s, idx) => (
                            <div key={idx} className={`animate-fade-up delay-${(idx % 3) + 1}`}>
                                <ServiceCard {...s} onClick={() => handleOpenModal(s)} />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <div className={styles.divider}><div className="container"><hr /></div></div>

            {/* SEGMENT 2: Estética y Armonía (Cosmetics) */}
            <section className="section" id="estetica">
                <div className="container">
                    <div className={`${styles.categoryHeader} animate-fade-up`}>
                        <span className={styles.categoryNumber}>02</span>
                        <h2 className={styles.categoryTitle}>Estética Facial</h2>
                        <p className={styles.categoryDesc}>Procedimientos estéticos de vanguardia con toxina botulínica y ácido hialurónico. Resaltamos tu belleza natural con resultados armónicos y duraderos.</p>
                    </div>
                    <div className={`${styles.grid} ${estetica.length <= 2 ? styles.gridCompact : ""}`}>
                        {estetica.map((s, idx) => (
                            <div key={idx} className={`animate-fade-up delay-${(idx % 3) + 1}`}>
                                <ServiceCard {...s} onClick={() => handleOpenModal(s)} />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Strategic Phrases - Quote Banner */}
            <section className={`section ${styles.quoteSection}`}>
                <div className="container animate-fade-up">
                    <h2 style={{ textAlign: 'center', fontFamily: 'var(--font-serif)', fontSize: '2.5rem', marginBottom: '3rem', color: 'var(--color-primary-gold-dark)' }}>Nuestra Filosofía</h2>
                    <div className={styles.quoteGrid}>
                        <div className={styles.quoteCard}>
                            <p>"La belleza comienza con una piel bien hidratada y limpia."</p>
                        </div>
                        <div className={styles.quoteCard}>
                            <p>"No es sobre estética, es sobre amor propio."</p>
                        </div>
                        <div className={styles.quoteCard}>
                            <p>"Invertir en ti es el proyecto más rentable de tu vida."</p>
                        </div>
                        <div className={styles.quoteCard}>
                            <p>"Resalta tu belleza natural, nosotros solo te ayudamos a verla."</p>
                        </div>
                        <div className={styles.quoteCard}>
                            <p>"Cuida tu piel hoy, ella te lo agradecerá mañana."</p>
                        </div>
                        <div className={styles.quoteCard}>
                            <p>"Tu piel tiene memoria, dale un tratamiento que valga la pena recordar."</p>
                        </div>
                        <div className={styles.quoteCard}>
                            <p>"¿Lista para tu mejor versión? Reserva tu cita aquí."</p>
                        </div>
                        <div className={styles.quoteCard}>
                            <p>"No lo dejes para después, agenda tu evaluación."</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className={`section ${styles.ctaSection}`}>
                <div className={`container ${styles.ctaContainer} animate-fade-up`}>
                    <h2 className={styles.ctaTitle}>¿Necesitas orientación biomédica?</h2>
                    <p className={styles.ctaSubtitle}>Agenda una evaluación preliminar para diseñar tu estrategia de recuperación.</p>
                    <Link href="/contacto" className="btn" style={{ backgroundColor: 'var(--color-primary-gold)', color: '#fff', border: 'none', padding: '1.2rem 3rem' }}>Reservar Diagnóstico Integral</Link>
                </div>
            </section>

            {/* Premium Glassmorphism Modal */}
            <ServiceModal
                isOpen={isModalOpen}
                onClose={handleCloseModal}
                service={selectedService}
            />
        </div>
    );
}
