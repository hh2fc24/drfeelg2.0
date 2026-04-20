"use client";

import { useState } from "react";
import Hero from "@/components/Hero";
import ServiceCard from "@/components/ServiceCard";
import ServiceModal from "@/components/ServiceModal";
import TestimonialSlider from "@/components/TestimonialSlider";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  type ServiceType = {
    title: string;
    description: string;
    category: string;
    imageUrl?: string;
    modalImageUrl?: string;
    imageFit?: "cover" | "contain";
    imageBackground?: string;
    href?: string;
  };
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
  const featuredServices: ServiceType[] = [
    {
      title: "Evaluación Clínica",
      description: "Una primera consulta para revisar tu caso, resolver dudas y definir una indicación responsable.",
      category: "Primera Consulta",
      imageUrl: "/images/instalaciones/instalacion_0075.jpg",
      modalImageUrl: "/images/instalaciones/instalacion_0075.jpg",
      href: "/servicios"
    },
    {
      title: "Láser Fox para Onicomicosis",
      description: "Tecnología A.R.C. Laser para tratar onicomicosis de forma precisa, cómoda e indolora.",
      category: "Podología Clínica Láser",
      imageUrl: "/images/sourced/fox-980-official.png",
      modalImageUrl: "/images/sourced/fox-980-official.png",
      imageFit: "contain",
      imageBackground: "#f9f7f5",
      href: "/servicios"
    },
    {
      title: "Botox (Dysport)",
      description: "Toxina botulínica indicada según evaluación médica para líneas de expresión y prevención.",
      category: "Estética Facial",
      imageUrl: "/images/sourced/dysport-official.png",
      modalImageUrl: "/images/sourced/dysport-official.png",
      imageFit: "contain",
      imageBackground: "#f9f7f5",
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
              <span className={styles.eyebrow}>Áreas destacadas</span>
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
                Evaluación Gratuita
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
