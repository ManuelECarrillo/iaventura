"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { createContext, useCallback, useContext, useEffect, useRef, useState } from "react";
import { useAvance } from "@/lib/avance";

// Piezas de interfaz compartidas: barra fija abajo, cabecera, aviso flotante y diálogo propio
// (nunca confirm()/alert() del sistema: a Eduardo no le gustan los controles grises).

const NAV = [
  { href: "/", em: "🗺️", t: "Mapa" },
  { href: "/album", em: "🃏", t: "Álbum" },
  { href: "/bit", em: "🤖", t: "Bit" },
  { href: "/papas", em: "👪", t: "Papás" },
];

export function Nav() {
  const ruta = usePathname();
  return (
    <nav className="nav" aria-label="Secciones">
      <div className="nav-in">
        {NAV.map((n) => {
          const on = n.href === "/" ? ruta === "/" : ruta.startsWith(n.href);
          return (
            <Link key={n.href} href={n.href} className={on ? "on" : ""} aria-current={on ? "page" : undefined}>
              <span>{n.em}</span>{n.t}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}

export function Cabecera() {
  const [a] = useAvance();
  return (
    <div className="top">
      <div className="logo">IA<b>ventura</b></div>
      <div className="pills">
        <span className="pill" aria-label="Estrellas">⭐ {a?.estrellas ?? 0}</span>
        <span className="pill" aria-label="Cartas">🃏 {a?.cartas.length ?? 0}</span>
      </div>
    </div>
  );
}

// ---- Aviso flotante ----
const ToastCtx = createContext<(m: string) => void>(() => {});
export const useToast = () => useContext(ToastCtx);

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [msg, setMsg] = useState<{ t: string; k: number } | null>(null);
  const timer = useRef<ReturnType<typeof setTimeout>>(undefined);
  const mostrar = useCallback((t: string) => {
    setMsg({ t, k: Date.now() });
    clearTimeout(timer.current);
    timer.current = setTimeout(() => setMsg(null), 2400);
  }, []);
  return (
    <ToastCtx.Provider value={mostrar}>
      {children}
      {msg && <div className="toast" role="status" key={msg.k}>{msg.t}</div>}
    </ToastCtx.Provider>
  );
}

// ---- Diálogo propio ----
export function Hoja({ titulo, texto, si, no, alSi, alCerrar, children }: {
  titulo: string; texto?: string; si?: string; no: string; alSi?: () => void; alCerrar: () => void; children?: React.ReactNode;
}) {
  useEffect(() => {
    const f = (e: KeyboardEvent) => { if (e.key === "Escape") alCerrar(); };
    window.addEventListener("keydown", f);
    return () => window.removeEventListener("keydown", f);
  }, [alCerrar]);
  return (
    <div className="velo" onClick={(e) => { if (e.target === e.currentTarget) alCerrar(); }}>
      <div className="hoja" role="dialog" aria-modal="true" aria-label={titulo}>
        <h3>{titulo}</h3>
        {texto && <p>{texto}</p>}
        {children}
        <button type="button" className="boton" onClick={alCerrar} autoFocus>{no}</button>
        {si && alSi && <button type="button" className="boton sec" onClick={() => { alCerrar(); alSi(); }}>{si}</button>}
      </div>
    </div>
  );
}
