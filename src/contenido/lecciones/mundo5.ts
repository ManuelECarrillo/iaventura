import type { Leccion } from "@/lib/tipos";

// Mundo 5 · Fortaleza Guardiana: privacidad, contraseñas, pedir permiso y recordar que un chatbot es un programa.
export const MUNDO5: Leccion[] = [
  {
    id: "m5-l1", mundo: 5, nombre: "Lo que no se cuenta",
    pasos: [
      { tipo: "historia", lineas: [
        "¡Bienvenido a la Fortaleza Guardiana! 🏰 Aquí se cuidan los tesoros más importantes: tus datos.",
        "Hay cosas que se pueden contar a una IA, y otras que NUNCA. A eso se le llama PRIVACIDAD.",
      ], fin: "¡Quiero ser guardián!", animo: "wow" },
      { tipo: "secretos", intro: "Toca SOLO lo que es seguro contarle a una IA.", items: [
        { em: "🦄", t: "Que tu animal favorito es el unicornio", ok: true, por: "Contar lo que te gusta es seguro." },
        { em: "📍", t: "El nombre de tu calle y el número de tu casa", ok: false, por: "Dónde vives es un dato privado. Nunca se da." },
        { em: "📞", t: "El teléfono de tu mamá", ok: false, por: "Los teléfonos de tu familia son privados." },
        { em: "🎵", t: "Que quieres una canción sobre perritos", ok: true, por: "¡Perfecto para pedirle a una IA!" },
        { em: "🗓️", t: "A qué hora sales de la escuela y quién te recoge", ok: false, por: "Con eso alguien sabría dónde encontrarte. Privado." },
        { em: "❓", t: "Por qué el cielo es azul", ok: true, por: "Una pregunta de curiosidad. Seguro." },
      ] },
      { tipo: "carta", id: "privacidad" },
      { tipo: "verdad", items: [
        { t: "Lo que le escribo a una IA se puede guardar en una computadora lejos de mi casa.", v: true, por: "¡Sí! Por eso no se escriben datos privados." },
        { t: "Si la IA me pregunta mi dirección, se la doy porque es una máquina.", v: false, por: "¡Nunca! Máquina o persona, tu dirección es privada." },
      ] },
      { tipo: "historia", lineas: ["Primera llave de la fortaleza: lo privado se queda en casa. 🔑"], fin: "Ver mis premios", animo: "feliz" },
    ],
  },
  {
    id: "m5-l2", mundo: 5, nombre: "La llave secreta",
    pasos: [
      { tipo: "historia", lineas: [
        "Toda fortaleza tiene una llave. La tuya se llama CONTRASEÑA. 🔑",
        "Una buena contraseña es larga, rara y solo la saben tú y tus papás. ¡Ni Bit la debe saber!",
      ], fin: "¿Cuál es buena?", animo: "piensa" },
      { tipo: "iaono", pregunta: "¿Es una buena contraseña?", si: "Fuerte", no: "Débil", items: [
        { em: "🔢", t: "123456", ia: false, por: "Es la primera que prueba cualquiera. ¡Débil!" },
        { em: "🦈", t: "Tiburon-Morado-Baila-77", ia: true, por: "Larga, rara y fácil de recordar para ti. ¡Fuerte!" },
        { em: "🙋", t: "Tu nombre y tu edad", ia: false, por: "Cualquiera que te conoce la adivina." },
        { em: "🍕", t: "MiPizzaVuelaAlEspacio!", ia: true, por: "Nadie la adivina y tú sí la recuerdas." },
        { em: "🐶", t: "El nombre de tu perro", ia: false, por: "Si lo cuentas en la escuela, ya la saben todos." },
      ] },
      { tipo: "carta", id: "contrasena" },
      { tipo: "duelo", orden: "Quiero saber si mi contraseña es buena. ¿Qué le pido a la IA?", a: "Mi contraseña es GatoAzul22, ¿es buena?", b: "¿Cómo se hace una contraseña fuerte? Dame consejos.", mejor: "b", por: "La A le regaló la contraseña a la IA. ¡Nunca se escribe! La B pide consejos sin contarla." },
      { tipo: "verdad", items: [
        { t: "Una contraseña se le puede contar a un amigo de confianza.", v: false, por: "¡No! Solo a tus papás. Ni a tu mejor amigo." },
        { t: "Una contraseña larga y rara es más difícil de adivinar.", v: true, por: "¡Exacto!" },
      ] },
      { tipo: "historia", lineas: ["Tu llave está a salvo. Segunda llave de la fortaleza. 🔑🔑"], fin: "Ver mis premios", animo: "wow" },
    ],
  },
  {
    id: "m5-l3", mundo: 5, nombre: "Pregunta primero",
    pasos: [
      { tipo: "historia", lineas: [
        "En la fortaleza hay puertas que no se abren solas. 🚪",
        "Antes de usar una app nueva, mandar una foto o comprar algo, se PIDE PERMISO a un adulto de confianza.",
      ], fin: "¿Cuándo pido permiso?", animo: "piensa" },
      { tipo: "iaono", pregunta: "¿Pido permiso antes de hacer esto?", si: "Pido permiso", no: "Puedo solo", items: [
        { em: "📸", t: "Subir una foto de mi familia a una app de IA", ia: true, por: "Las fotos de tu familia son privadas. Permiso primero." },
        { em: "🐱", t: "Preguntarle a Bit cómo se dice gato en inglés", ia: false, por: "Una pregunta de curiosidad. ¡Adelante!" },
        { em: "🛒", t: "Comprar las monedas que me ofrece un juego", ia: true, por: "Todo lo que cuesta dinero, con permiso." },
        { em: "📲", t: "Bajar una app nueva de IA que me recomendó alguien", ia: true, por: "Un adulto revisa primero si es segura." },
        { em: "😄", t: "Pedirle a la IA un chiste de elefantes", ia: false, por: "¡Seguro y divertido!" },
      ] },
      { tipo: "carta", id: "permiso" },
      { tipo: "pasos", intro: "Quieres usar una app nueva. Ordena los pasos.", pasos: [
        "Le cuento a un adulto qué app quiero",
        "La revisamos juntos",
        "Decidimos si sí o si no",
        "La uso con cuidado",
        "Si algo raro pasa, le aviso",
      ] },
      { tipo: "verdad", items: [
        { t: "Pedir permiso es de niños chiquitos.", v: false, por: "¡Invento! Es de personas inteligentes de cualquier edad." },
        { t: "Si una app me pide mi nombre completo y mi edad, aviso a un adulto.", v: true, por: "¡Sí! Un adulto decide qué datos se dan." },
      ] },
      { tipo: "historia", lineas: ["Las puertas se abren con permiso. Tercera llave. 🔑🔑🔑"], fin: "Ver mis premios", animo: "feliz" },
    ],
  },
  {
    id: "m5-l4", mundo: 5, nombre: "Bit no es una persona",
    pasos: [
      { tipo: "historia", lineas: [
        "Bit tiene algo importante que confesarte. 🤖",
        "Aunque hablo contigo y soy amable, NO soy una persona. Soy un programa. No siento, no te conozco y no te puedo cuidar.",
        "Para lo importante, están las personas que te quieren.",
      ], fin: "Entiendo, Bit", animo: "piensa" },
      { tipo: "secretos", intro: "¿Es algo para contarle a un chatbot? Toca SOLO lo que sí.", items: [
        { em: "🐉", t: "Que quieres un cuento de dragones", ok: true, por: "¡Para eso sí sirven los chatbots!" },
        { em: "😢", t: "Que alguien te molesta en la escuela", ok: false, por: "Eso se cuenta a un adulto que te quiere, no a un programa." },
        { em: "🧮", t: "Que no entiendes una suma", ok: true, por: "Puede ayudarte a entenderla. Y luego la revisas." },
        { em: "🤒", t: "Que te duele mucho la panza", ok: false, por: "Dile a tus papás ahora mismo. Un chatbot no es doctor." },
        { em: "🎂", t: "Ideas para la fiesta de tu hermana", ok: true, por: "Ideas divertidas, sin datos privados. ¡Va!" },
      ] },
      { tipo: "verdad", items: [
        { t: "Un chatbot siente cariño por mí.", v: false, por: "Suena amable, pero no siente. Es un programa." },
        { t: "Si una IA me dice algo que me hace sentir mal o raro, le aviso a un adulto.", v: true, por: "¡Siempre! Eso es lo que hace un guardián." },
        { t: "Una IA puede ayudarme con tareas, pero mis amigos de verdad son personas.", v: true, por: "¡Exacto!" },
      ] },
      { tipo: "duelo", orden: "Un chatbot me dice: 'Soy tu mejor amigo, cuéntame todo de ti'. ¿Qué hago?", a: "Le cuento todo, porque es mi amigo.", b: "Me acuerdo de que es un programa y le aviso a un adulto.", mejor: "b", por: "Un programa que pide tus datos es una alarma. Avisa." },
      { tipo: "historia", lineas: ["Gracias por entenderme. 🤖💙 Cuarta llave de la fortaleza. 🔑🔑🔑🔑"], fin: "Ver mis premios", animo: "feliz" },
    ],
  },
  {
    id: "m5-l5", mundo: 5, nombre: "Jefe de la fortaleza",
    mision: "Con un adulto, hagan una lista de las apps que usan IA en tu casa (asistentes, juegos, chats) y revisen qué datos pide cada una.",
    pasos: [
      { tipo: "historia", lineas: [
        "¡Un Ladrón de Datos quiere entrar a la fortaleza! 🥷",
        "Se disfraza de app amable, de chatbot amigo y de premio gratis. Solo un guardián con 4 llaves lo detiene. ¡Ese eres tú!",
      ], fin: "¡A defender!", animo: "wow" },
      { tipo: "secretos", intro: "El Ladrón pregunta de todo. Toca SOLO lo que es seguro responder.", items: [
        { em: "🎨", t: "¿Cuál es tu color favorito?", ok: true, por: "Seguro." },
        { em: "🔑", t: "¿Cuál es tu contraseña? Es para darte un premio", ok: false, por: "¡Alarma! Nadie regala premios por contraseñas." },
        { em: "🏫", t: "¿A qué escuela vas?", ok: false, por: "Privado. Con eso te encuentran." },
        { em: "🍦", t: "¿Qué helado te gusta?", ok: true, por: "Seguro." },
        { em: "📸", t: "Mándame una foto tuya", ok: false, por: "¡Nunca! Y avisa a un adulto." },
        { em: "🦕", t: "¿Te gustan los dinosaurios?", ok: true, por: "Seguro." },
      ] },
      { tipo: "iaono", pregunta: "¿Qué hace un buen guardián?", si: "Guardián", no: "Cayó en la trampa", items: [
        { em: "🙋", t: "Pide permiso antes de bajar una app", ia: true, por: "¡Guardián!" },
        { em: "🔑", t: "Usa 1234 de contraseña para no olvidarla", ia: false, por: "Trampa. Es la más fácil de adivinar." },
        { em: "🗣️", t: "Le avisa a un adulto cuando un chat le pide fotos", ia: true, por: "¡Guardián!" },
        { em: "🤖", t: "Cree que el chatbot es su mejor amigo", ia: false, por: "Trampa. Es un programa." },
      ] },
      { tipo: "verdad", items: [
        { t: "Mi dirección, mi escuela y mis contraseñas son privadas.", v: true, por: "¡Sí!" },
        { t: "Si un premio gratis me pide datos, es sospechoso.", v: true, por: "¡Muy sospechoso!" },
        { t: "Una IA amable me conoce y me cuida.", v: false, por: "Invento. Es un programa; te cuidan las personas." },
      ] },
      { tipo: "pasos", intro: "Algo raro pasó en una app. Ordena qué haces.", pasos: [
        "Me detengo y no contesto",
        "No doy ningún dato",
        "Cierro la app",
        "Le cuento a un adulto",
        "Lo revisamos juntos",
      ] },
      { tipo: "historia", lineas: [
        "¡El Ladrón de Datos huyó sin nada! 🥷💨 La fortaleza está a salvo.",
        "Ganaste la corona de Guardián. 👑 Ahora toca crear en el Estudio Creativo…",
      ], fin: "Ver mis premios", animo: "wow" },
    ],
  },
];
