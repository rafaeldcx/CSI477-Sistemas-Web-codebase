"use client"
import { FormEvent, useState } from "react";
import { useRouter } from 'next/router';

export default function UpdateEstado() {
    const [id, setId] = useState('');
    const [nome, setNome] = useState('');
    const [sigla, setSigla] = useState('');
    const router = useRouter();

    const handleSubmit = async (event: FormEvent) => {
        event.preventDefault();

        const data = { nome, sigla };

        const response = await fetch(`http://localhost:3333/estados/${id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data),
        });

        if (!response.ok) throw new Error("Error updating estado");

        const estado = await response.json();
        alert(`Estado ${estado.id} atualizado com sucesso`);

        router.push('/estados');
    };

    return (
        <main className="container m-auto">
            <h1>Atualizar estado</h1>

            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="id">ID</label>
                    <input type="text" id="id" onChange={e => setId(e.target.value)} />
                </div>

                <div>
                    <label htmlFor="nome">Nome</label>
                    <input type="text" id="nome" onChange={e => setNome(e.target.value)} />
                </div>

                <div>
                    <label htmlFor="sigla">Sigla</label>
                    <input type="text" id="sigla" onChange={e => setSigla(e.target.value)} />
                </div>

                <div>
                    <button type="submit">Atualizar</button>
                    <button type="reset" onClick={() => { setId(''); setNome(''); setSigla(''); }}>Limpar</button>
                </div>
            </form>
        </main>
    );
}