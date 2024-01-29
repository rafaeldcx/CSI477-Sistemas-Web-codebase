"use client"

import { FormEvent, useState } from "react";
import { useRouter } from 'next/router';
import Input from "../../components/forms/Input";

export default function CreateCidade() {
    const [nome, setNome] = useState('');
    const [estadoId, setEstadoId] = useState('');
    const router = useRouter();

    const handleSubmit = async (event: FormEvent) => {
        event.preventDefault();

        const data = { nome, estadoId };

        const response = await fetch('http://localhost:3333/cidades', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data),
        });

        const cidade = await response.json();
        alert(`Cidade ${cidade.id} criada com sucesso`);

        router.push('/cidades');
    };

    return (
        <main className="container m-auto">
            <h1>Cadastro de cidades: {nome}</h1>

            <form onSubmit={handleSubmit}>

            <div>
                <Input name="nome" label="Nome" setValue={(event) => 
                    setNome(event.target.value)} />
            </div>

                <Input name="estadoId" label="Estado ID" setValue={(event) =>
                    setEstadoId(event.target.value)} />

               
                <div>
                    <button type="submit">Cadastrar</button>
                    <button type="reset" onClick={() => { setNome(''); setEstadoId(''); }}>Limpar</button>
                </div>
            </form>
        </main>
    );
}