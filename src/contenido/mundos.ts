import type { Mundo } from "@/lib/tipos";

// El mapa. Los mundos 1 y 2 son gratis y están completos; los demás llegan con el plan Familia.
export const MUNDOS: Mundo[] = [
  {
    id: 1, em: "🏝️", nombre: "Isla Chispa", historia: "Bit despierta y no sabe nada", gratis: true,
    lecciones: [
      { id: "m1-l1", em: "🤖", nombre: "Conoce a Bit", minutos: 4 },
      { id: "m1-l2", em: "📋", nombre: "Recetas para máquinas", minutos: 4 },
      { id: "m1-l3", em: "🦾", nombre: "¿Robot o IA?", minutos: 4 },
      { id: "m1-l4", em: "🗣️", nombre: "Asistentes que escuchan", minutos: 4 },
      { id: "m1-l5", em: "👑", nombre: "Jefe de la isla", minutos: 5, jefe: true },
    ],
  },
  {
    id: 2, em: "🌳", nombre: "Bosque de los Datos", historia: "Bit aprende a reconocer animales", gratis: true,
    lecciones: [
      { id: "m2-l1", em: "🗂️", nombre: "De qué están hechas las IA", minutos: 4 },
      { id: "m2-l2", em: "🏷️", nombre: "Ponle nombre a todo", minutos: 4 },
      { id: "m2-l3", em: "🧩", nombre: "Cazadores de patrones", minutos: 4 },
      { id: "m2-l4", em: "⚖️", nombre: "Datos chuecos", minutos: 5 },
      { id: "m2-l5", em: "👑", nombre: "Jefe del bosque", minutos: 5, jefe: true },
    ],
  },
  { id: 3, em: "🏙️", nombre: "Ciudad Prompt", historia: "El arte de dar buenas órdenes", gratis: false, lecciones: [] },
  { id: 4, em: "🌫️", nombre: "Pantano de los Espejismos", historia: "¿Verdad o invento de la IA?", gratis: false, lecciones: [] },
  { id: 5, em: "🏰", nombre: "Fortaleza Guardiana", historia: "Cuidar secretos y datos", gratis: false, lecciones: [] },
  { id: 6, em: "🎨", nombre: "Estudio Creativo", historia: "Dibujos, cuentos y música con IA", gratis: false, lecciones: [] },
  { id: 7, em: "🗼", nombre: "Torre de los Superpoderes", historia: "Usar la IA para estudiar y crear", gratis: false, lecciones: [] },
];

/** Todas las lecciones jugables en orden. */
export const ORDEN = MUNDOS.flatMap((m) => m.lecciones.map((l) => l.id));

export function mundoDe(id: string) {
  return MUNDOS.find((m) => m.lecciones.some((l) => l.id === id))!;
}
