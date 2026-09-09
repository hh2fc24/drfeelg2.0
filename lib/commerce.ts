export type CheckoutItem = {
  id: string;
  serviceTitle: string;
  optionLabel: string;
  unitPrice: number;
  imageUrl: string;
};

export const checkoutCatalog = {
  "evaluacion-bodypro": {
    id: "evaluacion-bodypro",
    serviceTitle: "Evaluación Nutricional con BodyPro",
    optionLabel: "Evaluación y plan personalizado",
    unitPrice: 35000,
    imageUrl: "/images/instalaciones/instalacion_0075.jpg",
  },
  "botox-2-zonas": {
    id: "botox-2-zonas",
    serviceTitle: "Botox (Dysport)",
    optionLabel: "Tercio superior · 2 zonas",
    unitPrice: 150000,
    imageUrl: "/images/sourced/dysport-500-package-official.png",
  },
  "botox-3-zonas": {
    id: "botox-3-zonas",
    serviceTitle: "Botox (Dysport)",
    optionLabel: "Tercio superior · 3 zonas",
    unitPrice: 180000,
    imageUrl: "/images/sourced/dysport-500-package-official.png",
  },
  "acido-hialuronico-labios": {
    id: "acido-hialuronico-labios",
    serviceTitle: "Ácido Hialurónico",
    optionLabel: "Perfilado o relleno de labios · 1 jeringa",
    unitPrice: 180000,
    imageUrl: "/images/sourced/teosyal-rha-line.jpg",
  },
  "acido-hialuronico-rinomodelacion": {
    id: "acido-hialuronico-rinomodelacion",
    serviceTitle: "Ácido Hialurónico",
    optionLabel: "Rinomodelación · 1 jeringa",
    unitPrice: 180000,
    imageUrl: "/images/sourced/teosyal-rha-line.jpg",
  },
  "limpieza-hydromax": {
    id: "limpieza-hydromax",
    serviceTitle: "Limpieza Facial Hydromax",
    optionLabel: "1 sesión",
    unitPrice: 40000,
    imageUrl: "/images/sourced/hydromax_real.png",
  },
  "camara-hiperbarica-sesion": {
    id: "camara-hiperbarica-sesion",
    serviceTitle: "Cámara Hiperbárica O2Life ST801",
    optionLabel: "1 sesión · 60 minutos",
    unitPrice: 20000,
    imageUrl: "/images/sourced/camara_hiperbarica_real.png",
  },
  "camara-hiperbarica-pack-10": {
    id: "camara-hiperbarica-pack-10",
    serviceTitle: "Cámara Hiperbárica O2Life ST801",
    optionLabel: "Pack de 10 sesiones",
    unitPrice: 199000,
    imageUrl: "/images/sourced/camara_hiperbarica_real.png",
  },
  "podologia-basica": {
    id: "podologia-basica",
    serviceTitle: "Podología Clínica",
    optionLabel: "Podología clínica básica",
    unitPrice: 35000,
    imageUrl: "/images/tratamientos/podologia-clinica.png",
  },
  "podologia-una-encarnada": {
    id: "podologia-una-encarnada",
    serviceTitle: "Podología Clínica",
    optionLabel: "Uña encarnada o despiculización",
    unitPrice: 40000,
    imageUrl: "/images/tratamientos/podologia-clinica.png",
  },
  "podologia-onicomicosis": {
    id: "podologia-onicomicosis",
    serviceTitle: "Podología Clínica",
    optionLabel: "Onicomicosis",
    unitPrice: 40000,
    imageUrl: "/images/tratamientos/podologia-clinica.png",
  },
  "podologia-helomas": {
    id: "podologia-helomas",
    serviceTitle: "Podología Clínica",
    optionLabel: "Helomas o queratosis",
    unitPrice: 40000,
    imageUrl: "/images/tratamientos/podologia-clinica.png",
  },
  "podologia-spa": {
    id: "podologia-spa",
    serviceTitle: "Podología Clínica",
    optionLabel: "Podología clínica spa",
    unitPrice: 45000,
    imageUrl: "/images/tratamientos/podologia-clinica.png",
  },
  "laser-neo-yag-pack-6": {
    id: "laser-neo-yag-pack-6",
    serviceTitle: "Uñas con Hongos (Láser NEO YAG)",
    optionLabel: "Pack de 6 sesiones",
    unitPrice: 199000,
    imageUrl: "/images/sourced/neo-yag-q-switched.png",
  },
} as const satisfies Record<string, CheckoutItem>;

export type CheckoutItemId = keyof typeof checkoutCatalog;

export function getCheckoutOptions(ids: CheckoutItemId[]): CheckoutItem[] {
  return ids.map((id) => checkoutCatalog[id]);
}

export function formatCLP(value: number): string {
  return new Intl.NumberFormat("es-CL", {
    style: "currency",
    currency: "CLP",
    maximumFractionDigits: 0,
  }).format(value);
}
