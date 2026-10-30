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
  {
    id: 3, em: "🏙️", nombre: "Ciudad Prompt", historia: "El arte de dar buenas órdenes", gratis: false,
    lecciones: [
      { id: "m3-l1", em: "📣", nombre: "Órdenes claras", minutos: 4 },
      { id: "m3-l2", em: "🧭", nombre: "Dale contexto", minutos: 4 },
      { id: "m3-l3", em: "🎯", nombre: "Enséñale con ejemplos", minutos: 4 },
      { id: "m3-l4", em: "🎭", nombre: "Dile quién es", minutos: 4 },
      { id: "m3-l5", em: "👑", nombre: "Jefe de la ciudad", minutos: 5, jefe: true },
    ],
  },
  {
    id: 4, em: "🌫️", nombre: "Pantano de los Espejismos", historia: "¿Verdad o invento de la IA?", gratis: false,
    lecciones: [
      { id: "m4-l1", em: "🌀", nombre: "¿Verdad o invento?", minutos: 4 },
      { id: "m4-l2", em: "📚", nombre: "Busca la fuente", minutos: 4 },
      { id: "m4-l3", em: "🪞", nombre: "Fotos que mienten", minutos: 4 },
      { id: "m4-l4", em: "📰", nombre: "Noticias falsas", minutos: 4 },
      { id: "m4-l5", em: "👑", nombre: "Jefe del pantano", minutos: 5, jefe: true },
    ],
  },
  {
    id: 5, em: "🏰", nombre: "Fortaleza Guardiana", historia: "Cuidar secretos y datos", gratis: false,
    lecciones: [
      { id: "m5-l1", em: "🔒", nombre: "Lo que no se cuenta", minutos: 4 },
      { id: "m5-l2", em: "🔑", nombre: "La llave secreta", minutos: 4 },
      { id: "m5-l3", em: "🙋", nombre: "Pregunta primero", minutos: 4 },
      { id: "m5-l4", em: "🤖", nombre: "Bit no es una persona", minutos: 4 },
      { id: "m5-l5", em: "👑", nombre: "Jefe de la fortaleza", minutos: 5, jefe: true },
    ],
  },
  {
    id: 6, em: "🎨", nombre: "Estudio Creativo", historia: "Dibujos, cuentos y música con IA", gratis: false,
    lecciones: [
      { id: "m6-l1", em: "🎨", nombre: "La IA que crea", minutos: 4 },
      { id: "m6-l2", em: "🖼️", nombre: "Pinta con palabras", minutos: 4 },
      { id: "m6-l3", em: "📖", nombre: "Cuentos con Bit", minutos: 4 },
      { id: "m6-l4", em: "✍️", nombre: "¿De quién es la obra?", minutos: 4 },
      { id: "m6-l5", em: "👑", nombre: "Jefe del estudio", minutos: 5, jefe: true },
    ],
  },
  { id: 7, em: "🗼", nombre: "Torre de los Superpoderes", historia: "Usar la IA para estudiar y crear", gratis: false, lecciones: [] },
];

/** Todas las lecciones jugables en orden. */
export const ORDEN = MUNDOS.flatMap((m) => m.lecciones.map((l) => l.id));

export function mundoDe(id: string) {
  return MUNDOS.find((m) => m.lecciones.some((l) => l.id === id))!;
}
