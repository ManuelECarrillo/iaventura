"use client";

import { useMemo, useState } from "react";
import Globo from "../Globo";
import { carta } from "@/contenido/cartas";
import { CARTAS } from "@/contenido/cartas";
import { hablar, sonido } from "@/lib/sonido";
import type {
  PasoCarta, PasoChuecos, PasoDuelo, PasoEntrena, PasoHistoria, PasoIaONo, PasoOrden, PasoPasos, PasoSecretos, PasoVerdad,
} from "@/lib/tipos";

// Cada minijuego recibe su paso y avisa al terminar cuántos errores hubo.
// Regla: nunca se castiga; un error explica por qué y deja seguir.
type Props<P> = { paso: P; fin: (errores: number) => void };

function Aviso({ ok, titulo, texto }: { ok: boolean; titulo: string; texto: string }) {
  return <div className={"aviso " + (ok ? "bien" : "mal")} role="status"><b>{titulo}</b>{texto}</div>;
}

function Seguir({ texto = "Seguir", onClick, uva = false }: { texto?: string; onClick: () => void; uva?: boolean }) {
  return <div className="abajo"><button type="button" className={"boton" + (uva ? " uva" : "")} onClick={onClick}>{texto}</button></div>;
}

function mezclar<T>(xs: T[], semilla: number): T[] {
  // revuelve distinto cada vez, pero nunca deja el orden correcto
  const a = xs.map((x, i) => ({ x, k: Math.sin(semilla * 999 + i * 77) }));
  a.sort((p, q) => p.k - q.k);
  const r = a.map((p) => p.x);
  if (r.every((x, i) => x === xs[i]) && r.length > 1) r.push(r.shift()!);
  return r;
}

// ---------- Historia ----------
export function Historia({ paso, fin }: Props<PasoHistoria>) {
  const [i, setI] = useState(0);
  const ultima = i === paso.lineas.length - 1;
  return (
    <>
      <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center" }}>
        <Globo texto={paso.lineas[i]} animo={paso.animo || (i === 0 ? "wow" : "feliz")} grande />
      </div>
      <Seguir texto={ultima ? paso.fin : "Siguiente"} uva={ultima} onClick={() => (ultima ? fin(0) : setI(i + 1))} />
    </>
  );
}

// ---------- Dos botones grandes (¿IA o no IA? y variantes) ----------
export function IaONo({ paso, fin }: Props<PasoIaONo>) {
  const [i, setI] = useState(0);
  const [resp, setResp] = useState<boolean | null>(null);
  const [err, setErr] = useState(0);
  const it = paso.items[i];
  const ok = resp !== null && resp === it.ia;
  function elegir(r: boolean) {
    setResp(r);
    const bien = r === it.ia;
    if (!bien) setErr(err + 1);
    sonido(bien ? "bien" : "mal");
  }
  function otra() {
    if (i < paso.items.length - 1) { setI(i + 1); setResp(null); } else fin(err);
  }
  return (
    <>
      <div className="tipo">Minijuego · {paso.pregunta ? "¿Sí o no?" : "¿IA o no IA?"} · {i + 1} de {paso.items.length}</div>
      <Globo texto={paso.pregunta || "¿Esto es una inteligencia artificial?"} animo="piensa" />
      <div className="objeto"><div className="em">{it.em}</div><div className="t">{it.t}</div></div>
      <div className="dos">
        <button type="button" className="op a" disabled={resp !== null} onClick={() => elegir(true)}><span>{paso.si === "Es IA" ? "🤖" : "👍"}</span>{paso.si}</button>
        <button type="button" className="op b" disabled={resp !== null} onClick={() => elegir(false)}><span>{paso.no === "No es IA" ? "🔧" : "👎"}</span>{paso.no}</button>
      </div>
      {resp !== null && (
        <>
          <Aviso ok={ok} titulo={(ok ? "¡Bien! " : "Casi… ") + (it.ia ? paso.si : paso.no) + "."} texto={it.por} />
          <Seguir texto={i < paso.items.length - 1 ? "Otra" : "Seguir"} onClick={otra} />
        </>
      )}
    </>
  );
}

