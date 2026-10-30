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

let reproduciendo: HTMLAudioElement | null = null;

/** Las cartas tienen voz grabada (ElevenLabs, en public/voz/cartas). Si falta el archivo, lee el navegador. */
export function hablarCarta(c: { id: string; t: string; d: string }) {
  try {
    window.speechSynthesis?.cancel();
    reproduciendo?.pause();
    const a = new Audio(`/voz/cartas/${c.id}.mp3`);
    reproduciendo = a;
    a.play().catch(() => hablar(c.t + ". " + c.d));
    a.onerror = () => hablar(c.t + ". " + c.d);
  } catch {
    hablar(c.t + ". " + c.d);
  }
}

/** Elige la voz menos robótica que tenga el celular: primero las "naturales" de Google/Microsoft en español. */
function mejorVoz(voces: SpeechSynthesisVoice[]) {
  const es = voces.filter((v) => /^es/i.test(v.lang));
  const puntos = (v: SpeechSynthesisVoice) =>
    (/natural|neural|premium|enhanced/i.test(v.name) ? 8 : 0) +
    (/google/i.test(v.name) ? 4 : 0) +
    (/MX/i.test(v.lang) ? 3 : /US|419/i.test(v.lang) ? 2 : 0) +
    (v.localService ? 0 : 1);
  return es.sort((a, b) => puntos(b) - puntos(a))[0];
}

export function hablar(texto: string) {
  try {
    const sy = window.speechSynthesis;
    if (!sy) return false;
    sy.cancel();
    reproduciendo?.pause();
    const u = new SpeechSynthesisUtterance(texto.replace(/[\u{1F300}-\u{1FAFF}☀-➿]/gu, ""));
    u.lang = "es-MX";
    u.rate = 0.95;
    u.pitch = 1.15;
    const v = mejorVoz(sy.getVoices());
    if (v) u.voice = v;
    sy.speak(u);
    return true;
  } catch {
    return false;
  }
}
