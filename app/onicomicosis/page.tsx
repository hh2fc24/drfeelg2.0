import type { Metadata } from "next";
import Link from "next/link";
export const metadata: Metadata = {
  title: "Tratamiento láser de onicomicosis y hongos en uñas en Las Condes",
  description: "Evaluación de hongos en uñas de pies y manos, podología clínica y tratamiento con láser NEO YAG en Dr. Feelgood, Las Condes. Pack de 6 sesiones: $199.000.",
  alternates: { canonical: "/onicomicosis" },
};
export default function OnicomicosisPage() {
  return <article className="container section">
    <h1>Tratamiento de hongos en uñas: onicomicosis</h1>
    <p>La onicomicosis es una infección por hongos que afecta las uñas de pies o manos. En Dr. Feelgood, Las Condes, ofrecemos evaluación de uñas y podología clínica, con tratamiento láser NEO YAG según indicación profesional.</p>
    <section className="section"><h2>Tratamiento láser para hongos en uñas</h2>
      <p>El láser NEO YAG de 1064 nm se aplica de forma localizada. La evaluación permite determinar si corresponde incorporarlo al plan de atención. No garantiza la eliminación del hongo y puede requerir otros tratamientos y seguimiento.</p>
      <p>Pack de 6 sesiones de láser: $199.000. Podología clínica y onicomicosis: $40.000. Revisa el catálogo para conocer y seleccionar cada servicio.</p>
      <h2>¿Buscas tratamiento para hongos en pies?</h2>
      <p>Los hongos de la piel del pie y los hongos de las uñas requieren una evaluación distinta. El tratamiento láser de uñas no reemplaza el diagnóstico de lesiones en la piel del pie.</p>
      <h2>¿Cuál es el mejor tratamiento para los hongos?</h2>
      <p>El tratamiento adecuado depende del diagnóstico, la extensión y tus antecedentes. No existe una única opción para todos los casos. Agenda una evaluación para recibir orientación sobre el cuidado de tus uñas y el seguimiento necesario.</p>
    </section>
    <Link href="/servicios#catalogo" className="btn">Ver tratamiento y valores</Link>{" "}
    <Link href="/contacto" className="btn">Consultar por mis uñas</Link>
  </article>;
}
