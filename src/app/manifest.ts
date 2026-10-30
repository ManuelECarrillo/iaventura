import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "IAventura",
    short_name: "IAventura",
    description: "Aprende a usar la inteligencia artificial jugando con Bit.",
    start_url: "/",
    display: "standalone",
    orientation: "portrait",
    background_color: "#e6f3ff",
    theme_color: "#7b61ff",
    lang: "es-MX",
    icons: [
      { src: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/icon-512.png", sizes: "512x512", type: "image/png" },
      { src: "/icon-maskable-512.png", sizes: "512x512", type: "image/png", purpose: "maskable" },
    ],
  };
}
