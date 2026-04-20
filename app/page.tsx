"use client";

import { useState } from "react";
import Hero from "@/components/Hero";
import ServiceCard from "@/components/ServiceCard";
import ServiceModal from "@/components/ServiceModal";
import TestimonialSlider from "@/components/TestimonialSlider";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  type ServiceType = { title: string; description: string; category: string; imageUrl?: string; modalImageUrl?: string; href?: string; };
  const [selectedService, setSelectedService] = useState<ServiceType | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = (service: ServiceType) => {
    setSelectedService(service);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedService(null), 500);
  };
  const featuredServices = [
    {
      title: "Evaluación Clínica",
      description: "Una primera consulta para revisar tu caso, resolver dudas y orientar el tratamiento más adecuado.",
      category: "Primera Consulta",
      imageUrl: "https://images.unsplash.com/photo-1584292181255-43ff30735fbc?auto=format&fit=crop&q=80&w=1200", // Aspirational feminine shape
      modalImageUrl: "https://alisa.shop/cdn/shop/products/smart-lipo-laser-machine-weight-loss-diode-lipo-lase-lipolysisslimming-machine-635nm-650nm-body-sculpting-beauty-spa-5120-73599054-3f6166c1674e47784ab63739eb85369a_1024x.jpg?v=1700312432",
      href: "/servicios"
    },
    {
      title: "Sistema A.R.C. Láser Alemán",
      description: "Tratamiento clínico para onicomicosis con tecnología láser y una experiencia cómoda para el paciente.",
      category: "Podología Clínica Láser",
      imageUrl: "https://images.unsplash.com/photo-1519824145371-296894a0daa9?auto=format&fit=crop&q=80&w=1200", // Aesthetic clean healthy foot spa
      modalImageUrl: "https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/themes/3673496/settings_images/bgSYyJY1RsSBZjKIZpnX_imagen_aplied.jpg",
      href: "/servicios"
    },
    {
      title: "Botox y Ácido Hialurónico",
      description: "Procedimientos faciales indicados según evaluación médica, con foco en resultados armónicos y naturales.",
      category: "Estética Facial",
      imageUrl: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&q=80&w=1200", // Glowing facial skin
      modalImageUrl: "https://www.elitelaser.es/media/ELITE-LASER-45-scaled.jpg",
      href: "/servicios"
    }
  ];

  return (
    <div className={styles.homeContainer}>
      <Hero />

      {/* Philosophy Section - Editorial Layout */}
      <section className={`section ${styles.philosophySection}`}>
        <div className={`container ${styles.philosophyGrid}`}>
          {/* Image first in DOM for asymmetrical layout but styled differently */}
          <div className={`${styles.philosophyImageWrapper} animate-fade-up`}>
            <div className={styles.philosophyImage}></div>
          </div>

          <div className={`${styles.philosophyContent} animate-fade-up delay-2`}>
            <span className={styles.eyebrow}>Atención profesional</span>
            <h2 className={styles.sectionTitle}>
              Cuidado estético con <span className={styles.highlight}>criterio clínico</span>
            </h2>
            <div className={styles.textBlock}>
              <p className={styles.text}>
                En Dr. Feelgood cada tratamiento parte con una evaluación responsable y una indicación clara.
              </p>
              <p className={styles.text}>
                Nuestro equipo trabaja con tecnología certificada y un enfoque personalizado para acompañarte de forma segura en cada etapa.
              </p>
            </div>
            <Link href="/quienes-somos" className="link-anim">
              Conoce la clínica
            </Link>
          </div>
        </div>
      </section>

      {/* Disruptive Parallax Break */}
      <section className={styles.parallaxSection}>
        <div className={styles.parallaxOverlay}>
          <div className="container" style={{ position: 'relative', zIndex: 2 }}>
            <h2 className={`${styles.parallaxTitle} animate-fade-up`}>
              Tecnología y experiencia <br />para tu <span className={styles.highlight}>bienestar.</span>
            </h2>
            <p className={`${styles.parallaxDesc} animate-fade-up delay-1`}>
              Atención clínica, procedimientos indicados según evaluación y acompañamiento profesional.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Services Preview */}
      <section className={`section ${styles.servicesSection}`}>
        <div className="container">
          <div className={`${styles.servicesHeader} animate-fade-up`}>
            <div>
              <span className={styles.eyebrow}>Obras Maestras</span>
              <h2 className={styles.sectionTitle}>Tratamientos <span className={styles.highlight}>destacados</span></h2>
            </div>
            <Link href="/servicios" className="link-anim">
              Ver todos
            </Link>
          </div>

          <div className={styles.servicesGrid}>
            {featuredServices.map((service, idx) => (
              <div key={idx} className={`animate-fade-up delay-${idx + 1}`}>
                <ServiceCard {...service} onClick={() => handleOpenModal(service)} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className={styles.testimonialsSection}>
        <TestimonialSlider />
      </section>

      {/* Final CTA - Editorial Aesthetic */}
      <section className={`section ${styles.ctaSection}`}>
        <div className="container">
          <div className={`${styles.ctaBox} animate-fade-up`}>
            <div className={styles.ctaContent}>
              <span className={styles.eyebrowDark}>Empieza hoy</span>
              <h2 className={styles.ctaTitle}>Agenda tu evaluación.</h2>
              <p className={styles.ctaText}>
                Cuéntanos tu motivo de consulta y te orientaremos con información clara para definir el tratamiento más adecuado.
              </p>
              <Link href="/contacto" className="btn btn-primary">
                Solicitar Evaluación
              </Link>
            </div>
          </div>
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