// ---------- Carta de poder ----------
export function CartaPaso({ paso, fin }: Props<PasoCarta>) {
  const c = carta(paso.id);
  const [vuelta, setVuelta] = useState(false);
  return (
    <>
      <div className="tipo">¡Carta de poder nueva!</div>
      <h2>Toca la carta para darle la vuelta</h2>
      <div className="carta-zona">
        <button type="button" className={"carta" + (vuelta ? " vuelta" : "")} aria-label="Voltear carta"
          onClick={() => { if (!vuelta) { setVuelta(true); sonido("carta"); } }}>
          <div className="cara atras">?</div>
          <div className="cara frente">
            <span className="n">IAVENTURA · {String(CARTAS.indexOf(c) + 1).padStart(2, "0")}</span>
            <span className="em">{c.em}</span>
            <h3>{c.t}</h3>
            <p>{c.d}</p>
          </div>
        </button>
      </div>
      <div className="abajo">
        <button type="button" className="boton sec" onClick={() => hablar(c.t + ". " + c.d)}>🔊 Escuchar</button>
        <button type="button" className="boton uva" disabled={!vuelta} onClick={() => fin(0)}>¡La guardo en mi álbum!</button>
      </div>
    </>
  );
}

// ---------- Entrena a Bit ----------
export function Entrena({ paso, fin }: Props<PasoEntrena>) {
  const [sel, setSel] = useState<Set<number>>(new Set());
  const [fase, setFase] = useState<"elegir" | "piensa" | "resultado">("elegir");
  const [err, setErr] = useState(0);
  const malas = [...sel].filter((i) => !paso.fichas[i].si);
  const buenas = [...sel].filter((i) => paso.fichas[i].si);
  const ok = malas.length === 0 && buenas.length >= paso.minimo;

  function ensenar() {
    setFase("piensa");
    setTimeout(() => {
      if (!ok) setErr((e) => e + 1);
      sonido(ok ? "bien" : "mal");
      setFase("resultado");
    }, 1300);
  }

  if (fase === "elegir") {
    return (
      <>
        <div className="tipo">Minijuego · Entrena a Bit</div>
        <Globo texto={`Quiero aprender qué es ${paso.concepto === "ANIMAL" ? "un" : "una"} ${paso.concepto}. Toca todos los ejemplos correctos para enseñarme.`} animo="piensa" />
        <div className="rejilla">
          {paso.fichas.map((f, i) => (
            <button type="button" key={i} className={"ficha" + (sel.has(i) ? " sel" : "")} aria-pressed={sel.has(i)} aria-label={f.nombre}
              onClick={() => { const s = new Set(sel); if (s.has(i)) s.delete(i); else s.add(i); setSel(s); sonido("toque"); }}>{f.em}</button>
          ))}
        </div>
        <div className="abajo">
          <button type="button" className="boton" disabled={sel.size === 0} onClick={ensenar}>Enseñarle a Bit ({sel.size})</button>
        </div>
      </>
    );
  }
  const prueba = <div className="objeto"><div className="em">{paso.prueba.em}</div><div className="t">¿Qué es esto?</div></div>;
  if (fase === "piensa") {
    return (
      <>
        <div className="tipo">Minijuego · Entrena a Bit</div>
        <Globo texto="Mmm… aprendiendo… ahora mira esta foto nueva…" animo="piensa" brinca={false} />
        {prueba}
      </>
    );
  }
  const reintentar = () => { setSel(new Set()); setFase("elegir"); };
  if (malas.length) {
    const m = paso.fichas[malas[0]];
    return (
      <>
        <div className="tipo">Minijuego · Entrena a Bit</div>
        <Globo texto={`¡Ya sé! ${paso.concepto} es algo como… ¡${m.art} ${m.nombre}! ${m.em} ¿Y esto otro? No se parece a ${m.art} ${m.nombre}, así que no sé qué es.`} animo="ups" />
        <Aviso ok={false} titulo="¡Bit aprendió chueco!" texto={`Le enseñaste que ${m.art} ${m.nombre} es ${paso.concepto.toLowerCase()}. Una IA aprende de los ejemplos (los datos) que le das. Si los datos están mal, aprende mal.`} />
        <Seguir texto="Volver a enseñarle" onClick={reintentar} />
      </>
    );
  }
  if (!ok) {
    return (
      <>
        <div className="tipo">Minijuego · Entrena a Bit</div>
        <Globo texto={`Mmm… ¿${paso.prueba.nombre}? No estoy seguro. Me faltan ejemplos.`} animo="ups" />
        <Aviso ok={false} titulo="Le faltaron ejemplos" texto={`Solo le enseñaste ${buenas.length} de ${paso.fichas.filter((f) => f.si).length}. Entre más ejemplos buenos le das a una IA, mejor aprende.`} />
        <Seguir texto="Darle más ejemplos" onClick={reintentar} />
      </>
    );
  }
  return (
    <>
      <div className="tipo">Minijuego · Entrena a Bit</div>
      <Globo texto={`¡Es ${paso.concepto === "ANIMAL" ? "un" : "una"} ${paso.concepto}! ${paso.prueba.em} Nunca lo había visto, pero aprendí con tus ejemplos.`} animo="wow" />
      {prueba}
      <Aviso ok titulo="¡Lo entrenaste!" texto="Así aprenden las IA de verdad: les muestran muchos ejemplos y descubren el patrón solas." />
      <Seguir onClick={() => fin(err)} />
    </>
  );
}

