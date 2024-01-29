"use client"

import Link from "next/link";
import Line from "../components/Line";

const getAllLocaisColeta = async () => {
    const locaisColeta = await fetch('http://localhost:3333/locaiscoleta');
    return locaisColeta.json();
}

interface LocalColetaInterface {
    id: number;
    nome: string;
    rua: string;
    numero: string;
    complemento: string;
    cidadeId: number;
    created_at: string;
    updated_at: string;
}


export default async function LocalColeta() {
    const locaisColeta: LocalColetaInterface[] = await getAllLocaisColeta();

    return (
        <main>
            <h1>Lista de locais de coleta</h1>
            <Link href="/locaiscoleta/create">Criar local de coleta</Link>

            <ul>
                {
                    locaisColeta.map((localColeta) => {
                        return (
                            <Line key={localColeta.id} id={localColeta.id} description={localColeta.nome} />
                        )
                    })
                }
            </ul>
        </main>
    )
}