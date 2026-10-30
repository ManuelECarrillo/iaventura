import type { Leccion } from "@/lib/tipos";
import { MUNDO1 } from "./mundo1";
import { MUNDO2 } from "./mundo2";
import { MUNDO3 } from "./mundo3";

export const LECCIONES: Leccion[] = [...MUNDO1, ...MUNDO2, ...MUNDO3];

export function leccion(id: string) {
  return LECCIONES.find((l) => l.id === id) || null;
}
