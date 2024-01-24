"use client"
import { FormEvent, useState } from "react";
import { useRouter } from 'next/router';

export default function CreateEstado() {
    const [nome, setNome] = useState('');
    const [sigla, setSigla] = useState('');
    const router = useRouter();

    const handleSubmit = async (event: FormEvent) => {
        event.preventDefault();

        const data = { nome, sigla };

        const response = await fetch('http://localhost:3333/estados', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data),
        });

        if (!response.ok) throw new Error("Error creating estado");

        const estado = await response.json();
        alert(`Estado ${estado.id} criado com sucesso`);

        router.push('/estados');
    };

    return (
        <main className="container m-auto">
            <h1>Cadastro de estados: {nome}</h1>

            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="nome">Nome</label>
                    <input type="text" id="nome" onChange={e => setNome(e.target.value)} />
                </div>

                <div>
                    <label htmlFor="sigla">Sigla</label>
                    <input type="text" id="sigla" onChange={e => setSigla(e.target.value)} />
                </div>

                <div>
                    <button type="submit">Cadastrar</button>
                    <button type="reset" onClick={() => { setNome(''); setSigla(''); }}>Limpar</button>
                </div>
            </form>
        </main>
    );
}