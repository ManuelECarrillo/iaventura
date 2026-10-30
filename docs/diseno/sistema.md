# Sistema de diseño · IAventura

Juego para niños de 7 a 12 años en un Android barato. Un solo tema claro a propósito (cielo con puntitos).

## Tokens (`src/app/globals.css`)
| Token | Uso |
|---|---|
| `--cielo` #e6f3ff | Fondo de toda la app |
| `--tinta` #1b2340 | Texto y contornos de Bit |
| `--bit` #2ec4d6 | Botón "sí" (A) y color de Bit por defecto |
| `--sol` #ffc531 | Botón "no" (B), estrellas, lección hecha |
| `--uva` #7b61ff | Acción especial (cartas, terminar, papás), lección activa |
| `--hoja` #2fcf85 | Botón principal "Seguir", aciertos |
| `--rosa` #ff5c8a / `--mal` #ff7a59 | Detalles y errores (sin rojo agresivo) |

Tipografía: **Baloo 2** (títulos, botones) y **Nunito** (texto), de Google Fonts.

## Reglas
- Botones gordos con sombra sólida abajo (se "hunden" al tocar). Mínimo 48 px de alto; los principales 58 px.
- Nada de controles del sistema (select, confirm, alert, casillas): diálogo propio `Hoja`, aviso `useToast`, fichas y chips propios.
- Nada se arrastra ni se desliza: todo es tocar. Nada de teclado para el niño.
- Barra fija abajo con 4 secciones siempre visibles: Mapa, Álbum, Bit, Papás.
- Todo texto de Bit tiene botón 🔊 (voz del navegador).
- Un error nunca castiga: explica en una frase y deja seguir.
- Mapa en una sola columna: los nodos zigzaguean con sangría, sin scroll horizontal.
