"use client";

import Bit from "@/components/Bit";
import { Cabecera, Nav, useToast } from "@/components/Ui";
import { ACCESORIOS, COLORES, useAvance } from "@/lib/avance";
import { sonido } from "@/lib/sonido";

export default function TallerBit() {
  const [a, setA] = useAvance();
  const toast = useToast();

  return (
    <>
      <main className="app">
        <Cabecera />
        <div className="titulo-sec"><h2>El taller de Bit</h2><p>Gana estrellas en las lecciones para desbloquear cosas.</p></div>
        {a && (
          <div className="taller">
            <Bit color={a.color} acc={a.acc} />
            <div className="grupo">
              <div className="q">Color</div>
              <div className="colores" style={{ gridTemplateColumns: `repeat(${COLORES.length}, 1fr)` }}>
                {COLORES.map((c) => (
                  <button type="button" key={c} className={"color" + (a.color === c ? " sel" : "")} style={{ background: c }} aria-label="Color" aria-pressed={a.color === c}
                    onClick={() => { setA({ ...a, color: c }); sonido("bien"); }} />
                ))}
              </div>
            </div>
            <div className="grupo">
              <div className="q">Accesorio</div>
              <div className="accs">
                {ACCESORIOS.map((x) => {
                  const bloq = a.estrellas < x.min;
                  return (
                    <button type="button" key={x.id} className={"acc" + (a.acc === x.id ? " sel" : "") + (bloq ? " bloq" : "")} aria-pressed={a.acc === x.id}
                      onClick={() => { if (bloq) return toast(`Te faltan ${x.min - a.estrellas} ⭐ para esto`); setA({ ...a, acc: x.id }); sonido("bien"); }}>
                      <span>{bloq ? "🔒" : x.em}</span>
                      <div>{x.nombre}<small>{x.min ? (bloq ? `Necesitas ${x.min} ⭐` : "Desbloqueado") : "Gratis"}</small></div>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        )}
      </main>
      <Nav />
    </>
  );
}
