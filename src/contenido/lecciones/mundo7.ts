import type { Leccion } from "@/lib/tipos";

// Mundo 7 · Torre de los Superpoderes: usar la IA para aprender, traducir, investigar y crear… sin dejar de pensar.
export const MUNDO7: Leccion[] = [
  {
    id: "m7-l1", mundo: 7, nombre: "Mi tutor de IA",
    pasos: [
      { tipo: "historia", lineas: [
        "¡Llegaste a la Torre de los Superpoderes! 🗼 Aquí juntas todo lo que aprendiste.",
        "Primer superpoder: una IA puede ser tu TUTOR. Te explica una y otra vez, sin cansarse… pero la tarea la haces tú.",
      ], fin: "¡Quiero mi superpoder!", animo: "wow" },
      { tipo: "duelo", orden: "No entiendo las fracciones. ¿Qué le pido a la IA?", a: "Resuelve mi tarea de fracciones.", b: "Explícame las fracciones con pizzas, paso a paso, y luego ponme un ejercicio para probar si entendí.", mejor: "b", por: "Con la A no aprendes nada. Con la B entiendes y practicas. ¡Eso es un tutor!" },
      { tipo: "iaono", pregunta: "¿Es usar la IA para APRENDER?", si: "Para aprender", no: "Para no aprender", items: [
        { em: "🔄", t: "Pedirle que me lo explique de otra forma", ia: true, por: "¡Sí! Un tutor explica hasta que entiendes." },
        { em: "📋", t: "Copiar las respuestas sin leerlas", ia: false, por: "Así la tarea queda hecha, pero tú no aprendiste." },
        { em: "🏋️", t: "Pedir un ejercicio parecido para practicar", ia: true, por: "¡Practicar es aprender!" },
        { em: "📝", t: "Que escriba todo mi resumen por mí", ia: false, por: "El resumen es para que TÚ entiendas." },
        { em: "❓", t: "Preguntar por qué una respuesta es correcta", ia: true, por: "¡Entender el porqué es lo mejor!" },
      ] },
      { tipo: "carta", id: "tutor" },
      { tipo: "verdad", items: [
        { t: "Un tutor de IA puede equivocarse, así que lo que me explica también se revisa.", v: true, por: "¡Sí! Lo del pantano sigue valiendo aquí." },
        { t: "Si la IA hace mi tarea, yo aprendo igual.", v: false, por: "¡Invento! Aprende el que piensa." },
      ] },
      { tipo: "historia", lineas: ["Primer piso de la torre. 🗼 Superpoder: aprender con un tutor incansable."], fin: "Ver mis premios", animo: "feliz" },
    ],
  },
  {
    id: "m7-l2", mundo: 7, nombre: "Hablar con el mundo",
    pasos: [
      { tipo: "historia", lineas: [
        "Segundo superpoder: entender cualquier idioma. 🌍",
        "Un TRADUCTOR de IA pasa palabras de un idioma a otro al instante. Sirve para entender… y para aprender.",
      ], fin: "¿Cómo lo uso bien?", animo: "piensa" },
      { tipo: "pasos", intro: "Quieres aprender a decir una frase en inglés. Ordena los pasos.", pasos: [
        "Escribir la frase en español",
        "Ver cómo se dice en inglés",
        "Escuchar cómo suena",
        "Repetirla en voz alta",
        "Usarla sin mirar la pantalla",
      ] },
      { tipo: "carta", id: "traductor" },
      { tipo: "duelo", orden: "Tengo tarea de inglés. ¿Qué le pido al traductor?", a: "Traduce toda mi tarea completa.", b: "Traduce esta palabra y dame una frase de ejemplo para recordarla.", mejor: "b", por: "Con la B aprendes una palabra nueva. Con la A, la tarea se hace sola y tú te quedas igual." },
      { tipo: "verdad", items: [
        { t: "Los traductores de IA a veces se equivocan con chistes y dichos.", v: true, por: "¡Sí! 'Me vale un cacahuate' no se traduce bien." },
        { t: "Con traductor ya no hace falta aprender idiomas.", v: false, por: "¡Invento! Hablar tú mismo es un superpoder que ninguna app te quita." },
      ] },
      { tipo: "historia", lineas: ["Segundo piso. 🗼🗼 ¡Hello, world! Ya puedes hablar con el mundo."], fin: "Ver mis premios", animo: "wow" },
    ],
  },
  {
    id: "m7-l3", mundo: 7, nombre: "Investiga como experto",
    pasos: [
      { tipo: "historia", lineas: [
        "Tercer superpoder: investigar. 🔬 Con la IA puedes preguntar de todo… y luego REVISAR, como aprendiste en el pantano.",
      ], fin: "¡A investigar!", animo: "wow" },
      { tipo: "orden", intro: "Tienes que investigar los volcanes para la escuela. Elige cómo se lo pides.",
        filas: [
          { q: "¿Qué quieres saber?", ops: ["cosas", "de volcanes", "cómo hace erupción un volcán"] },
          { q: "¿Para quién?", ops: ["no sé", "para un niño", "para un niño de 8 años, con palabras sencillas"] },
          { q: "¿Qué más?", ops: ["nada", "que sea corto", "corto, y dime dónde puedo revisarlo"] },
        ],
        respuestas: [
          "Te conté cosas… de muchas cosas. 🌋❓ No sé qué querías.",
          "Te conté de volcanes: su historia, sus tipos, sus nombres… Son 12 páginas. 🌋📚",
          "¡Te expliqué cómo hace erupción un volcán, con palabras sencillas! 🌋 Como una botella de refresco agitada.",
        ],
        extraBien: " Es cortito y te dije en qué libro y página de ciencias puedes revisarlo. ¡Investigador nivel experto!",
        extraMal: " Es larguísimo y no te dije de dónde lo saqué, porque no me lo pediste.",
      },
      { tipo: "pasos", intro: "Ordena cómo investiga un experto con IA.", pasos: [
        "Preguntar claro",
        "Leer la respuesta",
        "Revisar en una fuente confiable",
        "Escribirlo con mis palabras",
        "Decir que usé IA",
      ] },
      { tipo: "verdad", items: [
        { t: "Investigar con IA es preguntar, revisar y escribir con mis palabras.", v: true, por: "¡Exacto!" },
        { t: "Si copio lo que dijo la IA tal cual, ya investigué.", v: false, por: "¡Invento! Eso es copiar, no investigar." },
      ] },
      { tipo: "historia", lineas: ["Tercer piso. 🗼🗼🗼 Ya investigas como experto."], fin: "Ver mis premios", animo: "feliz" },
    ],
  },
  {
    id: "m7-l4", mundo: 7, nombre: "Superpoder, no reemplazo",
    pasos: [
      { tipo: "historia", lineas: [
        "El secreto más grande de la torre: 🤫",
        "La IA no es el superpoder. El SUPERPODER ERES TÚ. La IA es la herramienta que te ayuda a hacer más con tus ideas.",
      ], fin: "¡Entendido!", animo: "wow" },
      { tipo: "iaono", pregunta: "¿Superpoder o flojera?", si: "Superpoder", no: "Flojera", items: [
        { em: "💡", t: "Pedir ideas a la IA y elegir la mía favorita", ia: true, por: "¡Superpoder! Tú decides." },
        { em: "🏆", t: "Que la IA haga mi dibujo del concurso y decir que es mío", ia: false, por: "Flojera… y mentira. Lo del estudio creativo." },
        { em: "🏋️", t: "Practicar con ejercicios que me pone la IA", ia: true, por: "¡Superpoder! Practicar es crecer." },
        { em: "📕", t: "Dejar de leer libros porque la IA me resume todo", ia: false, por: "Flojera. Leer es un superpoder que nadie te puede quitar." },
        { em: "✅", t: "Escribir mi cuento yo y pedirle a la IA que revise la ortografía", ia: true, por: "¡Superpoder! Tú creas, ella ayuda." },
      ] },
      { tipo: "carta", id: "superpoder" },
      { tipo: "verdad", items: [
        { t: "Usar la IA para pensar más, no para pensar menos.", v: true, por: "¡Esa es la regla de la torre!" },
        { t: "Si una IA hace algo por mí, yo ya no lo necesito saber.", v: false, por: "¡Invento! Entre más sabes, mejor usas la IA." },
        { t: "Mis ideas, mi esfuerzo y mi honestidad son lo que me hace especial.", v: true, por: "¡Sí! Eso ninguna IA lo tiene." },
      ] },
      { tipo: "historia", lineas: ["Cuarto piso. 🗼🗼🗼🗼 Solo falta la cima…"], fin: "Ver mis premios", animo: "wow" },
    ],
  },
  {
    id: "m7-l5", mundo: 7, nombre: "Jefe de la torre",
    mision: "Elige un tema que te encante. Con un adulto, usa una IA para aprender algo nuevo: pregunta claro, revísalo en una fuente y cuéntaselo a alguien con tus palabras.",
    pasos: [
      { tipo: "historia", lineas: [
        "¡La cima de la torre! 🗼✨ Aquí te espera el Gran Examen de Bit.",
        "Siete mundos, siete llaves. Demuestra que eres un verdadero Maestro de la IA. ¡Yo creo en ti!",
      ], fin: "¡Estoy listo!", animo: "wow" },
      { tipo: "iaono", pregunta: "¿Qué hace un Maestro de la IA?", si: "Maestro", no: "Todavía no", items: [
        { em: "📣", t: "Pide claro: qué, cómo y para qué", ia: true, por: "¡Ciudad Prompt!" },
        { em: "🔍", t: "Revisa lo que dice la IA en una fuente", ia: true, por: "¡Pantano de los Espejismos!" },
        { em: "🔑", t: "Le cuenta su contraseña a la IA para que la cuide", ia: false, por: "¡Nunca! Fortaleza Guardiana." },
        { em: "✍️", t: "Dice cuando una IA le ayudó", ia: true, por: "¡Estudio Creativo!" },
        { em: "📋", t: "Copia la tarea completa sin leerla", ia: false, por: "Eso no es superpoder. ¡Torre!" },
        { em: "🗂️", t: "Sabe que la IA aprende de datos y puede salir chueca", ia: true, por: "¡Bosque de los Datos!" },
      ] },
      { tipo: "secretos", intro: "Último repaso de la fortaleza. Toca SOLO lo que es seguro contarle a una IA.", items: [
        { em: "🌋", t: "Que quieres saber de volcanes", ok: true, por: "Seguro." },
        { em: "🏠", t: "Tu dirección", ok: false, por: "Privado, siempre." },
        { em: "🎨", t: "Que quieres un dibujo de un robot", ok: true, por: "Seguro." },
        { em: "🔑", t: "Tu contraseña", ok: false, por: "¡Jamás!" },
      ] },
      { tipo: "duelo", orden: "Última orden del examen. ¿Cuál es mejor?", a: "Ayúdame.", b: "Soy un niño de 8 años. Explícame por qué el cielo es azul, cortito, con un ejemplo, y dime dónde puedo revisarlo.", mejor: "b", por: "Contexto, claridad, tamaño, ejemplo y fuente. ¡Prompt de maestro!" },
      { tipo: "verdad", items: [
        { t: "La IA aprende de ejemplos (datos) y busca patrones.", v: true, por: "¡Bosque!" },
        { t: "La IA nunca se equivoca.", v: false, por: "¡Pantano! Alucina a veces." },
        { t: "Bit es un programa, no una persona.", v: true, por: "¡Fortaleza!" },
        { t: "El superpoder es la IA, no yo.", v: false, por: "¡Al revés! El superpoder eres TÚ." },
      ] },
      { tipo: "pasos", intro: "Ordena el camino del Maestro de la IA.", pasos: [
        "Tener mi propia idea",
        "Pedir claro y con contexto",
        "Revisar lo que responde",
        "Cuidar mis datos",
        "Decir que usé IA",
      ] },
      { tipo: "historia", lineas: [
        "¡LO LOGRASTE! 🎉🎉🎉 Siete mundos, siete llaves. Eres un Maestro de la IA.",
        "Bit empezó sin saber nada y hoy sabe todo esto gracias a ti. 🤖💙",
        "Puedes volver a jugar cualquier lección para ganar más estrellas y vestir a Bit. ¡Gracias por jugar IAventura!",
      ], fin: "Ver mis premios", animo: "wow" },
    ],
  },
];
