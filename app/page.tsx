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
      title: "Lipoláser Sin Cirugía",
      description: "Reducción adiposa de alto impacto. Modela tu figura y reduce tallas mediante tecnología láser no invasiva, con resultados evidentes.",
      category: "Escultura Corporal Extrema",
      imageUrl: "https://images.unsplash.com/photo-1584292181255-43ff30735fbc?auto=format&fit=crop&q=80&w=1200", // Aspirational feminine shape
      modalImageUrl: "https://alisa.shop/cdn/shop/products/smart-lipo-laser-machine-weight-loss-diode-lipo-lase-lipolysisslimming-machine-635nm-650nm-body-sculpting-beauty-spa-5120-73599054-3f6166c1674e47784ab63739eb85369a_1024x.jpg?v=1700312432",
      href: "/servicios"
    },
    {
      title: "Sistema A.R.C. Láser Alemán",
      description: "Erradicación clínica de Onicomicosis. Recupera la salud absoluta de tus uñas mediante la tecnología láser europea más avanzada sin medicamentos.",
      category: "Podología Clínica Láser",
      imageUrl: "https://images.unsplash.com/photo-1519824145371-296894a0daa9?auto=format&fit=crop&q=80&w=1200", // Aesthetic clean healthy foot spa
      modalImageUrl: "https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/themes/3673496/settings_images/bgSYyJY1RsSBZjKIZpnX_imagen_aplied.jpg",
      href: "/servicios"
    },
    {
      title: "Colección Facial: Derm & Antiage",
      description: "Desde hidratación suprema Hydromax hasta reversión de edad celular. Protocolos que devuelven la luz espectacular a tu rostro.",
      category: "Luminosidad Facial Premium",
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
            <span className={styles.eyebrow}>El Enfoque Clínico</span>
            <h2 className={styles.sectionTitle}>
              La evolución del <span className={styles.highlight}>Bienestar</span>
            </h2>
            <div className={styles.textBlock}>
              <p className={styles.text}>
                No creemos en transformaciones artificiales irreversibles. En Dr. Feelgood Upgrade Yourself practicamos estética médica integral.
              </p>
              <p className={styles.text}>
                Nuestro panel clínico, cien por ciento chileno y acreditado, diseña tratamientos orientados a la salud real de tu piel y cuerpo. Menos &quot;intervención exprés&quot;, más equilibrio. Utilizamos tecnología de clase mundial que dialoga con tu anatomía, no que compite con ella.
              </p>
            </div>
            <Link href="/quienes-somos" className="link-anim">
              Conoce nuestro Manifiesto
            </Link>
          </div>
        </div>
      </section>

      {/* Disruptive Parallax Break */}
      <section className={styles.parallaxSection}>
        <div className={styles.parallaxOverlay}>
          <div className="container" style={{ position: 'relative', zIndex: 2 }}>
            <h2 className={`${styles.parallaxTitle} animate-fade-up`}>
              Tu cuerpo merece el <br />estándar <span className={styles.highlight}>más alto.</span>
            </h2>
            <p className={`${styles.parallaxDesc} animate-fade-up delay-1`}>
              Tratamientos biomédicos diseñados para resultados excepcionales y armonía absoluta.
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
              <h2 className={styles.sectionTitle}>Tratamientos <span className={styles.highlight}>Premium</span></h2>
            </div>
            <Link href="/servicios" className="link-anim">
              Catálogo Completo
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
              <h2 className={styles.ctaTitle}>Despierta tu verdadera luz.</h2>
              <p className={styles.ctaText}>
                Agenda una consulta diagnóstica de alto nivel, sin costo. Evaluaremos tu perfil biométrico y tus expectativas estéticas de manera honesta y científica.
              </p>
              <Link href="/contacto" className="btn btn-primary">
                Agendar Consulta Elegante
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
