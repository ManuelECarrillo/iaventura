import type { Animo } from "@/lib/tipos";

// Bit, dibujado con código (no cuesta nada y se puede vestir).
export function bitSVG(animo: Animo, color: string, acc: string) {
  const boca = {
    feliz: '<path d="M78 128 Q100 146 122 128" stroke="#1b2340" stroke-width="6" fill="none" stroke-linecap="round"/>',
    wow: '<ellipse cx="100" cy="133" rx="9" ry="11" fill="#1b2340"/>',
    piensa: '<path d="M82 134 L118 130" stroke="#1b2340" stroke-width="6" stroke-linecap="round"/>',
    ups: '<path d="M80 138 Q100 124 120 138" stroke="#1b2340" stroke-width="6" fill="none" stroke-linecap="round"/>',
  }[animo];
  const ojos = animo === "piensa"
    ? '<g class="ojo"><ellipse cx="75" cy="98" rx="11" ry="13" fill="#1b2340"/><circle cx="79" cy="92" r="4" fill="#fff"/></g><g class="ojo"><ellipse cx="125" cy="98" rx="11" ry="13" fill="#1b2340"/><circle cx="129" cy="92" r="4" fill="#fff"/></g>'
    : '<g class="ojo"><ellipse cx="75" cy="100" rx="12" ry="15" fill="#1b2340"/><circle cx="79" cy="94" r="5" fill="#fff"/></g><g class="ojo"><ellipse cx="125" cy="100" rx="12" ry="15" fill="#1b2340"/><circle cx="129" cy="94" r="5" fill="#fff"/></g>';
  const extras: Record<string, string> = {
    antena: '<line x1="100" y1="44" x2="100" y2="20" stroke="#1b2340" stroke-width="6" stroke-linecap="round"/><circle cx="100" cy="16" r="11" fill="#ffc531" stroke="#1b2340" stroke-width="5"/>',
    gorra: '<path d="M46 62 Q100 4 154 62 Z" fill="#ff5c8a" stroke="#1b2340" stroke-width="5" stroke-linejoin="round"/><path d="M140 58 Q180 56 188 70 L150 68 Z" fill="#ff5c8a" stroke="#1b2340" stroke-width="5" stroke-linejoin="round"/><circle cx="100" cy="20" r="7" fill="#ffc531" stroke="#1b2340" stroke-width="4"/>',
    corona: '<path d="M58 54 L66 14 L84 38 L100 8 L116 38 L134 14 L142 54 Z" fill="#ffc531" stroke="#1b2340" stroke-width="5" stroke-linejoin="round"/><circle cx="100" cy="34" r="6" fill="#ff5c8a"/>',
    mono: '<line x1="100" y1="44" x2="100" y2="24" stroke="#1b2340" stroke-width="6" stroke-linecap="round"/><path d="M100 22 L72 8 L74 36 Z M100 22 L128 8 L126 36 Z" fill="#7b61ff" stroke="#1b2340" stroke-width="5" stroke-linejoin="round"/><circle cx="100" cy="22" r="7" fill="#7b61ff" stroke="#1b2340" stroke-width="5"/>',
    casco: '<path d="M30 110 Q30 10 100 10 Q170 10 170 110" fill="#bfe9ff" fill-opacity=".55" stroke="#1b2340" stroke-width="5"/><circle cx="100" cy="14" r="6" fill="#ff5c8a" stroke="#1b2340" stroke-width="4"/>',
    flor: '<g transform="translate(140 40)"><circle cx="0" cy="-14" r="10" fill="#ff5c8a" stroke="#1b2340" stroke-width="4"/><circle cx="14" cy="0" r="10" fill="#ff5c8a" stroke="#1b2340" stroke-width="4"/><circle cx="0" cy="14" r="10" fill="#ff5c8a" stroke="#1b2340" stroke-width="4"/><circle cx="-14" cy="0" r="10" fill="#ff5c8a" stroke="#1b2340" stroke-width="4"/><circle cx="0" cy="0" r="8" fill="#ffc531" stroke="#1b2340" stroke-width="4"/></g>',
  };
  const extra = extras[acc] || "";
  const encima = acc === "casco" || acc === "flor";
  return '<svg viewBox="0 0 200 230" role="img" aria-label="Bit, el robot">' +
    '<ellipse cx="100" cy="222" rx="58" ry="7" fill="#1b2340" opacity=".12"/>' +
    `<rect x="62" y="166" width="76" height="50" rx="20" fill="${color}" stroke="#1b2340" stroke-width="6"/>` +
    '<circle cx="100" cy="190" r="9" fill="#ffc531" stroke="#1b2340" stroke-width="4"/>' +
    (encima ? "" : extra) +
    `<rect x="22" y="80" width="18" height="40" rx="9" fill="${color}" stroke="#1b2340" stroke-width="6"/>` +
    `<rect x="160" y="80" width="18" height="40" rx="9" fill="${color}" stroke="#1b2340" stroke-width="6"/>` +
    `<rect x="34" y="44" width="132" height="126" rx="44" fill="${color}" stroke="#1b2340" stroke-width="6"/>` +
    '<rect x="50" y="66" width="100" height="86" rx="32" fill="#ffffff" stroke="#1b2340" stroke-width="5"/>' +
    ojos + '<circle cx="58" cy="124" r="7" fill="#ff5c8a" opacity=".55"/><circle cx="142" cy="124" r="7" fill="#ff5c8a" opacity=".55"/>' + boca +
    (encima ? extra : "") +
    "</svg>";
}

export default function Bit({ animo = "feliz", color, acc, clase = "" }: { animo?: Animo; color: string; acc: string; clase?: string }) {
  return <div className={"bit " + clase} dangerouslySetInnerHTML={{ __html: bitSVG(animo, color, acc) }} />;
}
