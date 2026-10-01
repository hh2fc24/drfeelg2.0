import type { Metadata } from "next";
import Link from "next/link";
export const metadata: Metadata = {
  title: "Estética facial natural y corporal en Las Condes",
  description: "Tratamientos faciales para arrugas y flacidez: Dysport, HIFU facial, limpieza facial profunda, Pink Glow, exosomas y bioestimuladores en Las Condes.",
  alternates: { canonical: "/estetica" },
};
export default function EsteticaPage() {
  return <article className="container section">
    <h1>Estética facial natural en Las Condes</h1>
    <p>En Dr. Feelgood orientamos nuestros tratamientos faciales y corporales a tus objetivos, con una evaluación profesional previa y un plan personalizado. Encuéntranos en Apoquindo 6410, oficina 504, Santiago.</p>
    <section className="section"><h2>Tratamientos faciales para arrugas y flacidez</h2>
      <p>Trabajamos con toxina botulínica Dysport, conocida en búsquedas como Botox, HIFU facial y bioestimuladores como Sculptra y Ultracol. Cada procedimiento tiene una indicación distinta según la piel, la zona y el motivo de consulta.</p>
      <h2>Limpieza facial profunda y calidad de piel</h2>
      <p>Conoce la limpieza facial Hydromax, Pink Glow, exosomas y Celosome Aqua. La elección del tratamiento depende de la evaluación y de tus objetivos de hidratación, luminosidad y cuidado facial.</p>
      <h2>Grasa localizada y lipo sin cirugía</h2>
      <p>Si buscas bajar grasa localizada o una alternativa de lipo sin cirugía, consulta por nuestro lipoláser corporal. La evaluación permite definir las zonas y sesiones; los resultados varían según cada persona.</p>
      <p>¿Buscas HIFU facial y corporal? Nuestro catálogo incluye HIFU facial. Consulta al equipo por la disponibilidad e indicación de tratamientos corporales.</p>
    </section>
    <Link href="/servicios#catalogo" className="btn">Ver tratamientos y valores</Link>{" "}
    <Link href="/contacto" className="btn">Agenda tu evaluación</Link>
  </article>;
}
