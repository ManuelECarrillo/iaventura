// Tipos del contenido y del avance. Las lecciones son datos: agregar una es agregar un archivo.

export type Animo = "feliz" | "wow" | "piensa" | "ups";

export type Carta = {
  id: string;
  em: string; // emoji
  t: string; // término
  d: string; // definición para un niño de 8 años
  mundo: number;
};

export type Mundo = {
  id: number;
  em: string;
  nombre: string;
  historia: string; // una frase
  gratis: boolean;
  lecciones: LeccionResumen[];
};

export type LeccionResumen = {
  id: string;
  em: string;
  nombre: string;
  minutos: number;
  jefe?: boolean;
};

// ---- Pasos de una lección (cada tipo es un minijuego distinto) ----

export type PasoHistoria = { tipo: "historia"; lineas: string[]; fin: string; animo?: Animo };

export type PasoIaONo = {
  tipo: "iaono";
  pregunta?: string;
  si: string; // etiqueta botón A
  no: string; // etiqueta botón B
  items: { em: string; t: string; ia: boolean; por: string }[];
};

export type PasoCarta = { tipo: "carta"; id: string };

export type PasoEntrena = {
  tipo: "entrena";
  concepto: string; // "ANIMAL"
  fichas: { em: string; si: boolean; nombre: string; art: string }[]; // art = "el" | "la"
  prueba: { em: string; nombre: string };
  minimo: number;
};

export type PasoOrden = {
  tipo: "orden";
  intro: string;
  filas: { q: string; ops: string[] }[]; // de peor a mejor, 3 opciones
  respuestas: string[]; // respuesta de Bit por nivel de detalle (índice 0..2 según la opción del primer grupo)
  extraBien: string; // se agrega si la última fila fue la mejor
  extraMal: string; // se agrega si la última fila fue la peor
};

export type PasoVerdad = {
  tipo: "verdad";
  items: { t: string; v: boolean; por: string }[];
};

export type PasoSecretos = {
  tipo: "secretos";
  intro: string;
  items: { em: string; t: string; ok: boolean; por: string }[]; // ok = se puede contar
};

export type PasoPasos = {
  tipo: "pasos";
  intro: string;
  pasos: string[]; // en el orden correcto; se muestran revueltos
};

export type PasoDuelo = {
  tipo: "duelo";
  orden: string;
  a: string;
  b: string;
  mejor: "a" | "b";
  por: string;
};

export type PasoChuecos = {
  tipo: "chuecos";
  intro: string;
  concepto: string;
  // Entrenamiento forzado con datos malos: el niño ve el resultado y elige qué faltó
  ejemplos: { em: string; nombre: string }[];
  prueba: { em: string; nombre: string };
  respuestaBit: string;
  pregunta: string;
  opciones: { t: string; ok: boolean; por: string }[];
};

export type Paso =
  | PasoHistoria
  | PasoIaONo
  | PasoCarta
  | PasoEntrena
  | PasoOrden
  | PasoVerdad
  | PasoSecretos
  | PasoPasos
  | PasoDuelo
  | PasoChuecos;

export type Leccion = {
  id: string;
  mundo: number;
  nombre: string;
  pasos: Paso[];
  mision?: string; // misión de la vida real (solo en la última lección del mundo)
};

// ---- Avance guardado en el celular ----
export type Avance = {
  estrellas: number;
  hechas: Record<string, number>; // id de lección → mejor puntaje (1-3)
  cartas: string[];
  color: string;
  acc: string;
  dias: string[]; // "AAAA-M-D" de cada día jugado (últimos 30)
  hoy: { dia: string; lecciones: number }; // tope diario
  apodo: string;
};