// ---------- Arma la orden (prompt) ----------
export function Orden({ paso, fin }: Props<PasoOrden>) {
  const [el, setEl] = useState<(number | null)[]>(paso.filas.map(() => null));
  const [ver, setVer] = useState(false);
  const [err, setErr] = useState(0);
  const listo = el.every((x) => x !== null);
  const punt = el.reduce<number>((s, x) => s + (x || 0), 0);
  const est = punt <= 2 ? 1 : punt <= 4 ? 2 : 3;

  function dar() {
    if (est < 3) setErr(err + 1);
    sonido(est === 3 ? "bien" : "mal");
    setVer(true);
  }

  if (!ver) {
    return (
      <>
        <div className="tipo">Minijuego · Arma la orden</div>
        <Globo texto={paso.intro} />
        {paso.filas.map((f, r) => (
          <div className="fila" key={r}>
            <div className="q">{f.q}</div>
            <div className="chips">
              {f.ops.map((o, k) => (
                <button type="button" key={k} className={"chip" + (el[r] === k ? " sel" : "")} aria-pressed={el[r] === k}
                  onClick={() => { const n = [...el]; n[r] = k; setEl(n); sonido("toque"); }}>{o}</button>
              ))}
            </div>
          </div>
        ))}
        <div className="abajo"><button type="button" className="boton uva" disabled={!listo} onClick={dar}>Darle la orden a Bit</button></div>
      </>
    );
  }
  const orden = paso.filas.map((f, r) => f.ops[el[r]!]).join(", ");
  const ult = el[el.length - 1];
  let respuesta = paso.respuestas[el[0]!];
  if (ult === 2) respuesta += paso.extraBien;
  if (ult === 0) respuesta += paso.extraMal;
  return (
    <>
      <div className="tipo">Minijuego · Arma la orden</div>
      <div className="orden"><small>Tu orden (prompt)</small>{orden.charAt(0).toUpperCase() + orden.slice(1)}.</div>
      <Globo texto={est === 3 ? "¡Con esa orden sí supe qué hacer!" : "Hice lo que pude con lo que me dijiste…"} animo={est === 3 ? "wow" : "ups"} />
      <div className="cuento">{respuesta}</div>
      <div className="estrellas" aria-label={`${est} de 3 estrellas`}>{[1, 2, 3].map((n) => <span key={n} className={n <= est ? "" : "no"}>⭐</span>)}</div>
      <Aviso ok={est === 3} titulo={est === 3 ? "¡Orden perfecta!" : "Le faltaron detalles"}
        texto={est === 3 ? "Dijiste qué, para quién y cómo. Así se le habla a una IA." : "Entre más clara y detallada la orden, mejor responde la IA. Prueba con las opciones que dan más detalles."} />
      <div className="abajo">
        {est < 3 && <button type="button" className="boton uva" onClick={() => setVer(false)}>Mejorar mi orden</button>}
        <button type="button" className={"boton" + (est < 3 ? " sec" : "")} onClick={() => fin(err)}>Seguir</button>
      </div>
    </>
  );
}

