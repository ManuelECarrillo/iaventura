import type { Leccion } from "@/lib/tipos";

// Mundo 6 · Estudio Creativo: IA generativa, pintar con palabras, cuentos, y de quién es la obra.
export const MUNDO6: Leccion[] = [
  {
    id: "m6-l1", mundo: 6, nombre: "La IA que crea",
    pasos: [
      { tipo: "historia", lineas: [
        "¡Bienvenido al Estudio Creativo! 🎨 Aquí las IA no solo responden: CREAN cosas nuevas.",
        "Dibujos, cuentos, canciones… A esas IA se les llama GENERATIVAS, porque generan (hacen) cosas.",
      ], fin: "¡Quiero crear!", animo: "wow" },
      { tipo: "iaono", pregunta: "¿Esto lo puede crear una IA generativa?", si: "Sí puede", no: "No puede", items: [
        { em: "🏰", t: "Un dibujo de un castillo hecho de dulces", ia: true, por: "¡Sí! Se lo describes y lo dibuja." },
        { em: "🍽️", t: "Lavar los platos de tu casa", ia: false, por: "No tiene manos. Solo crea en la pantalla." },
        { em: "🐙", t: "Un cuento de un pulpo astronauta", ia: true, por: "¡Sí! Le das la idea y escribe." },
        { em: "🤗", t: "Darte un abrazo de verdad", ia: false, por: "Eso solo lo hacen las personas que te quieren." },
        { em: "🎵", t: "Una canción de cumpleaños para tu abuela", ia: true, por: "¡Sí! Hay IA que hacen música con letra." },
      ] },
      { tipo: "carta", id: "generativa" },
      { tipo: "verdad", items: [
        { t: "Una IA generativa aprendió viendo millones de dibujos y textos de personas.", v: true, por: "¡Sí! Por eso sabe cómo se ve un castillo o cómo suena un cuento." },
        { t: "Lo que crea la IA siempre sale perfecto a la primera.", v: false, por: "¡Invento! Casi siempre hay que pedir cambios." },
      ] },
      { tipo: "historia", lineas: ["Primer pincel del estudio. 🖌️ ¡Vamos a pintar con palabras!"], fin: "Ver mis premios", animo: "feliz" },
    ],
  },
  {
    id: "m6-l2", mundo: 6, nombre: "Pinta con palabras",
    pasos: [
      { tipo: "historia", lineas: [
        "Para que una IA dibuje, no usas pincel: usas PALABRAS. 💬🖼️",
        "Entre más detalles le das (qué, cómo, dónde, colores), más se parece a lo que tienes en la cabeza.",
      ], fin: "¡A pintar!", animo: "wow" },
      { tipo: "orden", intro: "Vamos a pedirle a la IA un dibujo para tu cuarto. Elige cómo se lo pides.",
        filas: [
          { q: "¿Qué dibujamos?", ops: ["algo", "un dragón", "un dragón bebé morado con alas de mariposa"] },
          { q: "¿En qué estilo?", ops: ["como sea", "de caricatura", "de caricatura tierna, con colores pastel"] },
          { q: "¿Dónde está?", ops: ["por ahí", "en un jardín", "en un jardín de flores gigantes al atardecer"] },
        ],
        respuestas: [
          "Dibujé… algo. Una forma rara. 🟪 No sabía qué querías.",
          "Dibujé un dragón. Grande, verde y serio, porque no me dijiste cómo. 🐉",
          "¡Dibujé un dragón bebé morado con alas de mariposa! 🐉🦋 ¡Qué tierno!",
        ],
        extraBien: " Está en un jardín de flores gigantes y el atardecer lo pinta de naranja. ¡Para enmarcarlo!",
        extraMal: " Lo puse en un fondo blanco, porque no me dijiste dónde.",
      },
      { tipo: "carta", id: "imagen" },
      { tipo: "duelo", orden: "El dibujo salió casi bien, pero el dragón quedó verde y lo quería morado. ¿Qué hago?", a: "Me enojo y cierro la app.", b: "Le pido: 'El mismo dibujo, pero con el dragón morado'.", mejor: "b", por: "Eso es ITERAR: pedir, mirar y volver a pedir mejor. Así trabajan los artistas con IA." },
      { tipo: "verdad", items: [
        { t: "Si el dibujo no sale como quiero, puedo pedir cambios las veces que haga falta.", v: true, por: "¡Sí! Pedir cambios es parte del juego." },
        { t: "La IA adivina lo que imagino aunque no se lo diga.", v: false, por: "¡Invento! Solo sabe lo que le escribes." },
      ] },
      { tipo: "historia", lineas: ["Segundo pincel. 🖌️🖌️ ¡Ya pintas con palabras!"], fin: "Ver mis premios", animo: "wow" },
    ],
  },
  {
    id: "m6-l3", mundo: 6, nombre: "Cuentos con Bit",
    pasos: [
      { tipo: "historia", lineas: [
        "Hoy escribimos un cuento con IA. 📖 Pero ojo: la idea es TUYA. La IA solo ayuda a escribirla.",
        "Un buen cuento necesita tres cosas: un personaje, un lugar y un problema.",
      ], fin: "¿Cómo se lo pido?", animo: "piensa" },
      { tipo: "duelo", orden: "Quiero un cuento para leer antes de dormir. ¿Cuál orden es mejor?", a: "Escribe un cuento.", b: "Escribe un cuento corto para un niño de 8 años sobre un pulpo que quiere ir al espacio, con final feliz.", mejor: "b", por: "La B dice para quién, de qué, qué problema y cómo termina. ¡Eso es un buen prompt!" },
      { tipo: "pasos", intro: "Ordena cómo se hace un cuento con IA.", pasos: [
        "Pensar MI idea",
        "Decirle personaje, lugar y problema",
        "Leer lo que escribió",
        "Pedirle cambios",
        "Agregar mis propias ideas",
      ] },
      { tipo: "carta", id: "chatbot" },
      { tipo: "verdad", items: [
        { t: "Si el cuento está aburrido, le puedo pedir a la IA que lo haga más chistoso.", v: true, por: "¡Claro! Pedir cambios es iterar." },
        { t: "La IA puede inventar datos en un cuento, y eso está bien porque es ficción.", v: true, por: "¡Sí! En un cuento inventar se vale. En la tarea de ciencias, no." },
        { t: "Para escribir un cuento con IA no necesito tener ninguna idea.", v: false, por: "Sin tu idea, el cuento es de cualquiera. ¡La idea es lo tuyo!" },
      ] },
      { tipo: "historia", lineas: ["Tercer pincel. 🖌️🖌️🖌️ El pulpo llegó a la Luna gracias a tu idea. 🐙🌙"], fin: "Ver mis premios", animo: "feliz" },
    ],
  },
  {
    id: "m6-l4", mundo: 6, nombre: "¿De quién es la obra?",
    pasos: [
      { tipo: "historia", lineas: [
        "Una pregunta importante del estudio: si la IA dibujó, ¿quién es el AUTOR? 🤔",
        "La IA aprendió de millones de artistas. Lo que haces con ella es trabajo en equipo… y en equipo se dice la verdad: 'me ayudó una IA'.",
      ], fin: "Entendido", animo: "piensa" },
      { tipo: "iaono", pregunta: "¿Se vale?", si: "Se vale", no: "No se vale", items: [
        { em: "🖼️", t: "Pedir un dibujo a la IA y decir 'lo hice con ayuda de una IA'", ia: true, por: "¡Se vale! Dijiste la verdad." },
        { em: "📝", t: "Entregar de tarea un cuento que escribió la IA y decir que es todo tuyo", ia: false, por: "No se vale. Es decir una mentira a tu maestra." },
        { em: "💡", t: "Pedir ideas a la IA y luego hacer tu propio dibujo a mano", ia: true, por: "¡Se vale! La IA dio ideas, la obra es tuya." },
        { em: "👯", t: "Copiar con IA el dibujo de un compañero y decir que es tuyo", ia: false, por: "No se vale. Es el trabajo de otra persona." },
        { em: "🎤", t: "Hacer una canción con IA para tu mamá y contarle cómo la hiciste", ia: true, por: "¡Se vale! Y seguro le encanta." },
      ] },
      { tipo: "carta", id: "autor" },
      { tipo: "verdad", items: [
        { t: "Si la IA me ayudó, lo digo. Eso es ser honesto.", v: true, por: "¡Sí!" },
        { t: "Si uso IA, mis ideas ya no importan.", v: false, por: "¡Al revés! Tus ideas son lo que hace la obra especial." },
      ] },
      { tipo: "historia", lineas: ["Cuarto pincel. 🖌️🖌️🖌️🖌️ Un artista honesto vale por dos."], fin: "Ver mis premios", animo: "wow" },
    ],
  },
  {
    id: "m6-l5", mundo: 6, nombre: "Jefe del estudio",
    mision: "Con un adulto, pídanle a una IA un dibujo o un cuento con TUS ideas. Luego haz tu propia versión a mano y compárenlas. ¿Cuál te gusta más?",
    pasos: [
      { tipo: "historia", lineas: [
        "¡El Crítico Gruñón llegó al estudio! 🧐 Dice que los niños no saben crear con IA.",
        "Demuéstrale que sí: con buenos prompts, cambios y honestidad. ¡La exposición empieza!",
      ], fin: "¡A crear!", animo: "wow" },
      { tipo: "orden", intro: "Primera obra: una canción. Elige cómo se la pides a la IA.",
        filas: [
          { q: "¿De qué es la canción?", ops: ["de algo", "de mi perro", "de mi perro Tobi que ama las pelotas"] },
          { q: "¿Qué estilo?", ops: ["el que sea", "alegre", "alegre y chistosa, para cantar en familia"] },
          { q: "¿Qué tan larga?", ops: ["no sé", "normal", "cortita, de dos estrofas y un coro pegajoso"] },
        ],
        respuestas: [
          "Hice una canción… de algo. No sé bien de qué. 🎵❓",
          "Hice una canción de tu perro. Es un poco seria, no me dijiste el estilo. 🎵🐕",
          "¡Hice una canción de Tobi y sus pelotas, alegre y chistosa! 🎵🐕🎾 ¡Toda la familia la va a cantar!",
        ],
        extraBien: " Dos estrofas y un coro que no se te va a olvidar. ¡Guau guau!",
        extraMal: " Me salió larguísima, de 20 estrofas, porque no me dijiste el tamaño.",
      },
      { tipo: "iaono", pregunta: "¿Qué hace un buen artista con IA?", si: "Buen artista", no: "Al Crítico le gusta eso", items: [
        { em: "💡", t: "Empieza con su propia idea", ia: true, por: "¡Sí! La idea es tuya." },
        { em: "🔁", t: "Pide cambios hasta que quede como imagina", ia: true, por: "¡Iterar!" },
        { em: "🤫", t: "Esconde que usó IA", ia: false, por: "No. Un artista honesto lo dice." },
        { em: "📣", t: "Da detalles: qué, cómo, dónde y para quién", ia: true, por: "¡Buen prompt!" },
        { em: "😤", t: "Se rinde si el primer resultado sale mal", ia: false, por: "No. El primero casi nunca es el bueno." },
      ] },
      { tipo: "pasos", intro: "Ordena cómo se hace una obra con IA.", pasos: [
        "Tener mi idea",
        "Pedir con detalles",
        "Mirar el resultado",
        "Pedir cambios",
        "Decir que me ayudó una IA",
      ] },
      { tipo: "verdad", items: [
        { t: "Una IA generativa crea dibujos, cuentos y música a partir de palabras.", v: true, por: "¡Sí!" },
        { t: "Pedir cambios es de malos artistas.", v: false, por: "¡Invento! Es de los buenos." },
        { t: "Si la IA me ayudó, lo digo.", v: true, por: "¡Exacto!" },
      ] },
      { tipo: "historia", lineas: [
        "El Crítico Gruñón… ¡sonrió! 🧐➡️😄 'Nunca había visto una exposición así'.",
        "Ganaste la corona del Estudio. 👑 Solo falta la Torre de los Superpoderes…",
      ], fin: "Ver mis premios", animo: "wow" },
    ],
  },
];
