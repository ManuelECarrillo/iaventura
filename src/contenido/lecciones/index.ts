import type { Leccion } from "@/lib/tipos";
import { MUNDO1 } from "./mundo1";
import { MUNDO2 } from "./mundo2";

export const LECCIONES: Leccion[] = [...MUNDO1, ...MUNDO2];

export function leccion(id: string) {
  return LECCIONES.find((l) => l.id === id) || null;
}
