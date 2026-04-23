"use client";

import { FormEvent, useMemo, useState } from "react";
import { clinicContact } from "@/lib/clinic";
import styles from "./page.module.css";

const serviceGuidance = {
    botox: {
        label: "Botox (Dysport)",
        includes: "Evaluación de zonas a tratar, indicación profesional, explicación de duración y cuidados posteriores.",
    },
    hialuronico: {
        label: "Ácido Hialurónico",
        includes: "Revisión de proporciones faciales, objetivo del tratamiento y zonas como labios, ojeras, rinomodelación, pómulos, código de barras o perfilado mandibular.",
    },
    mesoterapia: {
        label: "Mesoterapia / Microneedling",
        includes: "Orientación sobre PRP, Pink Glow, exosomas con dermapen, Sculptra, vitamina C, Dermastabilon o protocolos corporales según evaluación.",
    },
    hydromax: {
        label: "Limpieza Facial Hydromax",
        includes: "Revisión de tipo de piel, objetivo de limpieza, hidratación y posibles combinaciones con otros protocolos faciales.",
    },
    lipolaser: {
        label: "Lipoláser Corporal",
        includes: "Evaluación de zona, objetivo corporal, número estimado de sesiones y pertinencia del protocolo reductivo.",
    },
    sueroterapia: {
        label: "Sueroterapia",
        includes: "Revisión de antecedentes y orientación sobre vitamina C, complejo B, glutathion u otros protocolos disponibles.",
    },
    podologia: {
        label: "Podología Clínica",
        includes: "Revisión del estado de uñas, piel y apoyo plantar para definir el manejo más adecuado.",
    },
    hiperbarica: {
        label: "Cámara Hiperbárica",
        includes: "Orientación sobre recuperación de tejidos, número de sesiones y pertinencia según tu motivo de consulta.",
    },
    laser: {
        label: "Láser Fox / Onicomicosis",
        includes: "Revisión del caso y explicación del tratamiento láser para onicomicosis u otras indicaciones podológicas.",
    },
    taping: {
        label: "Taping Neuromuscular",
        includes: "Valoración de dolor, soporte y objetivo terapéutico para definir la indicación del vendaje.",
    },
    otros: {
        label: "Consultar con especialista",
        includes: "Orientación inicial para derivarte al servicio más adecuado según tu motivo de consulta.",
    },
} as const;

type ServiceKey = keyof typeof serviceGuidance;

