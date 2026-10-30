import type { Leccion } from "@/lib/tipos";

// Mundo 4 · Pantano de los Espejismos: la IA se puede equivocar. Revisar, buscar la fuente, detectar fotos y noticias falsas.
export const MUNDO4: Leccion[] = [
  {
    id: "m4-l1", mundo: 4, nombre: "¿Verdad o invento?",
    pasos: [
      { tipo: "historia", lineas: [
        "Llegamos al Pantano de los Espejismos 🌫️. Aquí la niebla hace que las cosas parezcan lo que no son.",
        "Las IA a veces hacen lo mismo: dicen algo falso con mucha seguridad. A eso se le llama ALUCINAR.",
        "Tu misión: aprender a no tragarte todo lo que dice una IA. ¡Vamos!",
      ], fin: "¡Vamos!", animo: "piensa" },
      { tipo: "iaono", pregunta: "Una IA te dice esto. ¿Suena a invento?", si: "Suena a invento", no: "Suena cierto", items: [
        { em: "🐶", t: "Los perros tienen siete patas.", ia: true, por: "¡Tú sabes que no! La IA lo dijo muy segura, pero es falso." },
        { em: "☀️", t: "El Sol es una estrella.", ia: false, por: "Cierto. Pero aun así, si es importante, se revisa." },
        { em: "🦖", t: "Los dinosaurios vivieron junto a los teléfonos celulares.", ia: true, por: "Invento total. ¡Los celulares llegaron millones de años después!" },
        { em: "🌧️", t: "La lluvia es agua que cae de las nubes.", ia: false, por: "Cierto. Lo puedes ver tú mismo cualquier día de lluvia." },
      ] },
      { tipo: "verdad", items: [
        { t: "Si una IA lo dice muy segura, entonces es verdad.", v: false, por: "¡Invento! Las IA dicen cosas falsas con la misma seguridad que las ciertas." },
        { t: "Cuando algo importa, lo que dice la IA se revisa en otro lado.", v: true, por: "¡Exacto! Revisar es el superpoder de este mundo." },
      ] },
      { tipo: "carta", id: "verificar" },
      { tipo: "duelo", orden: "Le pregunté a la IA cuánto pesa un elefante. ¿Qué hago con la respuesta?", a: "Me la creo y la pongo en mi tarea.", b: "La comparo con un libro o una página de ciencia antes de usarla.", mejor: "b", por: "Comparar con una fuente confiable es revisar. Así no pones un invento en tu tarea." },
      { tipo: "historia", lineas: ["Regla del pantano: la IA ayuda, pero tú REVISAS. ¡Primera llave del pantano! 🔑"], fin: "Ver mis premios", animo: "wow" },
    ],
  },
  {
    id: "m4-l2", mundo: 4, nombre: "Busca la fuente",
    pasos: [
      { tipo: "historia", lineas: [
        "Bit encontró un letrero en el pantano: 'Los sapos vuelan de noche'. 🐸✈️",
        "¿Quién lo escribió? ¿De dónde lo sacó? Eso es la FUENTE: el lugar de donde viene una información.",
      ], fin: "¿Cómo lo reviso?", animo: "piensa" },
      { tipo: "iaono", pregunta: "¿Es una buena fuente para revisar un dato?", si: "Buena fuente", no: "No confío", items: [
        { em: "📗", t: "Un libro de ciencias de la biblioteca", ia: true, por: "¡Sí! Lo escribieron expertos y lo revisaron antes de publicarlo." },
        { em: "🎉", t: "Lo dijo alguien en una fiesta", ia: false, por: "Puede ser broma o un error. No es una fuente." },
        { em: "🚀", t: "La página oficial de la NASA", ia: true, por: "¡Sí! Es la organización que de verdad va al espacio." },
        { em: "📱", t: "Un video de alguien gritando que es cierto", ia: false, por: "Gritar no lo hace cierto. ¿Quién es? ¿De dónde lo sacó?" },
        { em: "🏫", t: "Tu maestra o un adulto de confianza", ia: true, por: "¡Sí! Y si no sabe, te ayuda a buscar." },
      ] },
      { tipo: "carta", id: "fuente" },
      { tipo: "pasos", intro: "La IA te dio un dato raro. Ordena cómo lo revisas.", pasos: [
        "Leer bien lo que dijo la IA",
        "Preguntar: ¿de dónde lo sacó?",
        "Buscar en una fuente confiable",
        "Comparar las dos respuestas",
        "Decidir si es cierto o invento",
      ] },
      { tipo: "verdad", items: [
        { t: "Una buena fuente se puede revisar: sabes quién la escribió.", v: true, por: "¡Sí! Si no sabes quién lo dice, desconfía." },
        { t: "Si lo dice internet, es verdad.", v: false, por: "¡Invento! En internet cualquiera puede escribir cualquier cosa." },
      ] },
      { tipo: "historia", lineas: ["Bit revisó: los sapos NO vuelan. El letrero era una broma de la niebla. 🐸 ¡Segunda llave! 🔑"], fin: "Ver mis premios", animo: "feliz" },
    ],
  },
  {
    id: "m4-l3", mundo: 4, nombre: "Fotos que mienten",
    pasos: [
      { tipo: "historia", lineas: [
        "En el pantano hay espejos que muestran cosas que no existen. 🪞",
        "Hoy las IA pueden hacer fotos y videos falsos que parecen reales. Se llaman DEEPFAKES.",
        "Pero dejan pistas. ¡Vamos a aprender a encontrarlas!",
      ], fin: "Enséñame las pistas", animo: "wow" },
      { tipo: "iaono", pregunta: "¿Esta foto o video puede ser trampa hecha con IA?", si: "Puede ser trampa", no: "Parece real", items: [
        { em: "🖐️", t: "Una persona con 7 dedos en una mano", ia: true, por: "¡Pista clásica! A las IA se les complican las manos." },
        { em: "🎂", t: "La foto de tu cumpleaños que tomó tu mamá", ia: false, por: "Tú estuviste ahí. Sabes de dónde salió." },
        { em: "🗣️", t: "Un video donde la boca no se mueve igual que la voz", ia: true, por: "Cuando la boca y la voz no cuadran, sospecha." },
        { em: "🐘", t: "Un elefante volando sobre tu escuela", ia: true, por: "Imposible en la vida real. Si parece imposible, probablemente es IA." },
        { em: "🐕", t: "Tu perro dormido en el sillón, foto que tomaste tú", ia: false, por: "Tú la tomaste. Es real." },
      ] },
      { tipo: "carta", id: "deepfake" },
      { tipo: "verdad", items: [
        { t: "Si veo un video, seguro pasó de verdad.", v: false, por: "¡Invento! Hoy se pueden hacer videos falsos muy reales." },
        { t: "Las manos raras, letras chuecas y bocas que no cuadran son pistas de IA.", v: true, por: "¡Sí! Esas son las pistas del detective." },
        { t: "Si una foto me asusta o me enoja mucho, mejor la reviso antes de creerla.", v: true, por: "¡Exacto! Las falsas se hacen para causar emociones fuertes." },
      ] },
      { tipo: "duelo", orden: "Me mandaron un video de un famoso diciendo algo muy raro. ¿Qué hago?", a: "Lo mando a todos mis amigos ahorita mismo.", b: "Busco si alguna noticia confiable lo dice y le pregunto a un adulto.", mejor: "b", por: "Compartir sin revisar riega los espejismos. Revisar los apaga." },
      { tipo: "historia", lineas: ["Ya sabes ver a través de los espejos. ¡Tercera llave! 🔑"], fin: "Ver mis premios", animo: "wow" },
    ],
  },
  {
    id: "m4-l4", mundo: 4, nombre: "Noticias falsas",
    pasos: [
      { tipo: "historia", lineas: [
        "¡Extra, extra! 📰 En el pantano circula una noticia: 'Mañana no hay escuela en todo el país'.",
        "Suena increíble… y eso es justo la pista. Las NOTICIAS FALSAS se hacen para que las compartas rápido sin pensar.",
      ], fin: "¿Cómo la descubro?", animo: "piensa" },
      { tipo: "iaono", pregunta: "¿Qué hago con esta noticia?", si: "La reviso primero", no: "Es confiable", items: [
        { em: "😱", t: "'¡¡¡NO VAS A CREER ESTO!!!' y no dice quién lo escribió", ia: true, por: "Muchos signos, nadie firma. Pista de noticia falsa." },
        { em: "📰", t: "Un periódico conocido, con fecha y nombre de quien escribe", ia: false, por: "Tiene fuente clara. Aun así, se puede comparar con otro." },
        { em: "🍫", t: "'Científicos dicen que el chocolate cura todo'", ia: true, por: "¿Cuáles científicos? Si suena demasiado bueno, revisa." },
        { em: "🏫", t: "Un aviso de tu escuela con sello y firma de la directora", ia: false, por: "Viene directo de la fuente. Confiable." },
      ] },
      { tipo: "carta", id: "fake" },
      { tipo: "pasos", intro: "Antes de compartir una noticia. Ordena los pasos.", pasos: [
        "Leer la noticia completa, no solo el título",
        "Ver quién la publica y cuándo",
        "Buscar si otras fuentes dicen lo mismo",
        "Preguntarle a un adulto si hay duda",
        "Solo entonces, compartir",
      ] },
      { tipo: "verdad", items: [
        { t: "Un título con MAYÚSCULAS y muchos ¡¡¡!!! quiere que compartas sin pensar.", v: true, por: "¡Sí! Esa es la trampa." },
        { t: "Si mis amigos ya la compartieron, entonces es cierta.", v: false, por: "¡Invento! Que muchos la compartan no la hace verdad." },
      ] },
      { tipo: "historia", lineas: ["Bit buscó: la escuela sí abre mañana. 😅 La noticia era falsa. ¡Cuarta llave! 🔑"], fin: "Ver mis premios", animo: "feliz" },
    ],
  },
  {
    id: "m4-l5", mundo: 4, nombre: "Jefe del pantano",
    mision: "Con un adulto, pídele a una IA un dato curioso de un animal. Luego búsquenlo juntos en un libro o una página confiable. ¿Era cierto?",
    pasos: [
      { tipo: "historia", lineas: [
        "¡El Señor de la Niebla apareció! 🌫️👁️ Quiere llenar el pantano de inventos.",
        "Solo un detective que revisa todo puede vencerlo. ¡Demuestra lo que aprendiste!",
      ], fin: "¡A vencerlo!", animo: "wow" },
      { tipo: "iaono", pregunta: "¿Qué hace un buen detective?", si: "Buen detective", no: "Cayó en la trampa", items: [
        { em: "🔍", t: "Compara lo que dice la IA con un libro", ia: true, por: "¡Revisar! Eso es." },
        { em: "📤", t: "Comparte una foto increíble sin preguntarse de dónde salió", ia: false, por: "Cayó en el espejismo. Primero se revisa." },
        { em: "🙋", t: "Le pregunta a un adulto cuando algo suena raro", ia: true, por: "¡Sí! Pedir ayuda es de detectives." },
        { em: "🖐️", t: "Nota que la mano de la foto tiene 6 dedos y sospecha", ia: true, por: "¡Ojo de detective!" },
        { em: "💬", t: "Cree todo porque la IA lo dijo muy segura", ia: false, por: "La seguridad no es prueba." },
      ] },
      { tipo: "verdad", items: [
        { t: "Las IA pueden alucinar: decir inventos como si fueran ciertos.", v: true, por: "¡Sí!" },
        { t: "Una buena fuente es una que se puede revisar.", v: true, por: "¡Correcto!" },
        { t: "Un video siempre demuestra que algo pasó.", v: false, por: "¡Invento! Existen los deepfakes." },
        { t: "Si una noticia me da mucha emoción, hay que compartirla rápido.", v: false, por: "¡Al revés! Entre más emoción, más hay que revisar." },
      ] },
      { tipo: "duelo", orden: "Quiero datos de tiburones para mi tarea. ¿Cuál orden ayuda más a revisar?", a: "Dime 3 datos de los tiburones.", b: "Dime 3 datos de los tiburones y dime de dónde sacaste cada uno, para poder revisarlos.", mejor: "b", por: "Pedir la fuente te facilita revisar. ¡Detective y buen pedidor a la vez!" },
      { tipo: "pasos", intro: "Último reto: ordena cómo vences a la niebla.", pasos: [
        "Leer con calma",
        "Buscar pistas de invento",
        "Revisar en una fuente confiable",
        "Preguntar a un adulto si hay duda",
        "Decidir qué es cierto",
      ] },
      { tipo: "historia", lineas: [
        "¡La niebla se disipa! 🌤️ El Señor de la Niebla se fue porque ya no puedes ser engañado.",
        "Ganaste la corona del Pantano. 👑 Ahora cuida tus secretos en la Fortaleza Guardiana…",
      ], fin: "Ver mis premios", animo: "wow" },
    ],
  },
];
