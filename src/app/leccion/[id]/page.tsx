import { notFound } from "next/navigation";
import { LECCIONES, leccion } from "@/contenido/lecciones";
import { ORDEN } from "@/contenido/mundos";
import Jugar from "./Jugar";

export function generateStaticParams() {
  return LECCIONES.map((l) => ({ id: l.id }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const l = leccion((await params).id);
  return { title: l ? l.nombre : "Lección" };
}

export default async function Pagina({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const l = leccion(id);
  if (!l) notFound();
  const k = ORDEN.indexOf(id);
  const sig = ORDEN[k + 1] && leccion(ORDEN[k + 1]) ? ORDEN[k + 1] : null;
  return <Jugar leccion={l} siguiente={sig} />;
}
