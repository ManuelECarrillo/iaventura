"use client";

import Link from "next/link";
import { Cabecera, Nav, useToast } from "@/components/Ui";
import { MUNDOS, ORDEN } from "@/contenido/mundos";
import { diasSemana, leccionesHoy, MODO_PRUEBA, TOPE_DIARIO, useAvance } from "@/lib/avance";
import type { Avance } from "@/lib/tipos";

const LETRAS = ["L", "M", "M", "J", "V", "S", "D"];

// Una lección se abre cuando la anterior está hecha.
function estado(a: Avance, id: string): "hecho" | "activo" | "cerrado" {
  if (a.hechas[id]) return "hecho";
  const k = ORDEN.indexOf(id);
  return k === 0 || a.hechas[ORDEN[k - 1]] ? "activo" : "cerrado";
}

export default function Mapa() {
  const [a] = useAvance();
  const toast = useToast();
  if (!a) return <><div className="app"><Cabecera /></div><Nav /></>;

  const sem = diasSemana(a);
  const n = sem.filter(Boolean).length;
  const bateria = leccionesHoy(a);

  return (
    <>
      <main className="app">
        <Cabecera />
        <div className="semana">
          <div className="txt">Racha de la semana<small>{n >= 3 ? "¡Meta cumplida! Bit está orgulloso" : `Juega 3 días esta semana · llevas ${n}`}</small></div>
          <div className="dias">{sem.map((s, i) => <span key={i} className={"dia" + (s ? " si" : "")}>{LETRAS[i]}</span>)}</div>
        </div>
        <div className="bateria">
          <span className="pilas" aria-hidden="true">{Array.from({ length: TOPE_DIARIO }, (_, i) => <i key={i} className={i < bateria ? "" : "no"} />)}</span>
          <span>{MODO_PRUEBA ? "Batería de Bit: ¡ilimitada! (modo de pruebas)" : bateria > 0 ? `Batería de Bit: ${bateria} ${bateria === 1 ? "lección" : "lecciones"} más hoy` : "Bit está recargando. ¡Mañana seguimos!"}</span>
        </div>

        {MUNDOS.filter((m) => m.lecciones.length).map((m, mi) => (
          <section key={m.id} className={"mundo " + ["", "verde", "lila", "gris", "rosa", "menta", "noche"][m.id - 1]}>
            <div className="mundo-cab">
              <div><h2>{m.em} {m.nombre}</h2><p>Mundo {m.id} · {m.historia}</p></div>
              <span className={"etq" + (m.gratis ? "" : " fam")}>{m.gratis ? "Gratis" : "Familia"}</span>
            </div>
            <div className="camino">
              {m.lecciones.map((l) => {
                const est = estado(a, l.id);
                const sub = est === "hecho" ? "⭐".repeat(a.hechas[l.id]) + " · Volver a jugar" : est === "cerrado" ? "🔒 Termina la anterior" : `${l.minutos} min · ¡Juega!`;
                const bola = <span className="bola" aria-hidden="true">{est === "cerrado" ? "🔒" : l.em}</span>;
                return (
                  <div key={l.id} className={"nodo " + est}>
                    {est === "cerrado" ? (
                      <button type="button" className="bola" aria-label={l.nombre + " (cerrada)"} onClick={() => toast("Termina la lección anterior para abrir esta")}>🔒</button>
                    ) : (
                      <Link href={`/leccion/${l.id}`} aria-label={l.nombre} style={{ display: "contents" }}>{bola}</Link>
                    )}
                    <div className="nom">{l.nombre}<small>{sub}</small></div>
                  </div>
                );
              })}
            </div>
          </section>
        ))}

        <div className="otros">
          {MUNDOS.filter((m) => !m.lecciones.length).map((m) => (
            <button type="button" key={m.id} className="otro" onClick={() => toast("Este mundo todavía se está construyendo")}>
              <span className="em">{m.em}</span>
              <span className="t">Mundo {m.id} · {m.nombre}<small>{m.historia}</small></span>
              <span className="etq prox">Pronto</span>
            </button>
          ))}
        </div>
      </main>
      <Nav />
    </>
  );
}
