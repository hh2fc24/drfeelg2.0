"use client";

import { useState } from "react";
import ServiceCard from "@/components/ServiceCard";
import ServiceModal from "@/components/ServiceModal";
import styles from "./page.module.css";
import Link from "next/link";

export default function Servicios() {
    type ServiceType = { title: string; description: string; category: string; imageUrl?: string; modalImageUrl?: string; href?: string; };
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
            imageUrl: "https://images.unsplash.com/photo-1584292181255-43ff30735fbc?auto=format&fit=crop&q=80&w=1200", // Aspirational: Body shape
            modalImageUrl: "https://alisa.shop/cdn/shop/products/smart-lipo-laser-machine-weight-loss-diode-lipo-lase-lipolysisslimming-machine-635nm-650nm-body-sculpting-beauty-spa-5120-73599054-3f6166c1674e47784ab63739eb85369a_1024x.jpg?v=1700312432", // Technical: Lipolaser machine
            href: "/contacto"
        },
        {
            title: "Anticelulitis Xcell Intense",
            description: "Transformación estructural de la piel. Pulveriza los nódulos celulíticos y tensa el tejido superficial para lograr unas piernas visiblemente lisas, firmes y luminosas.",
            category: "Alisamiento Dérmico",
            imageUrl: "https://dermatricia.com/wp-content/uploads/2023/10/Radiofrecuencia-piernas-768x768.jpg", // Clinical: Radiofrequency treatment on legs
            modalImageUrl: "https://nwzimg.wezhan.net/contents/sitefiles3607/18037120/images/8093701.png", // Technical: Velashape 3
            href: "/contacto"
        },
        {
            title: "Redefinición Body Tone",
            description: "Tonificación muscular supramáxima. El electromagnetismo de alta intensidad genera una hipertrofia pasiva que esculpe, levanta y define musculatura como ningún entrenamiento convencional puede.",
            category: "Arquitectura Muscular",
            imageUrl: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&q=80&w=1200", // Aspirational: Toned abs lifestyle
            modalImageUrl: "https://medicalescape.it/wp-content/uploads/2023/12/emsculpt-neo.webp", // Technical: Emsculpt EMS
            href: "/contacto"
        },
        {
            title: "Push Up Glúteos Perfecto",
            description: "Elevación y proyección anatómica. Protocolo especializado que tensa las fibras y realza el volumen natural del glúteo para un perfil corporal armónico y atractivo.",
            category: "Modelado Localizado",
            imageUrl: "https://luxurclinic.es/wp-content/uploads/2024/05/Vacumterapia-e1716212167959.jpg", // Clinical: Vacuum therapy clinic
            modalImageUrl: "https://lolesbodysculpting.com/wp-content/uploads/2024/01/IMG_1681-1024x844.jpg", // Technical: Vacuum therapy hardware
            href: "/contacto"
        },
        {
            title: "Depilación Láser Ice & IPL Freeze",
            description: "Piel perpetuamente suave y libre de vello. Despídete de la irritación con los estándares más altos de depilación médica, integrando un cabezal de enfriamiento continuo para confort absoluto.",
            category: "Piel Sedosa Constante",
            imageUrl: "https://images.unsplash.com/photo-1512496015851-a1fbaf694a50?auto=format&fit=crop&q=80&w=1200", // Aspirational: Perfect bare skin
            modalImageUrl: "https://sinpelitos.com/wp-content/uploads/2024/06/laser-soprano-titanium-facebook.jpg", // Technical: Titanium Diode Laser
            href: "/contacto"
        },
        {
            title: "Colección Facial: Derm & Antiage",
            description: "Desde LIMPIEZA PROFUNDA HYDROMAX hasta prevención ANTIAGE y reversión de edad AGEBACK. Protocolos faciales que devuelven la hidratación suprema, la luz espectacular y la juventud celular a tu rostro.",
            category: "Luminosidad Facial Premium",
            imageUrl: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&q=80&w=1200", // Aspirational: Glowing aesthetic face
            modalImageUrl: "https://www.elitelaser.es/media/ELITE-LASER-45-scaled.jpg", // Technical: Hydrafacial elite
        }
    ];

    const salud = [
        {
            title: "Sistema A.R.C. Láser Alemán (Onicomicosis)",
            description: "Erradicación clínica de precisión. Recupera la salud y estética absoluta de tus uñas mediante la tecnología láser europea más avanzada, asegurando resultados impecables sin medicamentos.",
            category: "Podología Clínica Láser",
            imageUrl: "https://images.unsplash.com/photo-1519824145371-296894a0daa9?auto=format&fit=crop&q=80&w=1200", // Aspirational: Aesthetic clean feet / spa environment
            modalImageUrl: "https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/themes/3673496/settings_images/bgSYyJY1RsSBZjKIZpnX_imagen_aplied.jpg", // Technical: ARC Laser FOX
            href: "/contacto"
        },
        {
            title: "Método Dr. Feelgood: Control de Peso Integral",
            description: "No es una dieta, es una recalibración metabólica. Un programa médico multidisciplinario que transforma tu relación con la alimentación y rediseña tu composición corporal para siempre.",
            category: "Bienestar Metabólico",
            imageUrl: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&q=80&w=1200", // Aspirational: Healthy food and balance
            modalImageUrl: "https://inbodycr.com/wp-content/uploads/elementor/thumbs/InBody-770-7-pkwpetejszfhm0cd85xao66yv3whjpz15mlzxg3bb4.jpg", // Technical: InBody 770 composition analyzer
            href: "/contacto"
        },
        {
            title: "Drenaje Linfático Especializado",
            description: "Alivio profundo y reactivación circulatoria. Diseñado para procesos pre-parto y recuperación post-operatoria, eliminando retención de líquidos y devolviendo la ligereza a tu cuerpo.",
            category: "Recuperación Fisiológica",
            imageUrl: "https://images.unsplash.com/photo-1617952986600-802f965dcdbc?auto=format&fit=crop&q=80&w=1200", // Aspirational: Lymphatic spa massage on legs
            modalImageUrl: "https://sc04.alicdn.com/kf/He312979836aa4de59f94ae903a6e9e42L.jpg", // Technical: Presotherapy compression boots
            href: "/contacto"
        },
        {
            title: "Terapia de Alivio Acelerado (Pain Relief)",
            description: "Tratamiento avanzado para Tendinitis, Fascitis Plantar y dolor lumbar crónico. Empleamos aparatología focalizada para desinflamar tejidos profundos y restaurar tu movilidad al 100%.",
            category: "Kinesiología Láser",
            imageUrl: "https://images.unsplash.com/photo-1594019736561-977a3f2855e6?auto=format&fit=crop&q=80&w=1200", // Aspirational: Serene back stretch / relief
            modalImageUrl: "https://m.media-amazon.com/images/I/71ztS0iT7zL._AC_SL1500_.jpg", // Technical: Shockwave / Laser pain equipment
            href: "/contacto"
        },
        {
            title: "Masoterapia Descontracturante Profunda",
            description: "Restauración de la tensión muscular crónica. Disuelve nudos tensionales y fatiga postural mediante presión isquémica guiada por especialistas clínicos.",
            category: "Terapia de Restauración",
            imageUrl: "https://images.unsplash.com/photo-1650044252595-cacd425982ff?auto=format&fit=crop&q=80&w=1200", // Aspirational: Deep tissue clinical massage
            modalImageUrl: "https://img.freepik.com/premium-photo/anatomical-model-showing-detailed-back-muscles-emphasizing-muscular-structure-human-anatomy-educational-medical-purposes_95891-80676.jpg", // Technical: Medical anatomical muscle diagram
            href: "/contacto"
        },
        {
            title: "Terapia Piernas Cansadas (Vascular Revival)",
            description: "Protocolo médico estético para reactivar el flujo venoso profundo. Combate la pesadez extrema y oxigena los tejidos inferiores generando una sensación de alivio y frescura inmediata.",
            category: "Microcirculación",
            imageUrl: "https://www.clinicapremiumestetica.com/wp-content/uploads/2022/07/Presoterapia-en-Clinica-Premium-Marbella.jpg", // Clinical: Presotherapy treatment
            modalImageUrl: "https://m.media-amazon.com/images/I/71wL+t+vIEL._AC_SX679_.jpg", // Technical: Air compression leg pump
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
                        <h2 className={styles.categoryTitle}>Salud Integral y Biocelular</h2>
                        <p className={styles.categoryDesc}>Protocolos clínicos de recuperación. Desde soluciones dermatológicas especializadas hasta terapias de regeneración nutricional directa en sangre que calibran tu bienestar desde la raíz celular.</p>
                    </div>
                    <div className={styles.grid}>
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
                    <div className={styles.grid}>
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
