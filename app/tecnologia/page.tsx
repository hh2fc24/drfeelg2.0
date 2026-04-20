import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

const chamberModels = [
  {
    name: "O2Life ST801 1.4ATA",
    pressure: "1.4 atmosferas",
    price: "CLP 6.999.990",
    detail:
      "Oxigenacion celular profunda para apoyar recuperacion acelerada y mejor respuesta tisular.",
  },
  {
    name: "O2Life ST801 1.5ATA",
    pressure: "1.5 atmosferas",
    price: "CLP 8.599.990",
    detail:
      "Mayor presion terapeutica para protocolos que buscan un soporte intensivo en oxigenacion y regeneracion.",
  },
];

const laserApplications = [
  "Tratamiento de onicomicosis",
  "Verrugas plantares y periungueales",
  "Cirugia menor podologica",
];

export default function TecnologiaPage() {
  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className="container">
          <div className={styles.heroContent}>
            <p className="eyebrow">Tecnologia clinica</p>
            <h1>
              Equipamiento medico para una experiencia precisa, profesional y
              cercana.
            </h1>
            <p className={styles.lead}>
              Laura Llamanos integra tecnologia de recuperacion y podologia
              avanzada para abordar salud del pie, regeneracion de tejidos y
              procedimientos con foco en comodidad real del paciente.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className={styles.sectionHeader}>
            <p className="eyebrow">Camara hiperbarica</p>
            <h2>Linea O2Life ST801</h2>
            <p>
              Beneficio principal para la web: oxigenacion celular profunda
              para recuperacion acelerada.
            </p>
          </div>

          <div className={styles.chamberGrid}>
            <div className={styles.mediaPanel}>
              <div className={styles.primaryVisual}>
                <Image
                  src="/images/sourced/st801-exterior-reference.jpg"
                  alt="Referencia visual frontal del modelo ST801"
                  fill
                  className={styles.image}
                />
              </div>
              <div className={styles.secondaryVisual}>
                <Image
                  src="/images/sourced/st801-interior-reference.jpg"
                  alt="Referencia visual interior del modelo ST801"
                  fill
                  className={styles.image}
                />
              </div>
            </div>
            {chamberModels.map((model) => (
              <article key={model.name} className={styles.card}>
                <span className={styles.cardLabel}>Modelo</span>
                <h3>{model.name}</h3>
                <p className={styles.cardMeta}>Presion: {model.pressure}</p>
                <p className={styles.cardText}>{model.detail}</p>
                <p className={styles.price}>Valor referencial: {model.price}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={`${styles.laserSection} section`}>
        <div className="container">
          <div className={styles.laserGrid}>
            <div>
              <p className="eyebrow">Highlight tecnologico</p>
              <h2>Laser Fox de A.R.C. Laser</h2>
              <p className={styles.laserText}>
                Tecnologia alemana de precision para podologia avanzada. En la
                web debe mostrarse como un diferenciador claro por ser un
                tratamiento indoloro y de enfoque clinico.
              </p>
              <div className={styles.laserVisual}>
                <Image
                  src="/images/sourced/fox-980-official.png"
                  alt="FOX 980 oficial de A.R.C. Laser"
                  fill
                  className={styles.imageContain}
                />
              </div>
            </div>

            <div className={styles.card}>
              <span className={styles.cardLabel}>Aplicaciones</span>
              <ul className={styles.list}>
                {laserApplications.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <p className={styles.cardText}>
                Atributo web recomendado: tecnologia laser de precision, 100%
                indolora.
              </p>
              <div className={styles.secondaryVisualDark}>
                <Image
                  src="/images/tratamientos/podologia2.jpg"
                  alt="Procedimiento podologico con equipamiento clinico"
                  fill
                  className={styles.image}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className={styles.environmentBox}>
            <p className="eyebrow">Entorno clinico</p>
            <h2>Box minimalista y estandar de higiene hospitalaria</h2>
            <div className={styles.environmentVisualGrid}>
              <div className={styles.environmentLarge}>
                <Image
                  src="/images/instalaciones/clinica5.jpg"
                  alt="Sala de espera limpia y acogedora"
                  fill
                  className={styles.image}
                />
              </div>
              <div className={styles.environmentSmall}>
                <Image
                  src="/images/tratamientos/tratamiento2.jpg"
                  alt="Box clinico iluminado con sillon blanco"
                  fill
                  className={styles.image}
                />
              </div>
              <div className={styles.environmentSmall}>
                <Image
                  src="/images/instalaciones/clinica4.jpg"
                  alt="Sala de espera limpia y ordenada"
                  fill
                  className={styles.image}
                />
              </div>
            </div>
            <div className={styles.environmentGrid}>
              <div className={styles.environmentItem}>
                <h3>Sillon podologico profesional</h3>
                <p>
                  Modelo ergonomico blanco pensado para atencion segura,
                  estable y comoda durante procedimientos prolongados.
                </p>
              </div>
              <div className={styles.environmentItem}>
                <h3>Iluminacion LED y orden visual</h3>
                <p>
                  El espacio comunica limpieza, precision y cuidado, reforzando
                  una experiencia medico-premium desde el primer contacto.
                </p>
              </div>
              <div className={styles.environmentItem}>
                <h3>Protocolos visibles de higiene</h3>
                <p>
                  La promesa visual debe sentirse clinica, no cosmetica:
                  podologia como salud seria y tecnologia aplicada.
                </p>
              </div>
            </div>
          </div>

          <div className={styles.cta}>
            <h2>Agenda una evaluacion gratuita y define el tratamiento adecuado.</h2>
            <Link href="/contacto#evaluacion" className="btn btn-primary">
              Evaluacion Gratuita
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
