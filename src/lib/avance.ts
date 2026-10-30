"use client";

import { useEffect, useState } from "react";
import type { Avance } from "./tipos";

// El avance vive en el celular (localStorage). Sin cuentas ni datos del niño.
const CLAVE = "iaventura-v1";
export const TOPE_DIARIO = 5;
// Mientras estamos en pruebas, la batería de Bit no se acaba. Poner en false para activar el tope diario.
export const MODO_PRUEBA = true;

export const ACCESORIOS: { id: string; em: string; nombre: string; min: number }[] = [
  { id: "antena", em: "📡", nombre: "Antena", min: 0 },
  { id: "gorra", em: "🧢", nombre: "Gorra", min: 3 },
  { id: "mono", em: "🎀", nombre: "Moño", min: 6 },
  { id: "corona", em: "👑", nombre: "Corona", min: 12 },
  { id: "casco", em: "🪖", nombre: "Casco espacial", min: 20 },
  { id: "flor", em: "🌸", nombre: "Flor", min: 27 },
];
export const COLORES = ["#2ec4d6", "#2fcf85", "#ff5c8a", "#ffc531", "#9d8bff", "#ff8c42"];

export function vacio(): Avance {
  return { estrellas: 0, hechas: {}, cartas: [], color: COLORES[0], acc: "antena", dias: [], hoy: { dia: "", lecciones: 0 }, apodo: "" };
}

export function claveDia(d = new Date()) {
  return `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`;
}

export function leer(): Avance {
  try {
    const g = JSON.parse(localStorage.getItem(CLAVE) || "null");
    if (g) return { ...vacio(), ...g };
  } catch {}
  return vacio();
}

export function guardar(a: Avance) {
  try { localStorage.setItem(CLAVE, JSON.stringify(a)); } catch {}
  // avisa a los demás componentes montados
  try { window.dispatchEvent(new Event("iaventura-avance")); } catch {}
}

/** Lecciones que todavía se pueden jugar hoy (tope diario). */
export function leccionesHoy(a: Avance) {
  if (MODO_PRUEBA) return TOPE_DIARIO;
  return a.hoy.dia === claveDia() ? Math.max(0, TOPE_DIARIO - a.hoy.lecciones) : TOPE_DIARIO;
}

/** Días jugados de esta semana (lunes a domingo). */
export function diasSemana(a: Avance): boolean[] {
  const hoy = new Date();
  const lunes = new Date(hoy);
  lunes.setDate(hoy.getDate() - ((hoy.getDay() + 6) % 7));
  return Array.from({ length: 7 }, (_, i) => {
    const d = new Date(lunes);
    d.setDate(lunes.getDate() + i);
    return a.dias.includes(claveDia(d));
  });
}

/** Registra una lección terminada. Devuelve el avance nuevo y lo que se ganó. */
export function terminarLeccion(a: Avance, id: string, estrellas: number, cartasNuevas: string[]) {
  const antes = a.hechas[id] || 0;
  const ganadas = Math.max(0, estrellas - antes);
  const dia = claveDia();
  const nuevo: Avance = {
    ...a,
    estrellas: a.estrellas + ganadas,
    hechas: { ...a.hechas, [id]: Math.max(antes, estrellas) },
    cartas: [...a.cartas, ...cartasNuevas.filter((c) => !a.cartas.includes(c))],
    dias: [...a.dias.filter((d) => d !== dia), dia].slice(-30),
    hoy: { dia, lecciones: (a.hoy.dia === dia ? a.hoy.lecciones : 0) + 1 },
  };
  const desbloqueados = ACCESORIOS.filter((x) => x.min > 0 && x.min > a.estrellas && x.min <= nuevo.estrellas);
  guardar(nuevo);
  return { nuevo, ganadas, desbloqueados };
}

/** Hook: avance reactivo. Antes de montar devuelve null para no pintar con datos vacíos. */
export function useAvance(): [Avance | null, (a: Avance) => void] {
  const [a, setA] = useState<Avance | null>(null);
  useEffect(() => {
    setA(leer());
    const f = () => setA(leer());
    window.addEventListener("iaventura-avance", f);
    window.addEventListener("storage", f);
    return () => { window.removeEventListener("iaventura-avance", f); window.removeEventListener("storage", f); };
  }, []);
  return [a, (n) => { guardar(n); setA(n); }];
}
