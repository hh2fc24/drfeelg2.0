"use client";

import { useState } from "react";
import ServiceCard from "@/components/ServiceCard";
import ServiceModal from "@/components/ServiceModal";
import ClinicalResults from "@/components/ClinicalResults";
import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Servicios() {
    type ServiceType = {
        title: string;
        description: string | string[];
        category: string;
        filterCategory: string;
        benefitsTitle?: string;
        benefits?: string[];
        prices?: string[];
        imageUrl?: string;
        modalImageUrl?: string;
        imageFit?: "cover" | "contain";
        imagePosition?: string;
        imageBackground?: string;
        videoUrl?: string;
        galleryUrls?: string[];
        href?: string;
        basePrice?: string;
        discountBadge?: string;
        priceSuffix?: string;
    };
    const [selectedService, setSelectedService] = useState<ServiceType | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [activeFilter, setActiveFilter] = useState("Todos");

    const filters = ["Todos", "Evaluación Clínica", "Estética Facial", "Podología Clínica", "Corporal y Bienestar"];

    const handleOpenModal = (service: ServiceType) => {
        setSelectedService(service);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setTimeout(() => setSelectedService(null), 500);
    };

    const allTreatments: ServiceType[] = [
        {
            title: "Evaluación Nutricional con BodyPro y Plan Personalizado",
            description: "Análisis clínico avanzado de composición corporal diseñado para evaluar de forma precisa tu porcentaje de grasa, masa muscular y agua corporal. Junto a nuestros profesionales de salud, diseñaremos una pauta alimentaria y un plan nutricional personalizado que se adapte de verdad a tus objetivos, salud y estilo de vida.",
            category: "Primera Visita",
            filterCategory: "Evaluación Clínica",
            imageUrl: "/images/instalaciones/instalacion_0075.jpg",
            modalImageUrl: "/images/instalaciones/instalacion_0075.jpg",
            basePrice: "$35.000",
            discountBadge: "Abonable",
            benefitsTitle: "¿Qué incluye nuestra evaluación?",
            benefits: [
                "Medición de composición corporal avanzada con BodyPro.",
                "Análisis detallado de porcentaje de grasa, masa muscular y agua corporal.",
                "Entrevista clínica y revisión de hábitos y antecedentes de salud.",
                "Elaboración de pauta alimentaria y metas de forma personalizada.",
                "Orientación profesional sin compromiso para resolver todas tus dudas.",
                "Valor de la consulta abonable a tu plan de tratamiento."
            ]
        },
        {
            title: "Botox (Dysport)",
            description: [
                "El tratamiento con Toxina Botulínica Tipo A, conocido comúnmente como Botox, es uno de los procedimientos estéticos más utilizados en el mundo para suavizar arrugas de expresión y prevenir el envejecimiento facial.",
                "Con el paso del tiempo, los movimientos repetitivos del rostro pueden generar líneas y arrugas visibles. La toxina botulínica actúa relajando de forma controlada los músculos responsables de estas arrugas, permitiendo que la piel se vea más lisa, descansada y rejuvenecida.",
                "En Dr. Feelgood trabajamos con Dysport. La indicación se realiza de forma personalizada para tratar frente, entrecejo, patas de gallo u otras zonas avanzadas cuando corresponde."
            ],
            category: "Rostro Completo",
            filterCategory: "Estética Facial",
            imageUrl: "/images/sourced/dysport-500-package-official.png",
            modalImageUrl: "/images/sourced/dysport-500-package-official.png",
            imageFit: "contain",
            imageBackground: "#f9f7f5",
            basePrice: "$150.000",
            discountBadge: "DCTO. TERCIO",
            benefitsTitle: "¿Por qué elegir Dysport?",
            benefits: [
                "Resultados naturales: Suaviza las arrugas sin congelar la expresión facial.",
                "Inicio de acción rápido: Efectos visibles entre 2 y 3 días.",
                "Tratamiento rápido y mínimamente invasivo: permite retomar la rutina habitual con indicaciones simples.",
                "Resultados duraderos: Los efectos suelen mantenerse entre 4 y 6 meses."
            ],
            prices: [
                "Tercio superior (2 zonas): $150.000 con Dscto. (Ref. $200.000)",
                "Tercio superior (3 zonas): $180.000 con Dscto. (Ref. $250.000)",
                "Botox Avanzado: Bandas Platismales Cuello",
                "Botox Avanzado: Bruxismo y Afinamiento de Rostro",
                "Botox Avanzado: Hiperhidrosis Axilar",
                "Botox Avanzado: Hiperhidrosis Palmar"
            ]
        },
        {
            title: "Ácido Hialurónico",
            description: [
                "El ácido hialurónico es una sustancia presente de forma natural en el organismo y cumple un rol importante en hidratación, elasticidad y firmeza de la piel.",
                "En Dr. Feelgood se trabaja principalmente con Teosyal y, según evaluación, también con Restylane en algunos casos. Se utiliza para restaurar volumen, mejorar contornos y acompañar rasgos con resultados armónicos y naturales."
            ],
            category: "Labios, Ojeras, Pómulos y Perfilado",
            filterCategory: "Estética Facial",
            imageUrl: "/images/sourced/teosyal-rha-line.jpg",
            modalImageUrl: "/images/sourced/teosyal-rha-line.jpg",
            imageFit: "contain",
            imageBackground: "#f9f7f5",
            basePrice: "$180.000",
            discountBadge: "PROMO JERINGA",
            benefitsTitle: "Zonas de Aplicación y Valores",
            benefits: [
                "Perfilado y relleno de labios.",
                "Rinomodelación sin cirugía.",
                "Relleno de ojeras y surco nasogeniano.",
                "Rest Full Lift de pómulos según evaluación.",
                "Código de barras, arco mandibular, borde mandibular y mentón.",
                "Skinbooster e hidratación profunda."
            ],
            prices: [
                "Perfilado / Relleno de labios: $180.000 (Ref. $240.000) 1 Jeringa",
                "Rinomodelación: $180.000 (Ref. $250.000) 1 Jeringa",
                "Otras zonas: valor definido según evaluación profesional."
            ]
        },
        {
            title: "HIFU Facial",
            description: [
                "Si lo que buscas es combatir la flacidez y redefinir tu contorno facial sin pasar por el quirófano, el HIFU 25D es tu mejor aliado. Este sistema de ultrasonido focalizado de alta intensidad trabaja en las capas profundas de la dermis, específicamente en el SMAS, generando microcoagulaciones controladas que estimulan la producción de colágeno nuevo y provocan un efecto tensor inmediato.",
                "¿Para qué se utiliza? Está especialmente indicado para tratar la flacidez moderada a severa, las mejillas caídas, la papada incipiente, la pérdida de definición en el óvalo facial y las arrugas profundas del surco nasogeniano. También es excelente para levantar las cejas caídas y suavizar el contorno de los ojos.",
                "La tecnología 25D actúa en múltiples profundidades de forma simultánea para conseguir un levantamiento tridimensional que respeta la anatomía natural del rostro.",
                "Olvídate de las agujas y los largos posoperatorios: el rejuvenecimiento vertical y definido que estabas esperando ya está aquí, con tecnología avanzada en medicina estética no quirúrgica."
            ],
            category: "Lifting no invasivo",
            filterCategory: "Estética Facial",
            imageUrl: "/images/instalaciones/clinica4.jpg",
            modalImageUrl: "/images/instalaciones/clinica4.jpg",
            benefitsTitle: "Beneficios clave",
            benefits: [
                "Efecto lifting visible desde la primera sesión, con mejora progresiva durante 3 a 6 meses.",
                "Estimulación profunda y duradera del colágeno, con resultados que pueden perdurar entre 12 y 18 meses.",
                "Tratamiento no invasivo, sin agujas, sin anestesia y sin tiempos de inactividad.",
                "Rejuvenecimiento natural sin alterar la expresión facial.",
                "Una sola sesión al año suele ser suficiente para mantener los resultados."
            ]
        },
        {
            title: "Exosomas",
            description: [
                "¿Tu piel ha perdido ese brillo saludable? Si se siente apagada, deshidratada y las cremas convencionales ya no logran revertir el cansancio celular, los Exosomas NXO marcan un antes y un después en tu rutina de rejuvenecimiento.",
                "Se trata de una terapia celular de última generación que utiliza pequeñas burbujas cargadas con factores de crecimiento, péptidos, lípidos y ARN mensajero que actúan como mensajeros biológicos.",
                "Su misión es comunicarse directamente con tus células, activando su capacidad intrínseca de reparación, reduciendo la inflamación silenciosa y multiplicando la síntesis de colágeno, elastina y ácido hialurónico.",
                "¿Para qué se utiliza? Es un tratamiento para pieles fatigadas, con textura irregular, poros dilatados, manchas por estrés oxidativo y pérdida de densidad. También está indicado como coadyuvante tras láseres, radiofrecuencia o peelings para acelerar la recuperación y potenciar los resultados.",
                "¿Dónde se aplica? Se administra mediante microinyecciones en el rostro, incluyendo el contorno de ojos y labios, además del cuello, escote y dorso de las manos. También se utiliza en el cuero cabelludo para tratar la caída del cabello y estimular nuevos folículos.",
                "Dale a tu piel el impulso regenerativo que necesita y descubre un rejuvenecimiento desde dentro: no se trata solo de rellenar arrugas, sino de devolverle al rostro vitalidad, luz y salud."
            ],
            category: "Regeneración celular",
            filterCategory: "Estética Facial",
            imageUrl: "/images/instalaciones/productos.jpg",
            modalImageUrl: "/images/instalaciones/productos.jpg",
            benefitsTitle: "Beneficios clave",
            benefits: [
                "Regeneración tisular profunda que mejora la densidad, elasticidad y turgencia de la piel.",
                "Efecto glow inmediato: luminosidad y tersura visibles desde las primeras 48 horas.",
                "Reducción notable de arrugas finas, líneas de expresión y manchas desiguales.",
                "Potente acción antiinflamatoria y antioxidante que frena el envejecimiento prematuro.",
                "Resultados acumulativos: cada sesión potencia la anterior, con mejoras que se extienden hasta los 6 meses.",
                "Ideal para todo tipo de piel, incluso las más sensibles o reactivas."
            ]
        },
        {
            title: "Hilos de Tracción",
            description: [
                "Si notas que tu piel ha perdido firmeza y ves tu cara caída, los Hilos PDO de tracción son una alternativa para trabajar desde el interior, estimular la producción de colágeno y brindar un efecto de elevación inmediato.",
                "Con resultados naturales y progresivos, el objetivo es conseguir un rostro más definido, firme y rejuvenecido mediante una técnica rápida, segura y efectiva."
            ],
            category: "Efecto tensor",
            filterCategory: "Estética Facial",
            imageUrl: "/images/instalaciones/clinica3.jpg",
            modalImageUrl: "/images/instalaciones/clinica3.jpg",
            benefitsTitle: "Objetivos del tratamiento",
            benefits: [
                "Estimular la producción natural de colágeno.",
                "Elevar y reposicionar tejidos con un resultado progresivo.",
                "Redefinir el contorno facial sin cirugía."
            ]
        },
        {
            title: "Bioestimulador Sculptra",
            description: [
                "Sculptra es un tratamiento dermoestético con poder bioregenerador que contiene ácido poli-L-láctico (PLLA). Se aplica cuidadosamente mediante una pequeña cánula y es totalmente biocompatible y reabsorbible por el organismo. Sus micropartículas estimulan los fibroblastos, encargados de producir colágeno y elastina.",
                "A diferencia de rellenos tradicionales como el ácido hialurónico, su efecto es progresivo y no busca únicamente aportar volumen. Sculptra estimula la producción natural de colágeno en las capas profundas de la piel, mejorando la textura, aportando firmeza y disimulando pequeñas arrugas a largo plazo.",
                "El procedimiento es mínimamente invasivo, rápido y seguro. Se recomiendan 3 a 4 sesiones para lograr un resultado óptimo, según cada caso. Está indicado para personas jóvenes y adultas que buscan rejuvenecimiento facial, reposicionar tejidos y mejorar la calidad y el aspecto de la piel."
            ],
            category: "Ácido poli-L-láctico",
            filterCategory: "Estética Facial",
            imageUrl: "/images/instalaciones/productos.jpg",
            modalImageUrl: "/images/instalaciones/productos.jpg",
            benefitsTitle: "Beneficios destacados",
            benefits: [
                "Redefine el óvalo facial y las facciones.",
                "Restaura el volumen facial.",
                "Reduce las arrugas y líneas de expresión.",
                "Mejora la apariencia de cicatrices y ojeras.",
                "Aporta luminosidad a la piel.",
                "Mejora la elasticidad y firmeza."
            ]
        },
        {
            title: "Bioestimulador Ultracoolt",
            description: [
                "Ultracool es un bioestimulador de colágeno inyectable a base de microesferas de polidioxanona (PDO), utilizado para rejuvenecer la piel, combatir la flacidez y mejorar la firmeza desde las capas profundas.",
                "Los resultados evolucionan con el paso de las semanas a medida que el cuerpo genera su propio colágeno. El organismo reabsorbe el material de forma segura a lo largo de los meses.",
                "Se usa principalmente en el rostro, el contorno de ojos, el cuello, el escote y también en zonas corporales como el dorso de las manos."
            ],
            category: "Bioestimulación con PDO",
            filterCategory: "Estética Facial",
            imageUrl: "/images/instalaciones/clinica2.jpg",
            modalImageUrl: "/images/instalaciones/clinica2.jpg",
            benefitsTitle: "¿Para qué se utiliza?",
            benefits: [
                "Estimular colágeno: un solo vial equivale a los beneficios de más de 1.400 hilos inductores de colágeno tradicionales, aplicados de forma más cómoda.",
                "Efecto tensor y lifting: ayuda a redensificar el tejido y redefinir el contorno facial sin deformar las facciones.",
                "Atenuar arrugas: suaviza líneas finas, patas de gallo y arrugas en el párpado inferior u otras zonas del rostro.",
                "Mejorar la calidad de la piel: devuelve elasticidad, textura y luminosidad perdidas por el envejecimiento."
            ]
        },
        {
            title: "Mesoterapia y Microneedling Facial y Corporal",
            description: [
                "Tratamientos orientados a mejorar calidad de piel, luminosidad, textura y soporte cutáneo mediante protocolos personalizados.",
                "La indicación puede incluir PRP, Pink Glow, exosomas con dermapen, Sculptra, vitamina C, Dermastabilon u otros activos, siempre según evaluación profesional y objetivo del paciente."
            ],
            category: "Piel, Regeneración y Bioestimulación",
            filterCategory: "Estética Facial",
            imageUrl: "/images/instalaciones/productos.jpg",
            modalImageUrl: "/images/instalaciones/productos.jpg",
            imagePosition: "center",
            discountBadge: "Evaluación",
            benefitsTitle: "Protocolos disponibles",
            benefits: [
                "Plasma Rico en Plaquetas facial.",
                "Tratamiento para caída de cabello con PRP.",
                "Mesoterapia facial y corporal, incluida mesoterapia corporal para grasa localizada con Dermastabilon.",
                "Pink Glow y exosomas con dermapen.",
                "Sculptra y vitamina C según indicación.",
                "Plan ajustado a diagnóstico, zona y tolerancia de cada paciente."
            ],
            prices: [
                "Valor definido según protocolo y evaluación profesional."
            ]
        },
        {
            title: "Limpieza Facial Hydromax",
            description: "Higiene facial tecnológica que entrega una limpieza profunda, extracción controlada y una hidratación intensa. Incluye limpieza profunda integral y aplicación de nutrientes y activos seleccionados según los requerimientos específicos de cada tipo de piel para devolverle luminosidad y lozanía.",
            category: "Higiene Profunda e Hidratación",
            filterCategory: "Estética Facial",
            imageUrl: "/images/sourced/hydromax_real.png",
            modalImageUrl: "/images/sourced/hydromax_real.png",
            imageFit: "cover",
            basePrice: "$40.000",
            benefitsTitle: "Objetivos del tratamiento",
            benefits: [
                "Limpieza profunda y retiro de impurezas acumuladas.",
                "Aplicación personalizada de nutrientes según el requerimiento de tu piel.",
                "Apoyo y renovación para pieles deshidratadas o congestionadas.",
                "Sensación inmediata de frescura, suavidad y luminosidad profesional."
            ]
        },
        {
            title: "Lipoláser Corporal",
            description: [
                "Tratamiento corporal no invasivo con nuestro equipo i-lipo real, diseñado para trabajar grasa localizada, modelación de contornos y reducción de medidas de forma segura y sin cirugía.",
                "El protocolo combina tecnología láser avanzada con acompañamiento profesional para tratar zonas específicas con un alto nivel de eficacia."
            ],
            category: "Reductivo sin Cirugía",
            filterCategory: "Corporal y Bienestar",
            imageUrl: "/images/sourced/ilipo_real.png",
            modalImageUrl: "/images/sourced/ilipo_real.png",
            imageFit: "cover",
            benefitsTitle: "Enfoque Dr. Feelgood",
            benefits: [
                "Reduce medidas y modela zonas localizadas de forma no invasiva.",
                "Apoya el manejo de celulitis y flacidez según tu caso clínico.",
                "Protocolos personalizados con i-lipo real para asegurar resultados.",
                "Sin cirugía, sin cicatrices, permitiendo retomar tus actividades al instante.",
                "Evaluación diagnóstica previa por profesionales para confirmar idoneidad."
            ],
            prices: [
                "Valor definido según zona, número de sesiones y evaluación profesional."
            ]
        },
        {
            title: "Sueroterapia",
            description: "Protocolos endovenosos de apoyo al bienestar general, indicados de forma responsable según antecedentes, objetivo y evaluación profesional previa.",
            category: "Bienestar y Recuperación",
            filterCategory: "Corporal y Bienestar",
            imageUrl: "/images/instalaciones/clinica1.jpg",
            modalImageUrl: "/images/instalaciones/clinica1.jpg",
            imagePosition: "center",
            benefitsTitle: "Protocolos destacados",
            benefits: [
                "Megadosis de vitamina C.",
                "Complejo B.",
                "Glutathion.",
                "Indicación individual según antecedentes y objetivos."
            ],
            prices: [
                "Valor definido según protocolo y evaluación profesional."
            ]
        },
        {
            title: "Cámara Hiperbárica O2Life ST801",
            description: "Sesión de oxigenoterapia en nuestra cámara hiperbárica real. Combina el aumento controlado de la presión atmosférica con un flujo de alta concentración de oxígeno, logrando una profunda oxigenación celular que favorece la desinflamación y estimula los procesos de reparación naturales del cuerpo.",
            category: "Cuerpo Entero",
            filterCategory: "Corporal y Bienestar",
            imageUrl: "/images/sourced/camara_hiperbarica_real.png",
            modalImageUrl: "/images/sourced/camara_hiperbarica_real.png",
            imageFit: "contain",
            imageBackground: "#ffffff",
            basePrice: "$20.000",
            benefitsTitle: "Beneficios",
            benefits: [
                "Favorece la oxigenación celular profunda en todo el cuerpo.",
                "Disminución de inflamación generalizada y apoyo vascular.",
                "Aceleración en la recuperación muscular y de lesiones deportivas.",
                "Estimulación celular que mejora la cicatrización y reparación de tejidos."
            ],
            prices: [
                "1 sesión de 60 minutos: $20.000",
                "Pack 10 sesiones: $199.000"
            ]
        },
        {
            title: "Podología Clínica",
            description: "Ofrecemos un servicio integral de podología clínica enfocado en salud, prevención y bienestar de tus pies. Aquí la prioridad no es estética: es evaluación técnica, higiene clínica, manejo de molestias y prevención.",
            category: "Pies",
            filterCategory: "Podología Clínica",
            imageUrl: "/images/tratamientos/podologia-clinica.png",
            modalImageUrl: "/images/tratamientos/podologia-clinica.png",
            basePrice: "$35.000",
            benefitsTitle: "Nuestros Tratamientos",
            benefits: [
                "Podología clínica básica: evaluación, onicotomía y pulido de talones.",
                "Podología clínica uña encarnada o despiculización.",
                "Podología clínica y onicomicosis.",
                "Podología clínica y helomas o queratosis.",
                "Podología clínica spa: hidromasaje infrarrojo, exfoliación e hidratación."
            ],
            prices: [
                "Podología clínica básica: $35.000",
                "Uña encarnada o despiculización: $40.000",
                "Onicomicosis: $40.000",
                "Helomas o queratosis: $40.000",
                "Podología clínica spa: $45.000"
            ]
        },
        {
            title: "Uñas con Hongos (Láser NEO YAG)",
            description: [
                "Efecto térmico selectivo: el láser NEO YAG emite una longitud de onda de 1064 nm. Esta luz atraviesa la placa de la uña afectada y penetra hasta el lecho ungueal.",
                "Destrucción del hongo: la energía lumínica se convierte en calor concentrado de forma rápida, en nanosegundos. Este incremento térmico degrada y destruye las estructuras de los hongos sin dañar la piel ni los tejidos sanos que rodean la uña.",
                "Alternativa médica: al ser un método físico y localizado, representa una excelente opción para personas que no pueden o prefieren no tomar medicamentos antifúngicos orales debido a contraindicaciones médicas o riesgos de toxicidad hepática."
            ],
            category: "Pies y Manos",
            filterCategory: "Podología Clínica",
            imageUrl: "/images/sourced/neo-yag-q-switched.png",
            modalImageUrl: "/images/sourced/neo-yag-q-switched.png",
            imageFit: "contain",
            imageBackground: "#f9f7f5",
            basePrice: "$199.000",
            priceSuffix: "pack 6 sesiones",
            discountBadge: "PACK LÁSER",
            benefitsTitle: "Beneficios",
            benefits: [
                "Tratamiento físico y localizado.",
                "Acción térmica selectiva sobre la zona afectada.",
                "Alternativa para personas que no pueden o prefieren no tomar antifúngicos orales."
            ],
            prices: [
                "Pack de 6 sesiones: $199.000"
            ]
        }
    ];

    const filteredTreatments = activeFilter === "Todos" 
        ? allTreatments 
        : allTreatments.filter(t => t.filterCategory === activeFilter);

    return (
        <div className={styles.servicesPage}>
            <header className={styles.header}>
                <div className={`container ${styles.headerContainer}`}>
                    <div className="animate-fade-up">
                        <span className={styles.eyebrow}>Servicios</span>
                    </div>
                    <h1 className="animate-fade-up delay-1">
                        <span className={styles.titleLine}>Tratamientos y</span>
                        <span className={styles.titleLine}><span className={styles.highlight}>atención clínica</span></span>
                    </h1>
                    <p className={`${styles.subtitle} animate-fade-up delay-2`}>
                        Revisa nuestras áreas de atención y encuentra la opción que mejor se ajuste a tu motivo de consulta.
                    </p>
                </div>
            </header>

            <section className="section" id="catalogo">
                <div className="container">
                    {/* E-Commerce Style Filter Bar */}
                    <div className={`${styles.filterBar} animate-fade-up delay-3`}>
                        {filters.map((f, idx) => (
                            <button 
                                key={idx}
                                className={`${styles.filterBtn} ${activeFilter === f ? styles.filterBtnActive : ""}`}
                                onClick={() => setActiveFilter(f)}
                            >
                                {f}
                            </button>
                        ))}
                    </div>

                    <div className={`${styles.grid} ${filteredTreatments.length <= 2 ? styles.gridCompact : ""}`}>
                        {filteredTreatments.map((s, idx) => (
                            <div key={`${activeFilter}-${idx}`} className="animate-fade-up">
                                <ServiceCard {...s} onClick={() => handleOpenModal(s)} />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <div className={styles.divider}><div className="container"><hr /></div></div>

            <ClinicalResults />

            <div className={styles.divider}><div className="container"><hr /></div></div>

            {/* Strategic Phrases - Quote Banner */}
            <section className={`section ${styles.quoteSection}`}>
                <div className="container animate-fade-up">
                    <h2 style={{ textAlign: 'center', fontFamily: 'var(--font-serif)', fontSize: '2.5rem', marginBottom: '3rem', color: 'var(--color-primary-gold-dark)' }}>Cuidado profesional, resultados naturales</h2>
                    <div className={styles.quoteGrid}>
                        <div className={styles.quoteCard}><p>Resalta tu belleza natural, nosotros solo te ayudamos a verla.</p></div>
                        <div className={styles.quoteCard}><p>No es solo un tratamiento, es tu momento de desconexión.</p></div>
                        <div className={styles.quoteCard}><p>Tu piel tiene memoria, dale un tratamiento que valga la pena recordar.</p></div>
                        <div className={styles.quoteCard}><p>Cuida tu piel hoy, ella te lo agradecerá mañana.</p></div>
                        <div className={styles.quoteCard}><p>La evaluación profesional permite indicar el tratamiento adecuado en cada caso.</p></div>
                        <div className={styles.quoteCard}><p>Botox y ácido hialurónico tienen objetivos distintos y se indican según diagnóstico.</p></div>
                        <div className={styles.quoteCard}><p>En podología clínica priorizamos salud, prevención y comodidad del paciente.</p></div>
                        <div className={styles.quoteCard}><p>¿Lista para tu mejor versión? Agenda tu evaluación personalizada hoy.</p></div>
                    </div>
                </div>
            </section>

            <section className={styles.ctaSection} aria-labelledby="evaluation-title">
                <div className={`container ${styles.ctaContainer}`}>
                    <div className={styles.ctaPhoto}>
                        <Image src="/images/diverse_smiling_people.jpg" alt="Personas de distintas edades compartiendo una sonrisa" width={1376} height={768} sizes="(max-width: 768px) 90vw, 55vw" />
                    </div>
                    <div className={styles.ctaContent}>
                        <span className={styles.ctaEyebrow}>Comienza con una evaluación</span>
                        <h2 id="evaluation-title" className={styles.ctaTitle}>¿Qué tratamiento es para ti?</h2>
                        <p className={styles.ctaSubtitle}>Conversemos sobre lo que necesitas. Te orientamos con una evaluación personalizada.</p>
                        <Link href="/contacto" className={`btn ${styles.ctaButton}`}>Evaluación gratuita</Link>
                    </div>
                </div>
            </section>

            <ServiceModal
                isOpen={isModalOpen}
                onClose={handleCloseModal}
                service={selectedService}
            />
        </div>
    );
}
