"use client"
import { FormEvent, useState } from "react";
import { useRouter } from 'next/router';
import Input from "../../components/forms/Input";

export default function CreateLocalColeta() {
    const [nome, setNome] = useState('');
    const [cidadeId, setCidadeId] = useState('');
    const router = useRouter();

    const handleSubmit = async (event: FormEvent) => {
        event.preventDefault();

        const data = { nome, cidadeId };

        const response = await fetch('http://localhost:3333/locaisColeta', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data),
        });

        const localColeta = await response.json();
        alert(`Local de Coleta ${localColeta.id} criado com sucesso`);

        router.push('/locaisColeta');
    };

    return (
        <main className="container m-auto">
            <h1>Cadastro de locais de coleta: {nome}</h1>

            <form onSubmit={handleSubmit}>

            <div>
                <Input name="nome" label="Nome" setValue={(event) => 
                    setNome(event.target.value)} />
            </div>

                <Input name="cidadeId" label="Cidade ID" setValue={(event) =>
                    setCidadeId(event.target.value)} />

               
                <div>
                    <button type="submit">Cadastrar</button>
                    <button type="reset" onClick={() => { setNome(''); setCidadeId(''); }}>Limpar</button>
                </div>
            </form>
        </main>
    );
}