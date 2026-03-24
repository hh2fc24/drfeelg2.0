"use client";

import { useState } from "react";
import ServiceCard from "@/components/ServiceCard";
import ServiceModal from "@/components/ServiceModal";
import styles from "./page.module.css";
import Link from "next/link";

export default function Servicios() {
    type ServiceType = { title: string; description: string; category: string; imageUrl?: string; modalImageUrl?: string; videoUrl?: string; galleryUrls?: string[]; href?: string; };
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
    const estetica = [
        {
            title: "Lipoláser Sin Cirugía",
            description: "Reducción adiposa de alto impacto. Modela tu figura y reduce de 1 a 2 tallas mediante tecnología láser no invasiva, eliminando la flacidez con resultados evidentes desde la primera sesión.",
            category: "Escultura Corporal",
            imageUrl: "/images/tratamientos/tratamiento1.jpg", 
            modalImageUrl: "/images/tratamientos/tratamiento1.jpg", 
            href: "/contacto"
        },
        {
            title: "Anticelulitis Xcell Intense",
            description: "Transformación estructural de la piel. Pulveriza los nódulos celulíticos y tensa el tejido superficial para lograr unas piernas visiblemente lisas, firmes y luminosas.",
            category: "Alisamiento Dérmico",
            imageUrl: "/images/tratamientos/tratamiento2.jpg",
            modalImageUrl: "/images/tratamientos/tratamiento2.jpg",
            href: "/contacto"
        },
        {
            title: "Colección Facial: Derm & Antiage",
            description: "Desde LIMPIEZA PROFUNDA HYDROMAX hasta prevención ANTIAGE y reversión de edad AGEBACK. Protocolos faciales que devuelven la hidratación suprema, la luz espectacular y la juventud celular a tu rostro.",
            category: "Luminosidad Facial Premium",
            imageUrl: "/images/tratamientos/hydromax.jpg",
            modalImageUrl: "/images/tratamientos/hydromax2.jpg",
            videoUrl: "/videos/hidromax.MOV",
            galleryUrls: [
                "/images/tratamientos/hydromax.jpg",
                "/images/tratamientos/hydromax2.jpg",
                "/images/tratamientos/hydromax3.jpg",
                "/images/tratamientos/hydromax4.jpg",
                "/images/tratamientos/hydromax5.jpg"
            ],
        }
    ];

    const salud = [
        {
            title: "Sistema A.R.C. Láser Alemán (Onicomicosis)",
            description: "Erradicación clínica de precisión. Recupera la salud y estética absoluta de tus uñas mediante la tecnología láser europea más avanzada, asegurando resultados impecables sin medicamentos.",
            category: "Podología Clínica Láser",
            imageUrl: "/images/tratamientos/podologia.jpg",
            modalImageUrl: "/images/tratamientos/podologia2.jpg",
            href: "/contacto"
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
                        <h2 className={styles.categoryTitle}>Salud Clínica Especializada</h2>
                        <p className={styles.categoryDesc}>Tratamientos médicos de alta precisión enfocados en recuperación funcional y bienestar dermatológico con tecnología láser avanzada.</p>
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
                        <h2 className={styles.categoryTitle}>Estética y Armonía</h2>
                        <p className={styles.categoryDesc}>Procedimientos no invasivos protagonizados por robótica avanzada y bioestimuladores inteligentes. Esculpimos, iluminamos y tensamos tu anatomía con el mayor margen de confort y seguridad clínica del rubro.</p>
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
