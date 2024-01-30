"use client"

import { FormEvent, useEffect, useState } from "react";
import { useRouter } from 'next/navigation';
import Input from "../../components/forms/Input";
import EstadoInterface from "@/app/types/estado";
import getAllEstados from "@/app/repository/estados/GetAllEstados";

export default function CreateCidade() {
    const [nome, setNome] = useState('');
    const [estadoId, setEstadoId] = useState('');
    const [estados, setEstados] = useState<EstadoInterface[]>([]);

    const {push} = useRouter();

    useEffect( () => {
        getAllEstados()
        .then( data => {setEstados(data)})
        .catch( error => { console.error(error); 
        })
    
    }, []);

    const handleSubmit = async (event: FormEvent) => {
        event.preventDefault();

        const data = { nome, estadoId: Number(estadoId)};

        const response = await fetch('http://localhost:3333/cidades', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data),
        });

        const cidade = await response.json();
        alert(`Cidade ${cidade.id} criada com sucesso`);

        push('/cidades');
    };

    return (
        <main className="container m-auto">
            <h1>Cadastro de cidades: {nome}-{estadoId}</h1>

            <form onSubmit={handleSubmit}>

            <div>
                <Input name="nome" label="Nome" setValue={(event) => 
                    setNome(event.target.value)} />
            </div>

                <Input name="estadoId" label="Estado ID" value={estadoId} setValue={(event) =>
                    setEstadoId(event.target.value)} />

             <div>
                <label htmlFor="estadoId">Estado</label>
                <select name="estadoId" id="estadoId" onChange={event => setEstadoId(event.target.value)}>

                    <option value="">Selecione:</option>
                    {
                        estados.map( estado => {
                            return (
                                <option key={estado.id} value={estado.id}>{estado.nome}</option>
                            )
                        })
                    }
                </select>
                </div>  
            
                <div>
                    <button type="submit">Cadastrar</button>
                    <button type="reset" onClick={() => { setNome(''); setEstadoId(''); }}>Limpar</button>
                </div>
            </form>
        </main>
    );
}