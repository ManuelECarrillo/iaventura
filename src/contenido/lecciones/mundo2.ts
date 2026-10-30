import type { Leccion } from "@/lib/tipos";

// Mundo 2 · Bosque de los Datos: datos, entrenar, etiquetas, patrones, modelo y sesgo.
export const MUNDO2: Leccion[] = [
  {
    id: "m2-l1", mundo: 2, nombre: "De qué están hechas las IA",
    pasos: [
      { tipo: "historia", lineas: [
        "¡Bienvenido al Bosque de los Datos! 🌳",
        "Aquí viven muchos animales… y yo no sé distinguirlos. ¿Me enseñas?",
      ], fin: "¡Te enseño!", animo: "piensa" },
      { tipo: "entrena", concepto: "ANIMAL", minimo: 4,
        fichas: [
          { em: "🐶", si: true, nombre: "perro", art: "el" },
          { em: "🚗", si: false, nombre: "coche", art: "el" },
          { em: "🐱", si: true, nombre: "gato", art: "el" },
          { em: "🍕", si: false, nombre: "pizza", art: "la" },
          { em: "⚽", si: false, nombre: "balón", art: "el" },
          { em: "🐸", si: true, nombre: "rana", art: "la" },
          { em: "🌵", si: false, nombre: "cactus", art: "el" },
          { em: "🦜", si: true, nombre: "perico", art: "el" },
        ],
        prueba: { em: "🐢", nombre: "tortuga" },
      },
      { tipo: "carta", id: "datos" },
      { tipo: "verdad", items: [
        { t: "Para aprender a reconocer gatos, una IA tiene que ver muchas fotos de gatos.", v: true, por: "¡Sí! Miles de ejemplos." },
        { t: "Con ver una sola foto, la IA ya reconoce cualquier gato.", v: false, por: "Me lo inventé. Con un solo ejemplo casi no aprende." },
      ] },
      { tipo: "carta", id: "entrenar" },
      { tipo: "historia", lineas: ["Datos = ejemplos. Entrenar = enseñar con esos ejemplos. ¡Ya lo entendí gracias a ti!"], fin: "Ver mis premios", animo: "wow" },
    ],
  },
  {
    id: "m2-l2", mundo: 2, nombre: "Ponle nombre a todo",
    pasos: [
      { tipo: "historia", lineas: [
        "Para aprender, cada ejemplo necesita su nombre: esto es 'perro', esto es 'manzana'.",
        "A ese nombre se le llama etiqueta. 🏷️ ¡Ayúdame a revisar las mías!",
      ], fin: "¡Va!", animo: "feliz" },
      { tipo: "iaono", pregunta: "¿Esta etiqueta está bien puesta?", si: "Bien", no: "Mal", items: [
        { em: "🍎", t: "🍎 → 'manzana'", ia: true, por: "¡Correcto! Es una manzana." },
        { em: "🐶", t: "🐶 → 'gato'", ia: false, por: "¡Mal! Si le enseño eso a una IA, va a confundir perros con gatos." },
        { em: "🌙", t: "🌙 → 'luna'", ia: true, por: "¡Bien etiquetado!" },
        { em: "🍌", t: "🍌 → 'zanahoria'", ia: false, por: "Es un plátano. Una etiqueta mala enseña mal." },
      ] },
      { tipo: "carta", id: "etiqueta" },
      { tipo: "entrena", concepto: "FRUTA", minimo: 4,
        fichas: [
          { em: "🍓", si: true, nombre: "fresa", art: "la" },
          { em: "🥕", si: false, nombre: "zanahoria", art: "la" },
          { em: "🍉", si: true, nombre: "sandía", art: "la" },
          { em: "🧀", si: false, nombre: "queso", art: "el" },
          { em: "🍇", si: true, nombre: "uva", art: "la" },
          { em: "🥖", si: false, nombre: "pan", art: "el" },
          { em: "🍍", si: true, nombre: "piña", art: "la" },
          { em: "🥦", si: false, nombre: "brócoli", art: "el" },
        ],
        prueba: { em: "🥭", nombre: "mango" },
      },
      { tipo: "duelo", orden: "¿Cuál grupo de fotos sirve más para enseñar qué es un perro?", a: "3 fotos de perros, todas iguales.", b: "300 fotos de perros: chicos, grandes, de colores y en lugares distintos.", mejor: "b", por: "Muchos ejemplos y variados = la IA aprende mejor." },
      { tipo: "historia", lineas: ["Buenos datos = muchos, variados y bien etiquetados. ¡Anotado! 📝"], fin: "Ver mis premios", animo: "wow" },
    ],
  },
  {
    id: "m2-l3", mundo: 2, nombre: "Cazadores de patrones",
    pasos: [
      { tipo: "historia", lineas: [
        "¿Sabes cómo adivino las cosas? Busco lo que se repite en los ejemplos.",
        "Eso se llama patrón. 🧩 Vamos a cazar uno.",
      ], fin: "¡A cazar!", animo: "piensa" },
      { tipo: "entrena", concepto: "COSA REDONDA", minimo: 4,
        fichas: [
          { em: "⚽", si: true, nombre: "balón", art: "el" },
          { em: "📦", si: false, nombre: "caja", art: "la" },
          { em: "🍊", si: true, nombre: "naranja", art: "la" },
          { em: "📏", si: false, nombre: "regla", art: "la" },
          { em: "🌕", si: true, nombre: "luna llena", art: "la" },
          { em: "📱", si: false, nombre: "celular", art: "el" },
          { em: "🍩", si: true, nombre: "dona", art: "la" },
          { em: "🔺", si: false, nombre: "triángulo", art: "el" },
        ],
        prueba: { em: "🏀", nombre: "pelota de básquet" },
      },
      { tipo: "carta", id: "patron" },
      { tipo: "verdad", items: [
        { t: "La IA de tu teclado aprende el patrón de las palabras que más usas.", v: true, por: "¡Sí! Por eso te sugiere tus palabras." },
        { t: "Si una IA ve un patrón, siempre acierta.", v: false, por: "¡Invento! Los patrones ayudan, pero a veces fallan." },
      ] },
      { tipo: "pasos", intro: "Así se hace una IA. Ordena los pasos.", pasos: [
        "Juntar muchos ejemplos",
        "Ponerles etiqueta",
        "Entrenar a la IA",
        "Probarla con ejemplos nuevos",
      ] },
      { tipo: "carta", id: "modelo" },
      { tipo: "historia", lineas: ["Lo que aprendo se guarda en mi modelo, como mi cerebrito. 📦🧠"], fin: "Ver mis premios", animo: "wow" },
    ],
  },
  {
    id: "m2-l4", mundo: 2, nombre: "Datos chuecos",
    pasos: [
      { tipo: "historia", lineas: [
        "Ayer alguien me entrenó a escondidas… y creo que aprendí algo mal. 😬",
        "¿Me ayudas a descubrir qué pasó?",
      ], fin: "¡Detective activado!", animo: "ups" },
      { tipo: "chuecos", intro: "Alguien me enseñó qué es un PERRO solo con estas fotos:", concepto: "PERRO",
        ejemplos: [
          { em: "🐕", nombre: "perro café" },
          { em: "🐕", nombre: "perro café" },
          { em: "🐕", nombre: "perro café" },
          { em: "🐕", nombre: "perro café" },
        ],
        prueba: { em: "🐩", nombre: "un poodle blanco" },
        respuestaBit: "Eso NO es un perro. Los perros son cafés y grandes. 🙅",
        pregunta: "¿Por qué se equivocó Bit?",
        opciones: [
          { t: "Porque solo vio perros cafés y grandes", ok: true, por: "¡Exacto! Sus datos estaban incompletos, así que aprendió algo injusto." },
          { t: "Porque Bit es tonto", ok: false, por: "No es eso: Bit aprende lo que le enseñan. El problema fueron los datos." },
          { t: "Porque el poodle no es perro", ok: false, por: "¡Sí es perro! El problema es que Bit nunca vio uno así." },
        ],
      },
      { tipo: "carta", id: "sesgo" },
      { tipo: "duelo", orden: "¿Cómo arreglamos a Bit?", a: "Enseñarle perros de todos los colores, tamaños y razas.", b: "Enseñarle más perros cafés.", mejor: "a", por: "Para quitar el sesgo, los datos tienen que tener de todo." },
      { tipo: "verdad", items: [
        { t: "Si una IA de fotos solo aprendió con caras de un tipo de personas, puede fallar con otras.", v: true, por: "Sí pasa en la vida real. Por eso importan datos variados." },
        { t: "Las IA nunca son injustas.", v: false, por: "¡Invento! Pueden serlo si sus datos están chuecos." },
      ] },
      { tipo: "historia", lineas: ["Datos chuecos → IA chueca. ¡Gracias por arreglarme, detective! 🕵️"], fin: "Ver mis premios", animo: "wow" },
    ],
  },
  {
    id: "m2-l5", mundo: 2, nombre: "Jefe del bosque",
    mision: "Con un adulto, abran la galería de fotos del celular y busquen 'perro' o 'playa' (en muchos celulares funciona). ¡La IA del celular aprendió a reconocerlo con datos! ¿Encontró todas? ¿Se equivocó con alguna?",
    pasos: [
      { tipo: "historia", lineas: ["¡El jefe del Bosque de los Datos te reta! 👑🌳", "Usa todo lo que sabes."], fin: "¡Acepto!", animo: "wow" },
      { tipo: "entrena", concepto: "COSA QUE VUELA", minimo: 4,
        fichas: [
          { em: "✈️", si: true, nombre: "avión", art: "el" },
          { em: "🐟", si: false, nombre: "pez", art: "el" },
          { em: "🦋", si: true, nombre: "mariposa", art: "la" },
          { em: "🚲", si: false, nombre: "bici", art: "la" },
          { em: "🎈", si: true, nombre: "globo", art: "el" },
          { em: "🐌", si: false, nombre: "caracol", art: "el" },
          { em: "🦅", si: true, nombre: "águila", art: "el" },
          { em: "🪨", si: false, nombre: "piedra", art: "la" },
        ],
        prueba: { em: "🚁", nombre: "helicóptero" },
      },
      { tipo: "iaono", pregunta: "¿Estos datos sirven para entrenar bien a una IA?", si: "Sirven", no: "Están chuecos", items: [
        { em: "🍎", t: "1,000 fotos de manzanas rojas, verdes y amarillas", ia: true, por: "¡Muchos y variados!" },
        { em: "🐱", t: "Fotos de gatos con la etiqueta 'perro'", ia: false, por: "Etiquetas mal puestas = la IA aprende mal." },
        { em: "🌧️", t: "Solo fotos de días de lluvia para aprender el clima", ia: false, por: "Le falta ver días de sol: tendría sesgo." },
      ] },
      { tipo: "pasos", intro: "Ordena cómo se entrena una IA.", pasos: [
        "Juntar ejemplos variados",
        "Etiquetar cada ejemplo",
        "Entrenar el modelo",
        "Probarlo con algo nuevo",
        "Corregir si se equivoca",
      ] },
      { tipo: "verdad", items: [
        { t: "Un modelo es lo que la IA aprendió.", v: true, por: "¡Correcto!" },
        { t: "El sesgo hace a la IA más justa.", v: false, por: "¡Al revés! El sesgo la hace injusta." },
      ] },
      { tipo: "historia", lineas: ["¡VENCISTE al jefe del bosque! 🏆", "Eres oficialmente Entrenador de IA nivel 2."], fin: "Ver mis premios", animo: "wow" },
    ],
  },
];
