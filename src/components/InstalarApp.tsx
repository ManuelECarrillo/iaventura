"use client";

import { useEffect, useState } from "react";
import { Hoja } from "./Ui";

type EventoInstalar = Event & { prompt: () => Promise<void>; userChoice: Promise<{ outcome: string }> };

// Botón para poner IAventura en la pantalla de inicio, sin tienda de apps.
// Android/Chrome: abre el aviso del sistema. iPhone: muestra los pasos de Safari.
export default function InstalarApp() {
  const [evento, setEvento] = useState<EventoInstalar | null>(null);
  const [instalada, setInstalada] = useState(true); // se oculta hasta saber
  const [ayuda, setAyuda] = useState(false);
  const [ios, setIos] = useState(false);

  useEffect(() => {
    const standalone = window.matchMedia("(display-mode: standalone)").matches || (navigator as Navigator & { standalone?: boolean }).standalone === true;
    setInstalada(standalone);
    const ua = navigator.userAgent;
    setIos(/iPhone|iPad|iPod/.test(ua) || (ua.includes("Macintosh") && navigator.maxTouchPoints > 1));
    const guardar = (e: Event) => { e.preventDefault(); setEvento(e as EventoInstalar); };
    const listo = () => { setInstalada(true); setEvento(null); };
    window.addEventListener("beforeinstallprompt", guardar);
    window.addEventListener("appinstalled", listo);
    return () => { window.removeEventListener("beforeinstallprompt", guardar); window.removeEventListener("appinstalled", listo); };
  }, []);

  if (instalada) return null;

  async function instalar() {
    if (evento) {
      await evento.prompt();
      const r = await evento.userChoice;
      if (r.outcome === "accepted") setInstalada(true);
      setEvento(null);
    } else setAyuda(true);
  }

  return (
    <>
      <button type="button" className="boton uva" onClick={instalar}>📲 Instalar app</button>
      {ayuda && (
        <Hoja titulo="Instalar IAventura" no="Entendido" alCerrar={() => setAyuda(false)}
          texto={ios
            ? "En Safari toca el botón Compartir (el cuadrito con flecha), luego “Agregar a inicio” y después “Agregar”."
            : "En Chrome toca los 3 puntitos de arriba a la derecha y luego “Agregar a la pantalla principal” o “Instalar app”."} />
      )}
    </>
  );
}
