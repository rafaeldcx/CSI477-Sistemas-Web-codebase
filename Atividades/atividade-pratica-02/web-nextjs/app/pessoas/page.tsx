"use client"

import Link from "next/link";
import Line from "../components/Line";

const getAllPessoas = async () => {
    const pessoas = await fetch('http://localhost:3333/pessoas');
    return pessoas.json();
}

interface PessoaInterface {
    id: number;
    nome: string;
    rua: string; 
    numero: string;
    complemento: string;
    cidadeId: number;
    rg: string;
    tipoId: number; 

    created_at: string;
    updated_at: string;
}

export default async function Pessoa() {
    const pessoas: PessoaInterface[] = await getAllPessoas();

    return (
        <main>
            <h1>Lista de pessoas</h1>
            <Link href="/pessoas/create">Criar pessoa</Link>

            <ul>
                {
                    pessoas.map((pessoa) => {
                        return (
                            <Line key={pessoa.id} id={pessoa.id} description={pessoa.nome} />
                        )
                    })
                }
            </ul>
        </main>
    )
}