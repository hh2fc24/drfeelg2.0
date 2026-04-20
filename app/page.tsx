import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

const serviceCards = [
  {
    title: "Podologia Clinica",
    price: "Consultar",
    text: "Salud del pie con evaluacion, corte tecnico preventivo y enfoque clinico serio.",
  },
  {
    title: "Botox (Dysport)",
    price: "Desde $150.000",
    text: "Frente, entrecejo y patas de gallo con protocolo claro y resultados armónicos.",
  },
  {
    title: "Acido Hialuronico",
    price: "Desde $180.000",
    text: "Labios, rinomodelacion, ojeras y menton con relleno premium y plan individual.",
  },
  {
    title: "Taping Neuromuscular",
    price: "Consultar",
    text: "Soporte terapeutico para recuperacion muscular y descarga funcional.",
  },
];

const differentiators = [
  "Evaluacion Gratuita como CTA principal del sitio.",
  "Podologia presentada como salud seria, no como servicio cosmetico.",
  "Camara Hiperbarica O2Life para oxigenacion profunda y recuperacion de tejidos.",
  "Laser Fox aleman e indoloro como highlight tecnologico.",
];

const testimonials = [
  "La explicacion fue clara, profesional y sin tecnicismos que asusten.",
  "Se nota un enfoque medico real, especialmente en podologia clinica.",
  "La evaluacion gratuita orienta muy bien antes de decidir cualquier tratamiento.",
];

const visualProof = [
  {
    src: "/images/tratamientos/podologia2.jpg",
    alt: "Atencion podologica clinica en procedimiento real",
    title: "Podologia como salud seria",
    text: "Imagen real de atencion clinica para sostener el tono medico y cercano pedido por cliente.",
    fit: "cover" as const,
  },
  {
    src: "/images/tratamientos/tratamiento1.jpg",
    alt: "Box clinico minimalista con sillon ergonomico",
    title: "Entorno medico-premium",
    text: "Box limpio, iluminacion funcional y mobiliario blanco con lectura profesional y acogedora.",
    fit: "cover" as const,
  },
  {
    src: "/images/sourced/fox-980-official.png",
    alt: "Equipo FOX 980 de A.R.C. Laser",
    title: "Highlight tecnologico",
    text: "El Laser Fox queda visibilizado como tecnologia de precision para onicomicosis y podologia avanzada.",
    fit: "contain" as const,
  },
];

export default function Home() {
  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className={`container ${styles.heroGrid}`}>
          <div className={styles.heroCopy}>
            <p className="eyebrow">Laura Llamanos</p>
            <h1>
              Podologia clinica y estetica facial con mirada medica, humana y
              cercana.
            </h1>
            <p className={styles.lead}>
              Sitio orientado a convertir con evaluacion gratuita, autoridad
              profesional y una experiencia medico-premium pensada para mobile.
            </p>

            <div className={styles.heroActions}>
              <Link href="/contacto#evaluacion" className="btn btn-primary">
                Evaluacion Gratuita
              </Link>
              <Link href="/tecnologia" className="btn btn-secondary">
                Ver Tecnologia
              </Link>
            </div>

            <div className={styles.highlightBox}>
              <strong>Laser Fox + Camara Hiperbarica</strong>
              <p>
                Tecnologia de precision para onicomicosis, recuperacion de
                tejidos y soporte clinico especializado.
              </p>
            </div>
          </div>

          <div className={styles.heroVisual}>
            <div className={styles.heroImageCard}>
              <Image
                src="/images/tratamientos/podologia.jpg"
                alt="Atencion podologica clinica"
                fill
                priority
                className={styles.image}
              />
            </div>
            <div className={styles.floatingStat}>
              <span className={styles.statLabel}>Tecnologia destacada</span>
              <p>O2Life ST801 y Laser Fox</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className={styles.sectionIntro}>
            <p className="eyebrow">Diferenciadores</p>
            <h2>Diseno limpio, medico y acogedor.</h2>
          </div>
          <div className={styles.diffGrid}>
            {differentiators.map((item) => (
              <article key={item} className={styles.diffCard}>
                <p>{item}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={`${styles.servicesSection} section`}>
        <div className="container">
          <div className={styles.sectionIntro}>
            <p className="eyebrow">Servicios</p>
            <h2>Catalogo claro para decidir mas rapido.</h2>
          </div>

          <div className={styles.servicesGrid}>
            {serviceCards.map((service) => (
              <article key={service.title} className={styles.serviceCard}>
                <span className={styles.servicePrice}>{service.price}</span>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
              </article>
            ))}
          </div>

          <div className={styles.serviceActions}>
            <Link href="/servicios" className="btn btn-primary">
              Ver Servicios
            </Link>
            <Link href="/contacto#evaluacion" className="btn btn-secondary">
              Solicitar Evaluacion
            </Link>
          </div>
        </div>
      </section>

      <section className={`${styles.technologyStrip} section`}>
        <div className={`container ${styles.technologyGrid}`}>
          <div>
            <p className="eyebrow">Tecnologia</p>
            <h2>Laser Fox indoloro y Camara Hiperbarica para recuperacion acelerada.</h2>
          </div>
          <div className={styles.techCopy}>
            <p>
              El Laser Fox se comunica como tecnologia de punta alemana para
              onicomicosis y podologia avanzada. La camara hiperbarica refuerza
              el mensaje de oxigenacion celular profunda y apoyo a la
              cicatrizacion.
            </p>
            <Link href="/tecnologia" className="btn btn-secondary">
              Detalle Tecnico
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className={styles.sectionIntro}>
            <p className="eyebrow">Material visual</p>
            <h2>Las imagenes reales del proyecto ahora sostienen la promesa del sitio.</h2>
          </div>
          <div className={styles.visualGrid}>
            {visualProof.map((item) => (
              <article key={item.title} className={styles.visualCard}>
                <div className={styles.visualImageWrap}>
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    className={styles.image}
                    style={{ objectFit: item.fit }}
                  />
                </div>
                <div className={styles.visualContent}>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className={styles.sectionIntro}>
            <p className="eyebrow">Testimonios</p>
            <h2>Un tono profesional y empatico tambien se siente en la experiencia.</h2>
          </div>
          <div className={styles.testimonialGrid}>
            {testimonials.map((item) => (
              <article key={item} className={styles.testimonialCard}>
                <p>{item}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.finalCta}>
        <div className={`container ${styles.finalCtaInner}`}>
          <div>
            <p className="eyebrow">CTA principal</p>
            <h2>La evaluacion gratuita debe estar siempre a un clic.</h2>
          </div>
          <Link href="/contacto#evaluacion" className="btn btn-primary">
            Evaluacion Gratuita
          </Link>
        </div>
      </section>
    </div>
  );
}
