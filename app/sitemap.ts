import type { MetadataRoute } from "next";
export default function sitemap(): MetadataRoute.Sitemap {
  return ["", "/servicios", "/estetica", "/onicomicosis", "/tecnologia", "/quienes-somos", "/contacto"].map(path => ({ url: `https://www.drfeelgoodchile.cl${path}` }));
}
