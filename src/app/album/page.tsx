"use client";

import { useState } from "react";
import { Cabecera, Hoja, Nav, useToast } from "@/components/Ui";
import { CARTAS } from "@/contenido/cartas";
import { MUNDOS } from "@/contenido/mundos";
import { useAvance } from "@/lib/avance";
import { hablar } from "@/lib/sonido";
import type { Carta } from "@/lib/tipos";

export default function Album() {
  const [a] = useAvance();
  const toast = useToast();
  const [ver, setVer] = useState<Carta | null>(null);
  const tiene = (id: string) => !!a?.cartas.includes(id);

  return (
    <>
      <main className="app">
        <Cabecera />
        <div className="titulo-sec">
          <h2>Álbum de cartas de poder</h2>
          <p>Llevas {a?.cartas.length ?? 0} de {CARTAS.length}. Cada palabra nueva de la IA es una carta.</p>
        </div>
        {MUNDOS.filter((m) => CARTAS.some((c) => c.mundo === m.id)).map((m) => (
          <section key={m.id} style={{ marginTop: 16 }}>
            <h3 style={{ fontSize: "1.15rem" }}>{m.em} {m.nombre}</h3>
            <div className="album" style={{ marginTop: 8 }}>
              {CARTAS.filter((c) => c.mundo === m.id).map((c) => (
                <button type="button" key={c.id} className={"mini" + (tiene(c.id) ? "" : " falta")}
                  onClick={() => (tiene(c.id) ? setVer(c) : toast(m.gratis ? "Juega las lecciones de este mundo para ganarla" : "Esta carta llega con el plan Familia"))}>
                  <span className="em">{c.em}</span><b>{tiene(c.id) ? c.t : "???"}</b>
                </button>
              ))}
            </div>
          </section>
        ))}
      </main>
      <Nav />
      {ver && (
        <Hoja titulo={ver.t} no="Cerrar" alCerrar={() => setVer(null)}>
          <div className="carta-zona">
            <div className="carta vuelta"><div className="cara atras">?</div><div className="cara frente"><span className="em">{ver.em}</span><h3>{ver.t}</h3><p>{ver.d}</p></div></div>
          </div>
          <button type="button" className="boton sec" onClick={() => hablar(ver.t + ". " + ver.d)}>🔊 Escuchar</button>
        </Hoja>
      )}
    </>
  );
}