// ---------- ¿Verdad o invento? ----------
export function Verdad({ paso, fin }: Props<PasoVerdad>) {
  const [i, setI] = useState(0);
  const [resp, setResp] = useState<boolean | null>(null);
  const [err, setErr] = useState(0);
  const it = paso.items[i];
  const ok = resp === it.v;
  return (
    <>
      <div className="tipo">Minijuego · ¿Verdad o invento? · {i + 1} de {paso.items.length}</div>
      <Globo texto={it.t} grande />
      <p style={{ margin: 0, fontWeight: 700, color: "var(--tinta2)", textAlign: "center" }}>A veces Bit inventa cosas. ¿Esto es cierto?</p>
      <div className="dos">
        <button type="button" className="op a" disabled={resp !== null} onClick={() => { setResp(true); if (!it.v) setErr(err + 1); sonido(it.v ? "bien" : "mal"); }}><span>✅</span>Es verdad</button>
        <button type="button" className="op b" disabled={resp !== null} onClick={() => { setResp(false); if (it.v) setErr(err + 1); sonido(!it.v ? "bien" : "mal"); }}><span>🌀</span>Bit lo inventó</button>
      </div>
      {resp !== null && (
        <>
          <Aviso ok={ok} titulo={ok ? (it.v ? "¡Bien!" : "¡Me cachaste!") : (it.v ? "¡Era verdad!" : "¡Te engañé!")} texto={it.por} />
          <Seguir texto={i < paso.items.length - 1 ? "Otra" : "Seguir"} onClick={() => { if (i < paso.items.length - 1) { setI(i + 1); setResp(null); } else fin(err); }} />
        </>
      )}
    </>
  );
}

// ---------- Guardián de secretos ----------
export function Secretos({ paso, fin }: Props<PasoSecretos>) {
  const [sel, setSel] = useState<Set<number>>(new Set());
  const [revisado, setRevisado] = useState(false);
  const fallos = paso.items.filter((it, i) => sel.has(i) !== it.ok).length;
  return (
    <>
      <div className="tipo">Minijuego · Guardián de secretos</div>
      <Globo texto={paso.intro} animo="piensa" />
      <div className="lista-pasos">
        {paso.items.map((it, i) => {
          const clase = revisado ? (sel.has(i) === it.ok ? " bien" : " mal") : sel.has(i) ? " sel" : "";
          return (
            <button type="button" key={i} className={"secreto" + clase} aria-pressed={sel.has(i)} disabled={revisado}
              onClick={() => { const s = new Set(sel); if (s.has(i)) s.delete(i); else s.add(i); setSel(s); sonido("toque"); }}>
              <span className="em">{it.em}</span>
              <span className="t">{it.t}{revisado && <small>{it.ok ? "✅ Se puede contar. " : "🔒 Secreto. "}{it.por}</small>}</span>
              {!revisado && <span className="marca">{sel.has(i) ? "✓" : ""}</span>}
            </button>
          );
        })}
      </div>
      {!revisado ? (
        <div className="abajo"><button type="button" className="boton" onClick={() => { setRevisado(true); sonido(fallos ? "mal" : "bien"); }}>Revisar</button></div>
      ) : (
        <>
          <Aviso ok={fallos === 0} titulo={fallos === 0 ? "¡Guardián perfecto!" : `Se te escaparon ${fallos}`} texto="Lo que te gusta se puede contar. Contraseñas, dónde vives y tu escuela, nunca." />
          <Seguir onClick={() => fin(Math.min(fallos, 2))} />
        </>
      )}
    </>
  );
}

