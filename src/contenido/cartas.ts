import type { Carta } from "@/lib/tipos";

// Cada término de la IA es una carta de poder. El orden es el número de la carta en el álbum.
export const CARTAS: Carta[] = [
  // Mundo 1 · Isla Chispa
  { id: "ia", em: "🧠", t: "Inteligencia artificial", d: "Programas que aprenden de ejemplos para hacer cosas que antes solo hacíamos las personas.", mundo: 1 },
  { id: "algoritmo", em: "📋", t: "Algoritmo", d: "Una lista de pasos para hacer algo, como una receta. Las computadoras siguen algoritmos.", mundo: 1 },
  { id: "robot", em: "🦾", t: "Robot", d: "Una máquina con cuerpo que se mueve. Puede tener IA adentro… o no.", mundo: 1 },
  { id: "asistente", em: "🗣️", t: "Asistente de voz", d: "Una IA que escucha lo que dices y te responde o hace cosas, como poner música.", mundo: 1 },
  { id: "prompt", em: "💬", t: "Prompt", d: "La orden que le das a la IA. Entre más clara y con más detalles, mejor responde.", mundo: 1 },
  { id: "alucina", em: "🌀", t: "Alucinación", d: "Cuando la IA dice algo falso como si fuera cierto. Por eso siempre hay que revisar.", mundo: 1 },
  // Mundo 2 · Bosque de los Datos
  { id: "datos", em: "🗂️", t: "Datos", d: "Los ejemplos con los que aprende una IA. Si los datos están chuecos, aprende chueco.", mundo: 2 },
  { id: "entrenar", em: "🏋️", t: "Entrenar", d: "Enseñarle a una IA mostrándole muchos ejemplos hasta que aprende.", mundo: 2 },
  { id: "modelo", em: "📦", t: "Modelo", d: "Lo que la IA aprendió, guardado y listo para usarse.", mundo: 2 },
  { id: "patron", em: "🧩", t: "Patrón", d: "Algo que se repite en los ejemplos. La IA busca patrones para adivinar.", mundo: 2 },
  { id: "etiqueta", em: "🏷️", t: "Etiqueta", d: "El nombre que le ponemos a un ejemplo para que la IA sepa qué es: 'perro', 'gato'.", mundo: 2 },
  { id: "sesgo", em: "⚖️", t: "Sesgo", d: "Cuando la IA es injusta o se equivoca con alguien porque aprendió de datos incompletos.", mundo: 2 },
  // Mundos que siguen (se ganan en la app completa)
  { id: "contexto", em: "🧭", t: "Contexto", d: "La información extra que le das a la IA para que entienda mejor qué quieres.", mundo: 3 },
  { id: "iterar", em: "🔁", t: "Iterar", d: "Pedir, mirar el resultado y volver a pedir mejor. Así se consiguen buenas respuestas.", mundo: 3 },
  { id: "fuente", em: "📚", t: "Fuente", d: "De dónde sale una información. Una buena fuente se puede revisar.", mundo: 4 },
  { id: "deepfake", em: "🎭", t: "Deepfake", d: "Un video o foto falsos hechos con IA que parecen reales. ¡Ojo!", mundo: 4 },
  { id: "privacidad", em: "🔒", t: "Privacidad", d: "Cuidar tus datos: hay cosas que no se le cuentan a ninguna IA.", mundo: 5 },
  { id: "generativa", em: "🎨", t: "IA generativa", d: "Una IA que crea cosas nuevas: dibujos, cuentos, música.", mundo: 6 },
  { id: "chatbot", em: "🤖", t: "Chatbot", d: "Una IA con la que puedes platicar escribiendo o hablando.", mundo: 6 },
];

export function carta(id: string): Carta {
  const c = CARTAS.find((x) => x.id === id);
  if (!c) throw new Error("Carta desconocida: " + id);
  return c;
}
