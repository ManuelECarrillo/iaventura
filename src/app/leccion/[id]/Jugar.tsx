"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Bit from "@/components/Bit";
import Confeti from "@/components/Confeti";
import { Hoja } from "@/components/Ui";
import { CartaPaso, Chuecos, Duelo, Entrena, Historia, IaONo, Orden, Pasos, Secretos, Verdad } from "@/components/minijuegos/Minijuegos";
import { carta } from "@/contenido/cartas";
import { ACCESORIOS, leccionesHoy, terminarLeccion, useAvance } from "@/lib/avance";
import { sonido } from "@/lib/sonido";
import type { Leccion, Paso } from "@/lib/tipos";

// Corre una lección paso a paso y al final reparte estrellas, cartas y la misión.
export default function Jugar({ leccion, siguiente }: { leccion: Leccion; siguiente: string | null }) {
  const [a] = useAvance();
  const router = useRouter();
  const [i, setI] = useState(0);
  const [errores, setErrores] = useState(0);
  const [nuevas, setNuevas] = useState<string[]>([]);
  const [salir, setSalir] = useState(false);
  const [final, setFinal] = useState<null | { est: number; ganadas: number; desbloqueados: typeof ACCESORIOS; cartas: string[]; quedan: number }>(null);

  if (!a) return null;

  // Tope diario: si ya no hay batería y no es una repetición, Bit descansa.
  if (!final && i === 0 && leccionesHoy(a) === 0) {
    return (
      <div className="leccion"><div className="lec-in"><div className="cansado">
        <Bit animo="ups" color={a.color} acc={a.acc} />
        <h2>Bit se quedó sin batería 🔋</h2>
        <p style={{ fontWeight: 700, color: "var(--tinta2)", margin: 0 }}>Hoy ya jugaste 3 lecciones. ¡Eso es mucho aprender! Bit se recarga en la noche y mañana te espera.</p>
        <Link href="/" className="boton uva">Volver al mapa</Link>
      </div></div></div>
    );
  }

  function pasoListo(err: number) {
    const p = leccion.pasos[i];
    const e = errores + err;
    const n = p.tipo === "carta" && !nuevas.includes(p.id) ? [...nuevas, p.id] : nuevas;
    setErrores(e);
    setNuevas(n);
    if (i + 1 < leccion.pasos.length) {
      setI(i + 1);
      document.querySelector(".leccion")?.scrollTo(0, 0);
      return;
    }
    const est = e <= 1 ? 3 : e <= 4 ? 2 : 1;
    const r = terminarLeccion(a!, leccion.id, est, n);
    setFinal({ est, ganadas: r.ganadas, desbloqueados: r.desbloqueados, cartas: n.filter((c) => !a!.cartas.includes(c)), quedan: leccionesHoy(r.nuevo) });
    sonido("carta");
  }

  return (
    <div className="leccion">
      <div className="lec-in">
        <div className="lec-top">
          <button type="button" className="cerrar" aria-label="Salir de la lección" onClick={() => (final ? router.push("/") : setSalir(true))}>✕</button>
          <div className="barra" aria-label={`Paso ${i + 1} de ${leccion.pasos.length}`}>
            {leccion.pasos.map((_, k) => <i key={k} className={final || k < i ? "ya" : k === i ? "ahora" : ""} />)}
          </div>
        </div>
        <div className="escena" key={final ? "fin" : i}>
          {final ? <Final leccion={leccion} final={final} siguiente={siguiente} color={a.color} acc={a.acc} /> : <PasoActual paso={leccion.pasos[i]} fin={pasoListo} />}
        </div>
      </div>
      {salir && (
        <Hoja titulo="¿Salir de la lección?" texto="Bit se queda esperándote. Lo que llevas de esta lección no se guarda."
          no="Seguir jugando" si="Sí, salir" alSi={() => router.push("/")} alCerrar={() => setSalir(false)} />
      )}
    </div>
  );
}

function PasoActual({ paso, fin }: { paso: Paso; fin: (e: number) => void }) {
  switch (paso.tipo) {
    case "historia": return <Historia paso={paso} fin={fin} />;
    case "iaono": return <IaONo paso={paso} fin={fin} />;
    case "carta": return <CartaPaso paso={paso} fin={fin} />;
    case "entrena": return <Entrena paso={paso} fin={fin} />;
    case "orden": return <Orden paso={paso} fin={fin} />;
    case "verdad": return <Verdad paso={paso} fin={fin} />;
    case "secretos": return <Secretos paso={paso} fin={fin} />;
    case "pasos": return <Pasos paso={paso} fin={fin} />;
    case "duelo": return <Duelo paso={paso} fin={fin} />;
    case "chuecos": return <Chuecos paso={paso} fin={fin} />;
  }
}

function Final({ leccion, final, siguiente, color, acc }: {
  leccion: Leccion; siguiente: string | null; color: string; acc: string;
  final: { est: number; ganadas: number; desbloqueados: typeof ACCESORIOS; cartas: string[]; quedan: number };
}) {
  return (
    <div className="final" style={{ display: "grid", gap: 14 }}>
      <Confeti />
      <Bit animo="wow" color={color} acc={acc} clase="brinca" />
      <h2>¡Lección completa!</h2>
      <div className="estrellas" aria-label={`${final.est} de 3 estrellas`}>{[1, 2, 3].map((n) => <span key={n} className={n <= final.est ? "" : "no"}>⭐</span>)}</div>
      {final.ganadas > 0 ? (
        <p style={{ margin: 0, fontWeight: 800 }}>
          Ganaste {final.ganadas} ⭐ para el taller de Bit
          {final.desbloqueados.length > 0 && <> y desbloqueaste: {final.desbloqueados.map((x) => x.em + " " + x.nombre).join(", ")}</>}
        </p>
      ) : (
        <p style={{ margin: 0, fontWeight: 700, color: "var(--tinta2)" }}>Ya tenías estas estrellas. ¡Buen repaso!</p>
      )}
      {final.cartas.length > 0 && (
        <div className="gana">
          {final.cartas.map((id) => { const c = carta(id); return <div className="mini" key={id}><span className="em">{c.em}</span><b>{c.t}</b></div>; })}
        </div>
      )}
      {leccion.mision && (
        <div className="mision"><small>Misión de la vida real</small>{leccion.mision}</div>
      )}
      <p style={{ margin: 0, fontWeight: 700, color: "var(--tinta2)" }}>
        🔋 {final.quedan > 0 ? `A Bit le ${final.quedan === 1 ? "queda 1 lección" : `quedan ${final.quedan} lecciones`} de batería por hoy.` : "Bit se quedó sin batería. ¡Mañana seguimos!"}
      </p>
      <div className="abajo">
        {siguiente && final.quedan > 0 && <Link href={`/leccion/${siguiente}`} className="boton">Siguiente lección</Link>}
        <Link href="/" className={"boton" + (siguiente && final.quedan > 0 ? " sec" : " uva")}>Volver al mapa</Link>
      </div>
    </div>
  );
}