// ---------- Ordena los pasos ----------
export function Pasos({ paso, fin }: Props<PasoPasos>) {
  const revuelto = useMemo(() => mezclar(paso.pasos, paso.pasos.length + paso.intro.length), [paso]);
  const [puestos, setPuestos] = useState<string[]>([]);
  const [malo, setMalo] = useState<string | null>(null);
  const [err, setErr] = useState(0);
  const listo = puestos.length === paso.pasos.length;
  function tocar(p: string) {
    if (puestos.includes(p) || listo) return;
    if (p === paso.pasos[puestos.length]) {
      const n = [...puestos, p];
      setPuestos(n);
      sonido(n.length === paso.pasos.length ? "bien" : "toque");
    } else {
      setErr(err + 1);
      setMalo(p);
      sonido("mal");
      setTimeout(() => setMalo(null), 400);
    }
  }
  return (
    <>
      <div className="tipo">Minijuego · Ordena los pasos</div>
      <Globo texto={paso.intro} animo="piensa" />
      <div className="lista-pasos">
        {revuelto.map((p) => {
          const n = puestos.indexOf(p);
          return (
            <button type="button" key={p} className={"paso-b" + (n >= 0 ? " puesto" : "") + (malo === p ? " error" : "")} onClick={() => tocar(p)}>
              <span className="num">{n >= 0 ? n + 1 : ""}</span>{p}
            </button>
          );
        })}
      </div>
      {!listo && <p style={{ margin: 0, fontWeight: 700, color: "var(--tinta2)", textAlign: "center" }}>¿Cuál va en el lugar {puestos.length + 1}?</p>}
      {listo && (
        <>
          <Aviso ok={err <= 1} titulo="¡Todo en orden!" texto="Las computadoras siguen pasos en orden. Si cambias el orden, el resultado sale mal." />
          <Seguir onClick={() => fin(Math.min(err, 3))} />
        </>
      )}
    </>
  );
}

// ---------- Duelo de respuestas ----------
export function Duelo({ paso, fin }: Props<PasoDuelo>) {
  const [resp, setResp] = useState<"a" | "b" | null>(null);
  const ok = resp === paso.mejor;
  return (
    <>
      <div className="tipo">Minijuego · Duelo de respuestas</div>
      <Globo texto={paso.orden + " ¿Cuál opción es mejor?"} animo="piensa" />
      <div className="duelo">
        {(["a", "b"] as const).map((k) => {
          const clase = resp ? (k === paso.mejor ? " bien" : k === resp ? " mal" : "") : "";
          return (
            <button type="button" key={k} className={"resp" + clase} disabled={!!resp}
              onClick={() => { setResp(k); sonido(k === paso.mejor ? "bien" : "mal"); }}>
              <small>OPCIÓN {k.toUpperCase()}</small>{paso[k]}
            </button>
          );
        })}
      </div>
      {resp && (
        <>
          <Aviso ok={ok} titulo={ok ? "¡Buen ojo!" : `La mejor era la ${paso.mejor.toUpperCase()}`} texto={paso.por} />
          <Seguir onClick={() => fin(ok ? 0 : 1)} />
        </>
      )}
    </>
  );
}

// ---------- Datos chuecos (sesgo) ----------
export function Chuecos({ paso, fin }: Props<PasoChuecos>) {
  const [fase, setFase] = useState(0);
  const [resp, setResp] = useState<number | null>(null);
  const op = resp !== null ? paso.opciones[resp] : null;
  return (
    <>
      <div className="tipo">Minijuego · Datos chuecos</div>
      {fase === 0 && (
        <>
          <Globo texto={paso.intro} animo="feliz" />
          <div className="fila-ej">{paso.ejemplos.map((e, i) => <span key={i} title={e.nombre}>{e.em}</span>)}</div>
          <p style={{ margin: 0, fontWeight: 700, textAlign: "center" }}>Todos los ejemplos: {paso.ejemplos[0].nombre}.</p>
          <Seguir texto="Probar a Bit" onClick={() => setFase(1)} />
        </>
      )}
      {fase === 1 && (
        <>
          <div className="objeto"><div className="em">{paso.prueba.em}</div><div className="t">{paso.prueba.nombre}</div></div>
          <Globo texto={paso.respuestaBit} animo="ups" />
          <div className="q" style={{ fontWeight: 800 }}>{paso.pregunta}</div>
          <div className="duelo">
            {paso.opciones.map((o, i) => {
              const clase = resp !== null ? (o.ok ? " bien" : i === resp ? " mal" : "") : "";
              return (
                <button type="button" key={i} className={"resp" + clase} disabled={resp !== null}
                  onClick={() => { setResp(i); sonido(o.ok ? "bien" : "mal"); }}>{o.t}</button>
              );
            })}
          </div>
          {op && (
            <>
              <Aviso ok={op.ok} titulo={op.ok ? "¡Bien, detective!" : "No exactamente"} texto={op.por} />
              <Seguir onClick={() => fin(op.ok ? 0 : 1)} />
            </>
          )}
        </>
      )}
    </>
  );
}
