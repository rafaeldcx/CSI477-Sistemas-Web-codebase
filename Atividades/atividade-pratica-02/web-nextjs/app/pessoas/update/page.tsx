"use client"
import { FormEvent, useState } from "react";
import { useRouter } from 'next/navigation';

export default function UpdatePessoa() {
    const [id, setId] = useState('');
    const [nome, setNome] = useState('');
    const router = useRouter();

    const handleSubmit = async (event: FormEvent) => {
        event.preventDefault();

        const data = { nome };

        const response = await fetch(`http://localhost:3333/pessoas`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data),
        });

        if (!response.ok) throw new Error("Error updating pessoa");

        const pessoa = await response.json();
        alert(`Pessoa ${pessoa.id} atualizada com sucesso`);

        router.push('/pessoas');
    };

    return (
        <main className="container m-auto">
            <h1>Atualizar Pessoa</h1>

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
                    <button type="submit">Atualizar</button>
                    <button type="reset" onClick={() => { setId(''); setNome(''); }}>Limpar</button>
                </div>
            </form>
        </main>
    );
}