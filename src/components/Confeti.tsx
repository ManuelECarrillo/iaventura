"use client";

import { useEffect, useRef } from "react";

// Lluvia de confeti al terminar una lección (se salta si el niño tiene "reducir movimiento").
export default function Confeti() {
  const ref = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const cv = ref.current!;
    const cx = cv.getContext("2d")!;
    cv.width = innerWidth;
    cv.height = innerHeight;
    const cols = ["#ffc531", "#ff5c8a", "#2fcf85", "#2ec4d6", "#7b61ff"];
    const ps = Array.from({ length: 140 }, (_, i) => ({
      x: Math.random() * cv.width, y: -20 - Math.random() * cv.height * 0.5,
      vx: (Math.random() - 0.5) * 3, vy: 2 + Math.random() * 4, r: 4 + Math.random() * 6, c: cols[i % 5], a: Math.random() * 6,
    }));
    let t = 0, id = 0;
    const cuadro = () => {
      cx.clearRect(0, 0, cv.width, cv.height);
      for (const p of ps) {
        p.x += p.vx; p.y += p.vy; p.a += 0.1;
        cx.save(); cx.translate(p.x, p.y); cx.rotate(p.a); cx.fillStyle = p.c; cx.fillRect(-p.r / 2, -p.r / 4, p.r, p.r / 2); cx.restore();
      }
      if (++t < 170) id = requestAnimationFrame(cuadro);
      else cx.clearRect(0, 0, cv.width, cv.height);
    };
    id = requestAnimationFrame(cuadro);
    return () => cancelAnimationFrame(id);
  }, []);
  return <canvas id="confeti" ref={ref} aria-hidden="true" />;
}
