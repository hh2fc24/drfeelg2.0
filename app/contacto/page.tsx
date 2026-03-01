import styles from "./page.module.css";

export default function Contacto() {
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
                            Inicia tu proceso de <br />
                            <span className={styles.highlight}>Restauración.</span>
                        </h1>
                        <p className={`${styles.subtitle} animate-fade-up delay-2`}>
                            Agenda una evaluación exhaustiva con nuestro equipo médico-estético. Cuéntanos qué necesitas y diseñaremos un protocolo magistral en exclusiva para ti.
                        </p>

                        <div className={`${styles.dataGrid} animate-fade-up delay-3`}>
                            <div className={styles.infoBlock}>
                                <h3 className={styles.infoTitle}>La Clínica</h3>
                                <p>Apoquindo 6410. Oficina 504.</p>
                                <p className={styles.mutedText}>Estacionamiento por Linneo 6393.</p>
                                <p className={styles.mutedText}>Las Condes, Santiago.</p>
                            </div>

                            <div className={styles.infoBlock}>
                                <h3 className={styles.infoTitle}>Contacto Directo</h3>
                                <a href="tel:+56232238587" className={styles.phoneLink}>+56 2 3223 8587</a>
                                <p className={styles.mutedText}>apoquindo@drfeelgood.cl</p>
                            </div>

                            <div className={styles.infoBlock}>
                                <h3 className={styles.infoTitle}>Atención al Paciente</h3>
                                <p>Lunes a Viernes</p>
                                <p className={styles.mutedText}>08:00 hrs – 18:00 hrs</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Side: Form */}
                <div className={styles.formSide}>
                    <div className={`${styles.formContainer} animate-fade-up delay-2`}>
                        <h2 className={styles.formLegend}>Solicitud de Evaluación</h2>
                        <form className={styles.form} action="#">
                            <div className={styles.formGroup}>
                                <input type="text" id="name" className={styles.input} placeholder=" " required />
                                <label htmlFor="name" className={styles.label}>Nombre completo *</label>
                            </div>

                            <div className={styles.formGroup}>
                                <input type="email" id="email" className={styles.input} placeholder=" " required />
                                <label htmlFor="email" className={styles.label}>Correo electrónico *</label>
                            </div>

                            <div className={styles.formGroup}>
                                <input type="tel" id="phone" className={styles.input} placeholder=" " required />
                                <label htmlFor="phone" className={styles.label}>Teléfono móvil *</label>
                            </div>

                            <div className={styles.formGroup}>
                                <select id="service" className={styles.select} required defaultValue="">
                                    <option value="" disabled hidden>Motivo de consulta *</option>
                                    <option value="facial">Rejuvenecimiento Facial (Ej: Sculptra, Hydromax)</option>
                                    <option value="corporal">Modelación Corporal (Ej: Lipolaser)</option>
                                    <option value="iv">Terapias Endovenosas (Vitaminas)</option>
                                    <option value="laser">Láser Clínico (Onicomicosis)</option>
                                    <option value="otros">Consultar con especialista</option>
                                </select>
                            </div>

                            <div className={styles.formGroup}>
                                <textarea id="message" className={styles.textarea} placeholder=" " rows={3} required></textarea>
                                <label htmlFor="message" className={styles.label}>Acerca de tu consulta</label>
                            </div>

                            <button type="button" className={`btn btn-primary ${styles.submitBtn}`}>
                                Enviar Solicitud Confidencial
                            </button>
                        </form>
                    </div>
                </div>

            </div>
        </div>
    );
}
