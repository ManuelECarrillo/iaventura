"use client";

import { useEffect, useState } from "react";
import InstalarApp from "@/components/InstalarApp";
import { Cabecera, Hoja, Nav, useToast } from "@/components/Ui";
import { CARTAS } from "@/contenido/cartas";
import { LECCIONES } from "@/contenido/lecciones";
import { diasSemana, useAvance, vacio } from "@/lib/avance";

// Puerta para adultos: una multiplicación que un niño de 8 años no resuelve al instante.
function cuenta() {
  const x = 6 + Math.floor(Math.random() * 4), y = 6 + Math.floor(Math.random() * 4);
  const r = x * y;
  const ops = [r, r + x, r - y, r + 2].sort(() => Math.random() - 0.5);
  return { x, y, r, ops };
}

export default function Papas() {
  const [a, setA] = useAvance();
  const toast = useToast();
  const [abierto, setAbierto] = useState(false);
  const [reiniciar, setReiniciar] = useState(false);
  // la cuenta se arma en el navegador (si se arma en el servidor no coincide y React se queja)
  const [c, setC] = useState<ReturnType<typeof cuenta> | null>(null);
  useEffect(() => setC(cuenta()), []);

  const aprendio = CARTAS.filter((x) => a?.cartas.includes(x.id));
  const misiones = LECCIONES.filter((l) => l.mision && a?.hechas[l.id]);

  return (
    <>
      <main className="app">
        <Cabecera />
        {!abierto ? (
          <>
            <div className="titulo-sec"><h2>Solo para adultos</h2><p>Para entrar, resuelve esta cuenta.</p></div>
            {c && <div className="panel" style={{ textAlign: "center" }}>
              <h3 style={{ fontSize: "2.2rem" }}>{c.x} × {c.y} = ?</h3>
              <div className="cuatro">
                {c.ops.map((n) => (
                  <button type="button" key={n} className="boton sec" onClick={() => (n === c.r ? setAbierto(true) : toast("Esa no es. Pídele ayuda a un adulto."))}>{n}</button>
                ))}
              </div>
            </div>}
          </>
        ) : a && (
          <>
            <div className="titulo-sec"><h2>Rincón de papás</h2><p>Lo que su hijo está aprendiendo.</p></div>
            <div className="panel">
              <div className="cifras">
                <div><b>{Object.keys(a.hechas).length}</b><small>lecciones</small></div>
                <div><b>{a.cartas.length}</b><small>palabras</small></div>
                <div><b>{diasSemana(a).filter(Boolean).length}</b><small>días esta semana</small></div>
              </div>
            </div>
            <div className="panel">
              <h3>Ya sabe qué significa</h3>
              {aprendio.length ? (
                <ul>{aprendio.map((x) => <li key={x.id}><b>{x.t}:</b> {x.d}</li>)}</ul>
              ) : (
                <p style={{ margin: 0, fontWeight: 600 }}>Todavía nada. Cuando termine la primera lección, aquí verán cada palabra que aprendió.</p>
              )}
            </div>
            <div className="panel">
              <h3>Misiones para hacer juntos</h3>
              {misiones.length ? (
                <ul>{misiones.map((l) => <li key={l.id}>{l.mision}</li>)}</ul>
              ) : (
                <p style={{ margin: 0, fontWeight: 600 }}>Al terminar cada mundo aparece una misión para hacer con su hijo en una IA de verdad (ChatGPT, Gemini o Claude), siempre con un adulto al lado.</p>
              )}
            </div>
            <div className="panel">
              <h3>Cómo cuidamos a su hijo</h3>
              <ul>
                <li>No pedimos nombre, correo ni foto del niño. El avance se guarda solo en este celular.</li>
                <li>En la app no chatea con una IA real: todo lo que dice Bit está escrito y revisado por nosotros.</li>
                <li>Máximo 5 lecciones al día, para que aprenda sin pasar horas en la pantalla (apagado mientras la app está en pruebas).</li>
                <li>Sin anuncios y sin compras escondidas.</li>
              </ul>
            </div>
            <div className="panel">
              <h3>Planes</h3>
              <div className="precio"><b>Gratis</b><span>Mundos 1 y 2 completos</span></div>
              <div className="precio"><b>Familia · 69 MXN/mes</b><span>o 499 al año · hasta 3 niños</span></div>
              <div className="precio"><b>Lanzamiento · 299 MXN</b><span>pago único, para siempre</span></div>
              <p style={{ margin: "8px 0 0", fontWeight: 600, color: "var(--tinta2)" }}>Mientras la app está en pruebas, todos los mundos listos se pueden jugar gratis. Si quieren apartar el precio de lanzamiento, escríbannos.</p>
            </div>
            <div className="cuatro">
              <InstalarApp />
              <button type="button" className="boton sec" onClick={() => setReiniciar(true)}>Reiniciar avance</button>
            </div>
          </>
        )}
      </main>
      <Nav />
      {reiniciar && (
        <Hoja titulo="¿Reiniciar el avance?" texto="Se borran las estrellas, las cartas y lo que tiene Bit en este celular." no="No, dejarlo así" si="Sí, reiniciar"
          alSi={() => { setA(vacio()); toast("Listo, avance reiniciado"); }} alCerrar={() => setReiniciar(false)} />
      )}
    </>
  );
}
