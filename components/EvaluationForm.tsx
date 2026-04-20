"use client";

import { useMemo, useState } from "react";
import styles from "./EvaluationForm.module.css";

const WHATSAPP_TARGET = "56900000000";

const serviceDetails = {
  botox: {
    label: "Botox (Dysport)",
    evaluation:
      "Revisión de zonas de aplicación, expectativa de resultado, duración estimada y cuidados posteriores.",
  },
  acido: {
    label: "Ácido Hialurónico",
    evaluation:
      "Análisis de armonización facial, zona a tratar y propuesta personalizada según labios, rinomodelación, ojeras o mentón.",
  },
  podologia: {
    label: "Podología Clínica",
    evaluation:
      "Evaluación del estado general del pie, revisión de molestias, corte técnico preventivo y orientación de manejo clínico.",
  },
  taping: {
    label: "Taping Neuromuscular",
    evaluation:
      "Revisión funcional de dolor o sobrecarga y definición de soporte terapéutico para recuperación y descarga.",
  },
  hiperbarica: {
    label: "Cámara Hiperbárica O2Life",
    evaluation:
      "Determinación del objetivo terapéutico, frecuencia sugerida y cómo la oxigenación profunda puede apoyar tu recuperación.",
  },
  laser: {
    label: "Láser Fox",
    evaluation:
      "Revisión del caso de onicomicosis o verrugas, número estimado de sesiones y explicación del procedimiento indoloro.",
  },
} as const;

type ServiceKey = keyof typeof serviceDetails;

const initialState = {
  name: "",
  whatsapp: "",
  email: "",
  service: "podologia" as ServiceKey,
  message: "",
};

type EvaluationFormProps = {
  title?: string;
  compact?: boolean;
};

export default function EvaluationForm({
  title = "Solicita tu evaluación gratuita",
  compact = false,
}: EvaluationFormProps) {
  const [form, setForm] = useState(initialState);

  const selectedService = useMemo(
    () => serviceDetails[form.service],
    [form.service],
  );

  const handleChange = (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = event.target;
    setForm((current) => ({
      ...current,
      [name]: value,
    }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const message = [
      "Hola, quiero agendar mi evaluacion gratuita en Laura Llamanos.",
      "",
      `Nombre: ${form.name}`,
      `WhatsApp de contacto: ${form.whatsapp}`,
      `Servicio de interes: ${selectedService.label}`,
      form.email ? `Email: ${form.email}` : "",
      form.message ? `Comentario adicional: ${form.message}` : "",
    ]
      .filter(Boolean)
      .join("\n");

    const url = `https://wa.me/${WHATSAPP_TARGET}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className={`${styles.shell} ${compact ? styles.compact : ""}`}>
      <div className={styles.header}>
        <p className={styles.kicker}>Formulario de evaluacion</p>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.description}>
          Cuentanos que necesitas y te llevamos directo a WhatsApp con un
          mensaje listo para coordinar.
        </p>
      </div>

      <div className={styles.includedBox}>
        <span className={styles.includedLabel}>Tu evaluacion gratuita incluye</span>
        <p>{selectedService.evaluation}</p>
      </div>

      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.grid}>
          <label className={styles.field}>
            <span>Nombre completo</span>
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              autoComplete="name"
            />
          </label>

          <label className={styles.field}>
            <span>WhatsApp</span>
            <input
              name="whatsapp"
              value={form.whatsapp}
              onChange={handleChange}
              required
              autoComplete="tel"
              inputMode="tel"
            />
          </label>
        </div>

        <div className={styles.grid}>
          <label className={styles.field}>
            <span>Servicio de interes</span>
            <select
              name="service"
              value={form.service}
              onChange={handleChange}
              required
            >
              {Object.entries(serviceDetails).map(([value, detail]) => (
                <option key={value} value={value}>
                  {detail.label}
                </option>
              ))}
            </select>
          </label>

          <label className={styles.field}>
            <span>Email</span>
            <input
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              autoComplete="email"
            />
          </label>
        </div>

        <label className={styles.field}>
          <span>Que te gustaria evaluar</span>
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            rows={4}
            placeholder="Ej: onicomicosis, arrugas de expresion, dolor plantar, recuperacion de tejidos..."
          />
        </label>

        <button type="submit" className="btn btn-primary">
          Ir a WhatsApp con mi evaluacion
        </button>
      </form>
    </div>
  );
}
