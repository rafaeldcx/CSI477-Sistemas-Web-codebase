import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      
      <h1 className="font-bold text-3xl">Sistema de Controle de Doação</h1>

      <Link href="http://localhost:3000">Home</Link>
      <Link href="http://localhost:3000/estados">Estados</Link>
      <Link href="http://localhost:3000/cidades">Cidades</Link>
      <Link href="http://localhost:3000/pessoas">Pessoas</Link>
      <Link href="http://localhost:3000/locaiscoleta">Locais de Coleta</Link>

    </main>
  );
}