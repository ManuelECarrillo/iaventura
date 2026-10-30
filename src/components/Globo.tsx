"use client";

import Bit from "./Bit";
import { useAvance } from "@/lib/avance";
import { hablar } from "@/lib/sonido";
import type { Animo } from "@/lib/tipos";

// Bit hablando, con botón para escuchar el texto (para niños que todavía leen despacio).
export default function Globo({ texto, animo = "feliz", grande = false, brinca = true }: { texto: string; animo?: Animo; grande?: boolean; brinca?: boolean }) {
  const [a] = useAvance();
  return (
    <div className={"dialogo" + (grande ? " grande" : "")}>
      <Bit animo={animo} color={a?.color || "#2ec4d6"} acc={a?.acc || "antena"} clase={brinca ? "brinca" : ""} key={texto} />
      <div className="globo">
        <span className="txt">{texto}</span>
        <button type="button" className="hablar" aria-label="Escuchar" onClick={() => hablar(texto)}>🔊</button>
      </div>
    </div>
  );
}
