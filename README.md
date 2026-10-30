# IAventura

Juego para que niños de 7 a 12 años aprendan a usar la inteligencia artificial: entrenan y le enseñan cosas a su robot, **Bit**, con lecciones de 3-5 minutos y minijuegos que no se repiten.

Plan completo (concepto, precios, cómo se vende): `docs/plan.md`.

## Qué hay
- **Mapa** (`/`): mundos 1 (Isla Chispa) y 2 (Bosque de los Datos) completos y gratis, 5 lecciones cada uno; mundos 3-7 como "plan Familia".
- **Lección** (`/leccion/<id>`): 8 minijuegos (¿IA o no IA?, Entrena a Bit, Arma la orden, ¿Verdad o invento?, Guardián de secretos, Ordena los pasos, Duelo de respuestas, Datos chuecos) + cartas de poder + historia. Sin vidas; estrellas según errores.
- **Álbum** (`/album`): 19 cartas de poder (términos de IA).
- **Bit** (`/bit`): color y accesorios que se desbloquean con estrellas.
- **Papás** (`/papas`): puerta con multiplicación, avance, palabras aprendidas, misiones, planes, Instalar app.
- Tope de 3 lecciones al día y racha semanal (no diaria).
- PWA instalable y funciona sin internet (`public/sw.js`).

## Datos
Sin cuentas ni datos del niño: el avance vive en `localStorage` del celular (`src/lib/avance.ts`). Supabase entra solo cuando haya cobro (cuenta del papá).

## Agregar contenido
Las lecciones son datos en `src/contenido/lecciones/mundoN.ts` (tipos en `src/lib/tipos.ts`) y las cartas en `src/contenido/cartas.ts`. Regla: nunca dos minijuegos iguales seguidos.

## Desarrollo
```bash
npm install
npm run dev     # http://localhost:3000
npm run build
```
Despliegue: Vercel, sin variables de entorno.

## Agentes
Mismo equipo `-supremo` que Pidewat (`.claude/skills/`, reglas en `docs/agentes/README.md`).
