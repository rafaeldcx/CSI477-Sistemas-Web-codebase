"use client"

import Link from "next/link";
import Line from "../components/Line";

const getAllCidades = async () => {
    const cidades = await fetch('http://localhost:3333/cidades');
    return cidades.json();
}

interface CidadeInterface {
    id: number;
    nome: string;
    estadoId: number;
    created_at: string;
    updated_at: string;
}

export default async function Cidade() {
    const cidades: CidadeInterface[] = await getAllCidades();

    return (
        <main>
            <h1>Lista de cidades</h1>
            <Link href="/cidades/create">Criar cidade</Link>

            <ul>
                {
                    cidades.map((cidade) => {
                        return (
                            <Line key={cidade.id} id={cidade.id} description={cidade.nome} />
                        )
                    })
                }
            </ul>
        </main>
    )
}