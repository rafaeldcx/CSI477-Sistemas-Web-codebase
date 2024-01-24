import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      
      <h1 className="font-bold text-3xl">Sistema de Controle de Doação</h1>

      <Link href="#">Home</Link>
      <Link href="http://localhost:3333/estados">Estados</Link>
      <Link href="#">Cidades</Link>
      <Link href="#">Pessoas</Link>
      <Link href="#">Locais de Coleta</Link>

    </main>
  );
}