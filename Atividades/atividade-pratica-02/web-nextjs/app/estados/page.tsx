"use client"

import Link from "next/link";
import Line from "../components/Line";


const getAllEstados = async () => {

    const estados =  await fetch('http://localhost:3333/estados')

    return estados.json();
}

interface EstadoInterface {
    id: number;
    nome: string;
    sigla: string;

    created_at: string;
    updated_at: string;
}

export default async function Estado() {

    const estados : EstadoInterface[] = await getAllEstados();

    return (
        <main>
            <h1>Lista de estados</h1>
            <Link href="/estados/create">Criar estado</Link>

            <ul>
                {
                    estados.map( (estado) => {

                        return (
                            <Line key = {estado.id} id = {estado.id} description= {estado.nome} />
                        )
                    })
                }
            </ul>

        </main>
    )
}