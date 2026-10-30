import type { Leccion } from "@/lib/tipos";

// Mundo 3 · Ciudad Prompt: instrucciones claras, contexto, ejemplos, rol e iterar.
export const MUNDO3: Leccion[] = [
  {
    id: "m3-l1", mundo: 3, nombre: "Órdenes claras",
    pasos: [
      { tipo: "historia", lineas: [
        "¡Bienvenido a Ciudad Prompt! 🏙️ Aquí todos le dan órdenes a las IA… y muchas salen mal.",
        "¿Sabes por qué? Porque la gente pide las cosas a medias. ¡Vamos a aprender a pedir bien!",
      ], fin: "¡Vamos!", animo: "wow" },
      { tipo: "iaono", pregunta: "¿Esta orden es clara para una IA?", si: "Clara", no: "Confusa", items: [
        { em: "🖼️", t: "Hazme un dibujo", ia: false, por: "¿De qué? ¿De qué color? ¿Para qué? La IA tiene que adivinar todo." },
        { em: "🐉", t: "Dibuja un dragón verde comiendo helado de fresa, estilo caricatura", ia: true, por: "¡Clarísimo! Qué, cómo y en qué estilo." },
        { em: "📖", t: "Cuéntame algo", ia: false, por: "¿Un chiste? ¿Un cuento? ¿Una noticia? Demasiado abierto." },
        { em: "🦕", t: "Dime 3 datos curiosos de los dinosaurios, cortitos, para un niño de 8 años", ia: true, por: "Dice cuántos, de qué, qué tan largos y para quién. ¡Perfecta!" },
      ] },
      { tipo: "carta", id: "instruccion" },
      { tipo: "orden", intro: "Vamos a pedirle a una IA que dibuje a mi mascota. Elige cómo se lo pides.",
        filas: [
          { q: "¿Qué quieres que dibuje?", ops: ["algo bonito", "un gato", "un gato gris con ojos verdes y una bufanda roja"] },
          { q: "¿En qué estilo?", ops: ["como quieras", "de caricatura", "de caricatura, colorido y alegre"] },
          { q: "¿Dónde está?", ops: ["en cualquier lado", "en una casa", "dormido en una ventana con el sol de la tarde"] },
        ],
        respuestas: [
          "Dibujé… una mancha bonita. Creo. 🟣 No sabía qué querías.",
          "Dibujé un gato. Es gris, café o naranja, no me dijiste. 🐈",
          "¡Dibujé un gato gris de ojos verdes con su bufanda roja! 🐈‍⬛🧣",
        ],
        extraBien: " Está dormido en la ventana y el sol de la tarde lo ilumina. ¡Qué tierno quedó!",
        extraMal: " Lo puse flotando en el espacio, porque no me dijiste dónde.",
      },
      { tipo: "duelo", orden: "Quiero que la IA me ayude con mi lista del súper. ¿Cuál orden es mejor?", a: "Haz una lista.", b: "Haz una lista del súper con 10 cosas para desayunos saludables, separada en frutas, lácteos y pan.", mejor: "b", por: "La B dice cuántas cosas, para qué y cómo ordenarlas. La A deja a la IA adivinando." },
      { tipo: "historia", lineas: ["Regla de oro de Ciudad Prompt: di QUÉ quieres, CÓMO lo quieres y PARA QUÉ. ¡Ya tienes la primera llave! 🔑"], fin: "Ver mis premios", animo: "wow" },
    ],
  },
  {
    id: "m3-l2", mundo: 3, nombre: "Dale contexto",
    pasos: [
      { tipo: "historia", lineas: [
        "La IA no sabe nada de ti: no sabe tu edad, qué te gusta ni para qué quieres las cosas.",
        "Lo que le cuentas antes de pedir se llama contexto. ¡Vamos a probarlo! 🧭",
      ], fin: "¡Va!", animo: "piensa" },
      { tipo: "duelo", orden: "Explícame qué es la gravedad.", a: "Explícame qué es la gravedad. Tengo 8 años, me gustan los videojuegos y es para mi tarea de ciencias.", b: "Explícame qué es la gravedad.", mejor: "a", por: "Con contexto, la IA explica con palabras de niño, usa ejemplos de videojuegos y lo hace del tamaño de una tarea." },
      { tipo: "orden", intro: "Vamos a pedir ideas para una fiesta. Dale contexto a Bit.",
        filas: [
          { q: "¿De quién es la fiesta?", ops: ["de alguien", "de mi hermano", "de mi hermano que cumple 6 y ama los dinosaurios"] },
          { q: "¿Dónde y cuántos?", ops: ["no sé", "en la casa", "en el patio de la casa, 10 niños"] },
          { q: "¿Qué quieres de la IA?", ops: ["ideas", "ideas de juegos", "3 ideas de juegos fáciles y baratos"] },
        ],
        respuestas: [
          "Ideas para una fiesta: globos. Pastel. Fin. 🎈 (No sé de quién ni de qué).",
          "Para la fiesta de tu hermano: pastel, música y juegos. Algo normal, porque no sé qué le gusta.",
          "¡Fiesta de dinosaurios para tu hermano de 6! 🦖 Búsqueda de huevos de dino en el patio, carrera de T-Rex con brazos cortos y pintacaritas de dinosaurio.",
        ],
        extraBien: " Las 3 son fáciles, baratas y para 10 niños en el patio. ¡Rugido de aprobación!",
        extraMal: " No sé cuántas ideas querías, así que te doy 47. Idea 4: un volcán…",
      },
      { tipo: "carta", id: "contexto" },
      { tipo: "verdad", items: [
        { t: "La IA sabe automáticamente cuántos años tienes.", v: false, por: "¡Invento! No sabe nada de ti si no se lo dices." },
        { t: "Decirle 'es para un niño de 8 años' cambia cómo responde la IA.", v: true, por: "¡Sí! Usa palabras más fáciles y ejemplos de tu edad." },
        { t: "Entre más contexto útil le das, mejor responde.", v: true, por: "Correcto. Contexto útil: para quién, para qué y qué ya sabes." },
      ] },
      { tipo: "historia", lineas: ["Contexto = contarle a la IA lo que necesita saber de ti. ¡Segunda llave de la ciudad! 🔑🔑"], fin: "Ver mis premios", animo: "wow" },
    ],
  },
  {
    id: "m3-l3", mundo: 3, nombre: "Enséñale con ejemplos",
    pasos: [
      { tipo: "historia", lineas: [
        "A veces es difícil explicar con palabras cómo quieres algo… ¡pero es fácil mostrarlo! 🎯",
        "Si le das un ejemplo a la IA, copia el estilo. Mira.",
      ], fin: "¡A ver!", animo: "feliz" },
      { tipo: "duelo", orden: "Quiero nombres chistosos para mi pez.", a: "Dame nombres para mi pez.", b: "Dame 5 nombres chistosos para mi pez, como 'Don Burbujas' o 'Aletas Veloz'.", mejor: "b", por: "Con los ejemplos, la IA entiende el estilo que te gusta y propone parecidos." },
      { tipo: "pasos", intro: "Ordena los pasos para pedir con un ejemplo.", pasos: [
        "Pensar qué quiero",
        "Buscar un ejemplo de cómo me gusta",
        "Escribir la orden con el ejemplo",
        "Revisar si la IA copió el estilo",
      ] },
      { tipo: "carta", id: "ejemplo" },
      { tipo: "orden", intro: "Pídele a Bit una adivinanza para tu familia. Dale un ejemplo de cómo te gustan.",
        filas: [
          { q: "¿Qué quieres?", ops: ["algo divertido", "una adivinanza", "una adivinanza cortita que rime"] },
          { q: "¿Sobre qué?", ops: ["de lo que sea", "de animales", "de un animal de la granja"] },
          { q: "¿Un ejemplo de cómo te gustan?", ops: ["ninguno", "como las de la escuela", "como esta: 'Tengo agujas y no sé coser. ¿Quién soy? ¡El erizo!'"] },
        ],
        respuestas: [
          "Aquí va algo divertido: un dato sobre impuestos. 📊 ¿No era eso?",
          "Adivinanza: ¿Qué animal es? Es un animal. Respuesta: un animal. 🤷",
          "Adivinanza: 'Tengo cresta y no soy rey, canto al alba sin saber ley. ¿Quién soy?' ¡El gallo! 🐓",
        ],
        extraBien: " Cortita, rima y del mismo estilo que tu ejemplo. ¡Copié bien!",
        extraMal: " No sé qué estilo te gusta, así que la hice de 14 renglones y sin rima.",
      },
      { tipo: "historia", lineas: ["Un buen ejemplo vale más que mil explicaciones. ¡Tercera llave! 🔑🔑🔑"], fin: "Ver mis premios", animo: "wow" },
    ],
  },
  {
    id: "m3-l4", mundo: 3, nombre: "Dile quién es",
    pasos: [
      { tipo: "historia", lineas: [
        "¿Sabías que puedes decirle a la IA que sea alguien? 'Actúa como una maestra', 'eres un pirata'… 🎭",
        "Eso se llama darle un rol. ¡Y cambia muchísimo cómo responde!",
      ], fin: "¡Quiero probar!", animo: "wow" },
      { tipo: "iaono", pregunta: "¿Este rol ayuda para lo que quiero?", si: "Sí ayuda", no: "No ayuda", items: [
        { em: "🧪", t: "Quiero entender los volcanes → 'Actúa como maestra de ciencias para niños'", ia: true, por: "¡Perfecto! Va a explicar con calma y palabras fáciles." },
        { em: "🏴‍☠️", t: "Quiero sumar fracciones → 'Eres un pirata gruñón'", ia: false, por: "Divertido, pero un pirata gruñón no te ayuda a entender fracciones." },
        { em: "🏋️", t: "Quiero un plan para correr más → 'Actúa como entrenador deportivo de niños'", ia: true, por: "¡Sí! Un entrenador sabe de eso y cuida que sea para tu edad." },
        { em: "🍳", t: "Quiero un cuento de miedo → 'Eres un chef'", ia: false, por: "Un chef te va a hablar de recetas, no de cuentos." },
      ] },
      { tipo: "carta", id: "rol" },
      { tipo: "duelo", orden: "No entiendo las fracciones. ¿Cuál orden le pido a la IA?", a: "Actúa como mi maestra de mates. Explícame las fracciones con pizzas y hazme 2 preguntas fáciles para ver si entendí.", b: "Dime qué son las fracciones.", mejor: "a", por: "La A le da rol (maestra), contexto (con pizzas) e instrucciones claras (2 preguntas). La B solo pide una definición." },
      { tipo: "verdad", items: [
        { t: "Si le dices a la IA 'actúa como doctor', se vuelve doctor de verdad.", v: false, por: "¡Invento! Solo habla como uno. Para cosas de salud, siempre pregunta a un adulto o a un doctor de verdad." },
        { t: "Darle un rol a la IA cambia el tono y las palabras que usa.", v: true, por: "¡Sí! Un rol de 'cuentacuentos' responde muy distinto a uno de 'científico'." },
      ] },
      { tipo: "historia", lineas: ["Rol + contexto + instrucción clara + ejemplo = la receta de un súper prompt. ¡Cuarta llave! 🔑🔑🔑🔑"], fin: "Ver mis premios", animo: "wow" },
    ],
  },
  {
    id: "m3-l5", mundo: 3, nombre: "Jefe de la ciudad",
    mision: "Con un adulto, pídanle a una IA lo mismo dos veces: primero con una orden cortita y luego con rol, contexto y un ejemplo. Lean las dos respuestas. ¿Cuál quedó mejor? Luego díganle 'hazlo más corto' o 'hazlo más chistoso' y miren cómo cambia.",
    pasos: [
      { tipo: "historia", lineas: [
        "¡El jefe de Ciudad Prompt te espera! 👑🏙️",
        "Pero tiene un secreto final: ni el mejor prompt sale perfecto a la primera. Hay que pedir, mirar y volver a pedir.",
      ], fin: "¡Listo!", animo: "wow" },
      { tipo: "pasos", intro: "Ordena cómo se consigue una respuesta buenísima.", pasos: [
        "Escribir un prompt claro con contexto",
        "Leer la respuesta",
        "Decir qué cambiar ('más corto', 'con más chistes')",
        "Leer la nueva respuesta",
        "Repetir hasta que quede bien",
      ] },
      { tipo: "carta", id: "iterar" },
      { tipo: "duelo", orden: "La IA te dio un cuento muy largo y aburrido. ¿Qué haces?", a: "Cierro la app, la IA no sirve.", b: "Le digo: 'hazlo más corto, con un dragón chistoso y un final sorpresa'.", mejor: "b", por: "¡Iterar! Decirle qué cambiar casi siempre arregla la respuesta." },
      { tipo: "orden", intro: "Reto final: arma el súper prompt para tu tarea de los planetas.",
        filas: [
          { q: "¿Quién debe ser la IA?", ops: ["nadie en especial", "alguien que sepa de planetas", "una astrónoma que explica a niños de 8 años"] },
          { q: "¿Qué quieres exactamente?", ops: ["info de planetas", "datos de los planetas", "un dato sorprendente de cada planeta, en una frase"] },
          { q: "¿Cómo lo quieres?", ops: ["normal", "fácil", "fácil, con un emoji por planeta y una pregunta al final para mí"] },
        ],
        respuestas: [
          "Planetas: hay varios. Son grandes. Están lejos. Fin. 🪐",
          "Mercurio es el más cercano al Sol. Venus es caliente. La Tierra es donde vives. Marte es rojo. Júpiter es grande…",
          "¡Hola, pequeño astrónomo! Mercurio: un día ahí dura más que su año. Venus: llueve ácido. Tierra: la única con pizza. Marte: tiene el volcán más alto. Júpiter: su tormenta es más grande que la Tierra. Saturno: flotaría en una alberca gigante. Urano: gira acostado. Neptuno: vientos de 2,000 km/h.",
        ],
        extraBien: " ☿️♀️🌍♂️🪐🪐⛢♆ Y tu pregunta: ¿cuál planeta te gustaría visitar y por qué?",
        extraMal: " (Te lo escribí en 3 páginas porque no me dijiste cómo lo querías).",
      },
      { tipo: "verdad", items: [
        { t: "Un buen prompt tiene qué quiero, para quién y cómo lo quiero.", v: true, por: "¡Exacto! Esa es la receta." },
        { t: "Si la primera respuesta no sirve, ya no se puede mejorar.", v: false, por: "¡Invento! Pides cambios y mejora. Eso es iterar." },
        { t: "Darle un ejemplo a la IA la ayuda a copiar el estilo que te gusta.", v: true, por: "¡Sí! Un ejemplo vale mucho." },
      ] },
      { tipo: "historia", lineas: ["¡GANASTE las 5 llaves de Ciudad Prompt! 🔑🔑🔑🔑🔑 Ya sabes hablarle a cualquier IA.", "Pero cuidado… en el Pantano de los Espejismos las IA dicen cosas que no son… 🌫️"], fin: "Ver mis premios", animo: "wow" },
    ],
  },
];
