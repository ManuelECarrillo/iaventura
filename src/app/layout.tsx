import type { Metadata, Viewport } from "next";
import { ToastProvider } from "@/components/Ui";
import RegistrarSW from "@/components/RegistrarSW";
import "./globals.css";

export const metadata: Metadata = {
  title: { default: "IAventura · Aprende a usar la IA jugando", template: "%s · IAventura" },
  description: "Un juego para niños de 7 a 12 años: entrena a Bit, tu robot, y aprende a usar la inteligencia artificial con minijuegos cortos.",
  manifest: "/manifest.webmanifest",
  appleWebApp: { capable: true, title: "IAventura", statusBarStyle: "default" },
  icons: { apple: "/apple-touch-icon.png" },
};

export const viewport: Viewport = { width: "device-width", initialScale: 1, themeColor: "#7b61ff", viewportFit: "cover" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es-MX">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Baloo+2:wght@600;700;800&family=Nunito:wght@600;700;800&display=swap" />
      </head>
      <body>
        <ToastProvider>{children}</ToastProvider>
        <RegistrarSW />
      </body>
    </html>
  );
}
