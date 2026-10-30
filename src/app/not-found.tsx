import Link from "next/link";

export default function NoEncontrado() {
  return (
    <main className="app" style={{ textAlign: "center", paddingTop: 60, display: "grid", gap: 16 }}>
      <h1 style={{ fontSize: "2rem" }}>Bit se perdió 🤖❓</h1>
      <p style={{ fontWeight: 700 }}>Esta página no existe.</p>
      <Link href="/" className="boton uva">Volver al mapa</Link>
    </main>
  );
}
