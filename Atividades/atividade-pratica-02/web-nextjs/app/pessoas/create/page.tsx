import { FormEvent, useState } from "react";
import { useRouter } from 'next/router';
import Input from "../../components/forms/Input";

export default function CreatePessoa() {
    const [nome, setNome] = useState('');
    const [rg, setRg] = useState('');
    const [cidadeId, setCidadeId] = useState('');
    const [tipoId, setTipoId] = useState('');
    const router = useRouter();

    const handleSubmit = async (event: FormEvent) => {
        event.preventDefault();

        const data = { nome, rg, cidadeId, tipoId };

        const response = await fetch('http://localhost:3333/pessoas', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data),
        });

        const pessoa = await response.json();
        alert(`Pessoa ${pessoa.id} criada com sucesso`);

        router.push('/pessoas');
    };

    return (
        <main className="container m-auto">
            <h1>Cadastro de pessoas: {nome}</h1>

            <form onSubmit={handleSubmit}>

            <div>
                <Input name="nome" label="Nome" setValue={(event) => 
                    setNome(event.target.value)} />
            </div>

            <div>
                <Input name="rg" label="RG" setValue={(event) => 
                    setRg(event.target.value)} />
            </div>

            <div>
                <Input name="cidadeId" label="Cidade ID" setValue={(event) =>
                    setCidadeId(event.target.value)} />
            </div>

            <div>
                <Input name="tipoId" label="Tipo ID" setValue={(event) =>
                    setTipoId(event.target.value)} />
            </div>
               
            <div>
                <button type="submit">Cadastrar</button>
                <button type="reset" onClick={() => { setNome(''); setRg(''); setCidadeId(''); setTipoId(''); }}>Limpar</button>
            </div>
            </form>
        </main>
    );
}