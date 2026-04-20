import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

const facialServices = [
  {
    title: "Botox (Dysport)",
    price: "Desde $150.000",
    areas: "Frente, entrecejo y patas de gallo",
    text: "Relaja lineas de expresion con una explicacion simple sobre duracion, sensacion y cuidados posteriores.",
    image: "/images/sourced/dysport-official.png",
    alt: "Imagen oficial de Dysport",
    fit: "contain" as const,
  },
  {
    title: "Acido Hialuronico",
    price: "Desde $180.000",
    areas: "Labios, rinomodelacion, ojeras y menton",
    text: "Relleno premium para volumen, perfil y armonizacion facial segun la zona a tratar.",
    image: "/images/sourced/restylane-fillers-official.png",
    alt: "Pack oficial de fillers de acido hialuronico Restylane",
    fit: "contain" as const,
  },
];

const podologyServices = [
  {
    title: "Podologia Clinica",
    price: "Consultar",
    text: "Evaluacion, corte tecnico y prevencion desde un enfoque sanitario, no estetico.",
    image: "/images/tratamientos/podologia.jpg",
    alt: "Atencion podologica clinica real",
    fit: "cover" as const,
  },
  {
    title: "Laser Fox",
    price: "Consultar",
    text: "Tecnologia alemana para onicomicosis, verrugas y cirugia menor con experiencia indolora.",
    image: "/images/sourced/fox-980-official.png",
    alt: "Equipo FOX 980 de A.R.C. Laser",
    fit: "contain" as const,
  },
  {
    title: "Camara Hiperbarica",
    price: "Consultar",
    text: "Oxigenacion profunda para recuperacion de tejidos y soporte a la reparacion celular.",
    image: "/images/sourced/st801-exterior-reference.jpg",
    alt: "Referencia visual frontal del modelo ST801",
    fit: "cover" as const,
  },
  {
    title: "Taping Neuromuscular",
    price: "Consultar",
    text: "Soporte terapeutico para descarga, recuperacion muscular y estabilidad funcional.",
    image: "/images/tratamientos/podologia2.jpg",
    alt: "Procedimiento clinico podologico",
    fit: "cover" as const,
  },
];

const faq = [
  {
    question: "Botox (Dysport): ¿duele?",
    answer:
      "Es un procedimiento rapido y bien tolerado. La sensacion suele ser minima y la evaluacion permite anticipar dudas o sensibilidad del paciente.",
  },
  {
    question: "Botox (Dysport): ¿cuanto dura?",
    answer:
      "La duracion habitual se explica en la evaluacion segun zona, gesticulacion y objetivo estetico, con un rango esperado cercano a varios meses.",
  },
  {
    question: "Botox (Dysport): cuidados posteriores",
    answer:
      "Se entregan indicaciones simples y claras para proteger el resultado inmediato y la correcta distribucion del producto.",
  },
  {
    question: "Acido Hialuronico: ¿duele?",
    answer:
      "La aplicacion se planifica segun la zona y suele ser tolerable. La prioridad es mantener una experiencia segura y tranquila.",
  },
  {
    question: "Acido Hialuronico: ¿cuanto dura?",
    answer:
      "Depende de la zona y del tipo de relleno. En evaluacion se explica expectativa realista de duracion y mantencion.",
  },
  {
    question: "Acido Hialuronico: cuidados posteriores",
    answer:
      "Se indican cuidados basicos, inflamacion esperable y señales normales del post procedimiento para evitar ansiedad innecesaria.",
  },
];

export default function ServiciosPage() {
  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className="container">
          <p className="eyebrow">Servicios</p>
          <h1>Estetica facial y podologia con una narrativa clara para convertir.</h1>
          <p className={styles.lead}>
            La estructura separa estetica facial de podologia clinica, refuerza
            autoridad medica y baja friccion para que el usuario pida su
            evaluacion gratuita.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className={styles.sectionHeader}>
            <p className="eyebrow">Estetica facial</p>
            <h2>Diferenciar Botox (Dysport) de Acido Hialuronico.</h2>
          </div>

          <div className={styles.dualGrid}>
            {facialServices.map((service) => (
              <article key={service.title} className={styles.card}>
                <div className={styles.imageWrap}>
                  <Image
                    src={service.image}
                    alt={service.alt}
                    fill
                    className={styles.cardImage}
                    style={{ objectFit: service.fit }}
                  />
                </div>
                <span className={styles.price}>{service.price}</span>
                <h3>{service.title}</h3>
                <p className={styles.meta}>{service.areas}</p>
                <p>{service.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={`${styles.darkSection} section`}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <p className="eyebrow">Podologia clinica</p>
            <h2>Salud seria, lenguaje cercano y foco en recuperacion.</h2>
          </div>

          <div className={styles.grid}>
            {podologyServices.map((service) => (
              <article key={service.title} className={styles.darkCard}>
                <div className={styles.imageWrap}>
                  <Image
                    src={service.image}
                    alt={service.alt}
                    fill
                    className={styles.cardImage}
                    style={{ objectFit: service.fit }}
                  />
                </div>
                <span className={styles.price}>{service.price}</span>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className={styles.sectionHeader}>
            <p className="eyebrow">FAQ corto</p>
            <h2>Respuestas breves para las objeciones mas comunes.</h2>
          </div>

          <div className={styles.grid}>
            {faq.map((item) => (
              <article key={item.question} className={styles.card}>
                <h3>{item.question}</h3>
                <p>{item.answer}</p>
              </article>
            ))}
          </div>

          <div className={styles.cta}>
            <h2>Si el paciente ya sabe lo que busca, el siguiente paso es la evaluacion gratuita.</h2>
            <Link href="/contacto#evaluacion" className="btn btn-primary">
              Evaluacion Gratuita
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