export default function Contacto() {
    const [form, setForm] = useState({
        name: "",
        email: "",
        phone: "",
        service: "",
        message: "",
    });
    const [feedback, setFeedback] = useState("");

    const selectedService = useMemo(() => {
        if (!form.service) {
            return null;
        }
        return serviceGuidance[form.service as ServiceKey];
    }, [form.service]);

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (!form.name || !form.email || !form.phone || !form.service) {
            setFeedback("Completa nombre, correo, WhatsApp y motivo de consulta para continuar.");
            return;
        }

        const serviceInfo = serviceGuidance[form.service as ServiceKey];
        const lines = [
            "Hola, quiero solicitar una evaluacion en Dr. Feelgood.",
            `Nombre: ${form.name}`,
            `Correo: ${form.email}`,
            `WhatsApp: ${form.phone}`,
            `Motivo de consulta: ${serviceInfo.label}`,
            `La evaluacion debe considerar: ${serviceInfo.includes}`,
        ];

        if (form.message.trim()) {
            lines.push(`Comentario adicional: ${form.message.trim()}`);
        }

        const url = `https://wa.me/${clinicContact.whatsappLeadNumber}?text=${encodeURIComponent(lines.join("\n"))}`;
        window.open(url, "_blank", "noopener,noreferrer");
        setFeedback("Se abrió WhatsApp con tu solicitud prellenada para que el equipo pueda responderte más rápido.");
    };

    return (
        <div className={styles.contactPage}>
            <div className={styles.splitLayout}>

                {/* Left Side: Information */}
                <div className={styles.infoSide}>
                    <div className={styles.infoContent}>
                        <div className="animate-fade-up">
                            <span className={styles.eyebrow}>Consultas Clínicas</span>
                        </div>
                        <h1 className={`${styles.title} animate-fade-up delay-1`}>
                            Agenda tu <br />
                            <span className={styles.highlight}>evaluación.</span>
                        </h1>
                        <p className={`${styles.subtitle} animate-fade-up delay-2`}>
                            Cuéntanos tu motivo de consulta y nuestro equipo te orientará con información clara y atención profesional.
                        </p>

                        <div className={`${styles.dataGrid} animate-fade-up delay-3`}>
                            <div className={styles.infoBlock}>
                                <h3 className={styles.infoTitle}>La Clínica</h3>
                                <p>{clinicContact.addressLine1}</p>
                                <p className={styles.mutedText}>{clinicContact.addressLine2}</p>
                                <p className={styles.mutedText}>{clinicContact.city}</p>
                            </div>

                            <div className={styles.infoBlock}>
                                <h3 className={styles.infoTitle}>Contacto Directo</h3>
                                <a href={clinicContact.phoneHref} className={styles.phoneLink}>{clinicContact.phoneDisplay}</a>
                                <p className={styles.mutedText}>{clinicContact.email}</p>
                            </div>

                            <div className={styles.infoBlock}>
                                <h3 className={styles.infoTitle}>Atención al Paciente</h3>
                                <p>{clinicContact.hoursLabel}</p>
                                <p className={styles.mutedText}>{clinicContact.hoursValue}</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Side: Form */}
                <div className={styles.formSide}>
                    <div className={`${styles.formContainer} animate-fade-up delay-2`}>
                        <h2 className={styles.formLegend}>Solicitud de evaluación</h2>
                        <form className={styles.form} onSubmit={handleSubmit}>
                            <div className={styles.formGroup}>
                                <input
                                    type="text"
                                    id="name"
                                    className={styles.input}
                                    placeholder=" "
                                    required
                                    value={form.name}
                                    onChange={(event) => setForm((current) => ({ ...current, name: event.target.value }))}
                                />
                                <label htmlFor="name" className={styles.label}>Nombre completo *</label>
                            </div>

                            <div className={styles.formGroup}>
                                <input
                                    type="email"
                                    id="email"
                                    className={styles.input}
                                    placeholder=" "
                                    required
                                    value={form.email}
                                    onChange={(event) => setForm((current) => ({ ...current, email: event.target.value }))}
                                />
                                <label htmlFor="email" className={styles.label}>Correo electrónico *</label>
                            </div>

                            <div className={styles.formGroup}>
                                <input
                                    type="tel"
                                    id="phone"
                                    className={styles.input}
                                    placeholder=" "
                                    required
                                    value={form.phone}
                                    onChange={(event) => setForm((current) => ({ ...current, phone: event.target.value }))}
                                />
                                <label htmlFor="phone" className={styles.label}>WhatsApp *</label>
                            </div>

                            <div className={styles.formGroup}>
                                <select
                                    id="service"
                                    className={styles.select}
                                    required
                                    value={form.service}
                                    onChange={(event) => setForm((current) => ({ ...current, service: event.target.value }))}
                                >
                                    <option value="" disabled hidden>Motivo de consulta *</option>
                                    <option value="botox">Botox (Dysport)</option>
                                    <option value="hialuronico">Ácido Hialurónico</option>
                                    <option value="mesoterapia">Mesoterapia / Microneedling</option>
                                    <option value="hydromax">Limpieza Facial Hydromax</option>
                                    <option value="lipolaser">Lipoláser Corporal</option>
                                    <option value="sueroterapia">Sueroterapia</option>
                                    <option value="podologia">Podología Clínica</option>
                                    <option value="hiperbarica">Cámara Hiperbárica</option>
                                    <option value="laser">Láser Fox / Onicomicosis</option>
                                    <option value="taping">Taping Neuromuscular</option>
                                    <option value="otros">Consultar con especialista</option>
                                </select>
                            </div>

                            {selectedService ? (
                                <div className={styles.serviceNote}>
                                    <strong>Tu evaluación incluye:</strong>
                                    <p>{selectedService.includes}</p>
                                </div>
                            ) : null}

                            <div className={styles.formGroup}>
                                <textarea
                                    id="message"
                                    className={styles.textarea}
                                    placeholder=" "
                                    rows={3}
                                    value={form.message}
                                    onChange={(event) => setForm((current) => ({ ...current, message: event.target.value }))}
                                ></textarea>
                                <label htmlFor="message" className={styles.label}>Acerca de tu consulta</label>
                            </div>

                            <p className={styles.formHint}>
                                Tu WhatsApp es obligatorio para que podamos coordinar la evaluación y responderte con rapidez.
                            </p>

                            {feedback ? <p className={styles.feedback}>{feedback}</p> : null}

                            <button type="submit" className={`btn btn-primary ${styles.submitBtn}`}>
                                Enviar por WhatsApp
                            </button>
                        </form>
                    </div>
                </div>

            </div>
        </div>
    );
}
