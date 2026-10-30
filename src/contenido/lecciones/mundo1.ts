import type { Leccion } from "@/lib/tipos";

// Mundo 1 · Isla Chispa: qué es la IA, algoritmos, robots, asistentes, prompts y alucinaciones.
export const MUNDO1: Leccion[] = [
  {
    id: "m1-l1", mundo: 1, nombre: "Conoce a Bit",
    pasos: [
      { tipo: "historia", lineas: [
        "¡Bip bip! Hola… acabo de despertar y no sé casi nada. 😳",
        "Me llamo Bit. Soy una inteligencia artificial y aprendo de lo que me enseñan.",
        "¿Me ayudas? Tú vas a ser mi maestro. ¡Vamos a jugar!",
      ], fin: "¡Sí, te ayudo!" },
      { tipo: "iaono", si: "Es IA", no: "No es IA", items: [
        { em: "🧮", t: "Una calculadora", ia: false, por: "Solo sigue reglas fijas: 2 + 2 siempre da 4. No aprende nada nuevo." },
        { em: "🎬", t: "La app que te recomienda videos", ia: true, por: "Aprende qué te gusta viendo los videos que miras." },
        { em: "🔦", t: "Una linterna", ia: false, por: "Prende y apaga. No piensa ni aprende." },
        { em: "🗣️", t: "Un asistente que entiende tu voz", ia: true, por: "Aprendió a entender palabras escuchando muchísimas voces." },
        { em: "📸", t: "Una cámara que encuentra caras", ia: true, por: "Vio miles de fotos de caras hasta aprender cómo es una." },
      ] },
      { tipo: "carta", id: "ia" },
      { tipo: "orden", intro: "¡Quiero escribirte un cuento! Pero dime bien qué quieres. Elige una opción de cada grupo.",
        filas: [
          { q: "¿Sobre quién es el cuento?", ops: ["algo", "un perro", "Pipo, un perro astronauta"] },
          { q: "¿Para quién es?", ops: ["para nadie en especial", "para un niño", "para mi hermanita de 8 años"] },
          { q: "¿Cómo lo quieres?", ops: ["como sea", "cortito", "cortito, chistoso y con final feliz"] },
        ],
        respuestas: [
          "Había una vez… algo. Y ese algo hizo cosas. Fin.",
          "Había una vez un perro que vivía en una casa. Un día ladró. Fin.",
          "Pipo, el perro astronauta, se puso su casco y despegó hacia la Luna para buscar el hueso más grande del universo.",
        ],
        extraBien: " ¡Lo encontró y era de queso lunar! Regresó a casa y lo compartió con todos sus amigos. 🚀🦴",
        extraMal: " Luego pasó otra cosa. Y otra. Y otra más. Y otra…",
      },
      { tipo: "carta", id: "prompt" },
      { tipo: "verdad", items: [
        { t: "Los pulpos tienen tres corazones.", v: true, por: "¡Es verdad! Dos bombean sangre a las branquias y uno al resto del cuerpo." },
        { t: "La Luna está hecha de queso.", v: false, por: "Me lo inventé. Cuando una IA dice algo falso muy segura, se llama alucinación." },
        { t: "El Sol es una estrella.", v: true, por: "¡Correcto! Es la estrella más cercana a la Tierra." },
        { t: "Los perros vuelan si comen muchas zanahorias.", v: false, por: "¡Otro invento mío! Por eso siempre revisa lo que dice una IA." },
      ] },
      { tipo: "carta", id: "alucina" },
      { tipo: "historia", lineas: [
        "¡Wow! Hoy me enseñaste qué es una IA, a darme buenas órdenes y a no creerme todo.",
        "¡Gracias, maestro! Nos vemos en la siguiente lección.",
      ], fin: "Ver mis premios", animo: "wow" },
    ],
  },
  {
    id: "m1-l2", mundo: 1, nombre: "Recetas para máquinas",
    pasos: [
      { tipo: "historia", lineas: [
        "Oye… ¿cómo sabe una computadora qué hacer? 🤔",
        "¡Ya me acordé! Sigue una lista de pasos, como una receta de cocina. ¿Me ayudas a ordenarla?",
      ], fin: "¡Vamos!", animo: "piensa" },
      { tipo: "pasos", intro: "Quiero lavarme los dientes. Toca los pasos en el orden correcto.", pasos: [
        "Tomar el cepillo",
        "Ponerle pasta",
        "Cepillar arriba y abajo",
        "Enjuagarme la boca",
        "Guardar el cepillo",
      ] },
      { tipo: "carta", id: "algoritmo" },
      { tipo: "duelo", orden: "Bit, hazme un sándwich.", a: "1. Abre el pan. 2. Pon jamón y queso. 3. Cierra el pan. 4. Sírvelo en un plato.", b: "Hazlo rico y ya.", mejor: "a", por: "Una máquina necesita pasos claros y en orden. 'Hazlo rico y ya' no le dice qué hacer." },
      { tipo: "iaono", pregunta: "¿Esto solo sigue su receta o aprende cosas nuevas?", si: "Aprende", no: "Solo receta", items: [
        { em: "⏰", t: "Un despertador", ia: false, por: "Suena a la hora que le pones. Siempre igual, no aprende." },
        { em: "⌨️", t: "El teclado que adivina tu siguiente palabra", ia: true, por: "Aprende de cómo escribes tú y de lo que escribe mucha gente." },
        { em: "🚦", t: "Un semáforo con tiempo fijo", ia: false, por: "Cambia de color cada cierto tiempo, siempre con la misma receta." },
        { em: "🗺️", t: "El mapa que te dice por dónde hay menos tráfico", ia: true, por: "Aprende de millones de viajes para adivinar por dónde llegas más rápido." },
      ] },
      { tipo: "historia", lineas: [
        "Entonces todas las computadoras siguen algoritmos (recetas)…",
        "…¡pero una IA puede aprender a mejorar su receta con ejemplos! Eso es lo especial. ✨",
      ], fin: "Ver mis premios", animo: "wow" },
    ],
  },
  {
    id: "m1-l3", mundo: 1, nombre: "¿Robot o IA?",
    pasos: [
      { tipo: "historia", lineas: [
        "Mucha gente cree que toda IA es un robot como yo. 🤖",
        "¡Pero no! La mayoría de las IA no tienen cuerpo: viven dentro de celulares y computadoras.",
      ], fin: "¿En serio?", animo: "feliz" },
      { tipo: "iaono", pregunta: "¿Esto es un robot (tiene cuerpo y se mueve)?", si: "Es robot", no: "No es robot", items: [
        { em: "🧹", t: "Una aspiradora que limpia sola la casa", ia: true, por: "Sí: tiene cuerpo, se mueve y además usa IA para no chocar con los muebles." },
        { em: "💬", t: "Un chat que contesta preguntas", ia: false, por: "No tiene cuerpo. Es una IA que vive en una computadora." },
        { em: "🏭", t: "Un brazo que arma coches en una fábrica", ia: true, por: "Sí es robot. Muchos solo repiten el mismo movimiento, sin IA." },
        { em: "🌐", t: "Una app que traduce idiomas", ia: false, por: "No es robot, pero sí es IA: aprendió con millones de textos." },
      ] },
      { tipo: "carta", id: "robot" },
      { tipo: "verdad", items: [
        { t: "Todas las IA tienen brazos y piernas.", v: false, por: "Me inventé eso. Casi todas viven dentro de computadoras." },
        { t: "Un robot puede funcionar sin inteligencia artificial.", v: true, por: "¡Sí! Muchos robots solo siguen pasos fijos." },
        { t: "Hay robots que ayudan a los doctores en operaciones.", v: true, por: "Cierto. Los mueve un doctor y son muy precisos." },
      ] },
      { tipo: "duelo", orden: "¿Qué es una IA?", a: "Un robot de metal que habla.", b: "Un programa que aprende de ejemplos; puede estar en un robot o en un celular.", mejor: "b", por: "La IA es el 'cerebro' que aprende. Puede tener cuerpo de robot o no tener cuerpo." },
      { tipo: "historia", lineas: ["Robot = cuerpo. IA = cerebro que aprende. ¡Y yo tengo los dos! 😎"], fin: "Ver mis premios", animo: "wow" },
    ],
  },
  {
    id: "m1-l4", mundo: 1, nombre: "Asistentes que escuchan",
    pasos: [
      { tipo: "historia", lineas: [
        "¿Conoces a los asistentes de voz? Les hablas y te responden. 🗣️",
        "Son útiles, pero hay que saber qué decirles… y qué NO decirles.",
      ], fin: "¡Enséñame!", animo: "feliz" },
      { tipo: "orden", intro: "Vamos a pedirle una canción al asistente. Elige cómo se lo pides.",
        filas: [
          { q: "¿Qué quieres?", ops: ["música", "una canción", "la canción de cumpleaños"] },
          { q: "¿Para quién?", ops: ["para alguien", "para mi familia", "para mi abuelita que cumple 70"] },
          { q: "¿Cómo?", ops: ["como sea", "fuerte", "fuerte y en español"] },
        ],
        respuestas: [
          "Poniendo… música electrónica de las 3 de la mañana. 🎛️ ¿Era eso?",
          "Poniendo una canción al azar. Ojalá te guste. 🎵",
          "Poniendo 'Las Mañanitas' 🎂 ¡Feliz cumpleaños!",
        ],
        extraBien: " En español y a todo volumen para que la abuelita la escuche. 🔊",
        extraMal: " Volumen: bajito, porque no me dijiste.",
      },
      { tipo: "carta", id: "asistente" },
      { tipo: "secretos", intro: "¿Se lo puedes decir a un asistente o a cualquier IA? Toca SOLO lo que es seguro contar.", items: [
        { em: "🦖", t: "Que te gustan los dinosaurios", ok: true, por: "Contar lo que te gusta es seguro." },
        { em: "🔑", t: "La contraseña de la tablet", ok: false, por: "Las contraseñas no se le dicen a nadie, ni a una IA." },
        { em: "🏠", t: "Tu dirección completa", ok: false, por: "Dónde vives es un dato privado." },
        { em: "🎨", t: "Tu color favorito", ok: true, por: "No pasa nada por contarlo." },
        { em: "🏫", t: "El nombre de tu escuela y tu salón", ok: false, por: "Con eso alguien podría encontrarte. Es privado." },
        { em: "🍕", t: "Que quieres una receta de pizza", ok: true, por: "¡Perfecto para pedirle a una IA!" },
      ] },
      { tipo: "verdad", items: [
        { t: "Un asistente de voz puede equivocarse al entender lo que dices.", v: true, por: "Sí. Por eso conviene hablar claro y revisar lo que hizo." },
        { t: "Los asistentes de voz siempre tienen la razón.", v: false, por: "¡Invento! Pueden equivocarse como cualquier IA." },
      ] },
      { tipo: "historia", lineas: ["Pide claro, cuida tus secretos y revisa lo que hace. ¡Ya eres experto en asistentes!"], fin: "Ver mis premios", animo: "wow" },
    ],
  },
  {
    id: "m1-l5", mundo: 1, nombre: "Jefe de la isla",
    mision: "Con un adulto, pídele a una IA un cuento sobre tu mascota o tu juguete favorito. Primero con una orden cortita… y luego con 3 detalles más. ¿Cuál quedó mejor y por qué?",
    pasos: [
      { tipo: "historia", lineas: [
        "¡Llegó el reto del jefe de la Isla Chispa! 👑",
        "Va a mezclar todo lo que aprendiste. ¿Listo?",
      ], fin: "¡Listo!", animo: "wow" },
      { tipo: "iaono", si: "Es IA", no: "No es IA", items: [
        { em: "📺", t: "Una tele que solo cambia de canal", ia: false, por: "Solo obedece al control, no aprende." },
        { em: "📷", t: "Un filtro que te pone orejas de gato en la cara", ia: true, por: "Usa IA para encontrar tu cara y seguirla." },
        { em: "🎮", t: "Un videojuego donde los enemigos aprenden cómo juegas", ia: true, por: "Si aprenden de ti, ¡usan IA!" },
      ] },
      { tipo: "pasos", intro: "Ordena los pasos para pedirle algo bien a una IA.", pasos: [
        "Pensar qué quiero",
        "Escribir la orden con detalles",
        "Leer la respuesta",
        "Revisar si es verdad",
        "Pedir que lo mejore",
      ] },
      { tipo: "verdad", items: [
        { t: "Los gatos pueden ver en total oscuridad.", v: false, por: "Me lo inventé: ven muy bien con poca luz, pero en oscuridad total no." },
        { t: "La IA aprende de ejemplos.", v: true, por: "¡Exacto! Eso la hace diferente de una calculadora." },
        { t: "Un algoritmo es como una receta.", v: true, por: "¡Sí! Una lista de pasos." },
      ] },
      { tipo: "duelo", orden: "Ayúdame con mi tarea de los planetas.", a: "Escríbeme la tarea completa para entregarla.", b: "Explícame los planetas como si tuviera 8 años y hazme 3 preguntas para practicar.", mejor: "b", por: "La IA es mejor como tutor que te ayuda a aprender, no para copiar la tarea." },
      { tipo: "historia", lineas: ["¡GANASTE! Eres el maestro de la Isla Chispa. 🏝️👑", "Ahora vamos al Bosque de los Datos…"], fin: "Ver mis premios", animo: "wow" },
    ],
  },
];
