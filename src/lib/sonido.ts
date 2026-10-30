"use client";

// Sonidos cortos hechos con el navegador (sin archivos) y lectura en voz alta gratis.
let ctx: AudioContext | null = null;

export function sonido(tipo: "bien" | "mal" | "carta" | "toque") {
  try {
    ctx = ctx || new (window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext)();
    const notas = tipo === "bien" ? [660, 880] : tipo === "carta" ? [523, 659, 784, 1047] : tipo === "toque" ? [440] : [300, 220];
    notas.forEach((f, i) => {
      const o = ctx!.createOscillator();
      const g = ctx!.createGain();
      o.type = tipo === "mal" ? "triangle" : "sine";
      o.frequency.value = f;
      const t0 = ctx!.currentTime + i * 0.09;
      g.gain.setValueAtTime(0.0001, t0);
      g.gain.exponentialRampToValueAtTime(tipo === "toque" ? 0.06 : 0.18, t0 + 0.02);
      g.gain.exponentialRampToValueAtTime(0.0001, t0 + 0.22);
      o.connect(g);
      g.connect(ctx!.destination);
      o.start(t0);
      o.stop(t0 + 0.25);
    });
  } catch {}
}

export function hablar(texto: string) {
  try {
    const sy = window.speechSynthesis;
    if (!sy) return false;
    sy.cancel();
    const u = new SpeechSynthesisUtterance(texto.replace(/[\u{1F300}-\u{1FAFF}☀-➿]/gu, ""));
    u.lang = "es-MX";
    u.rate = 0.95;
    u.pitch = 1.15;
    const voces = sy.getVoices().filter((v) => /^es/i.test(v.lang));
    const mx = voces.filter((v) => /MX|US|419/i.test(v.lang));
    if (mx[0] || voces[0]) u.voice = mx[0] || voces[0];
    sy.speak(u);
    return true;
  } catch {
    return false;
  }
}
