"use client"

import { FormEvent, useEffect, useState } from "react";
import { useRouter } from 'next/navigation';
import Input from "@/app/components/forms/Input";
import EstadoInterface from "@/app/types/estado";
import getAllEstados from "@/app/repository/estados/GetAllEstados";
import getByIdCidade from "@/app/repository/cidades/GetByIdCidades";


interface DeleteCidadeParamsInterface {
    params: {
        id: string;
    }
}

export default function DeleteCidade( {params}: DeleteCidadeParamsInterface ) {
    const [nome, setNome] = useState('');
    const [estadoId, setEstadoId] = useState('');
    const [estados, setEstados] = useState<EstadoInterface[]>([]);

    const {push} = useRouter();

    useEffect( () => {
        getAllEstados()
        .then( data => {setEstados(data)})
        .catch( error => { console.error(error)})

        getByIdCidade(params.id)
        .then( data => {
            setNome(data.nome);
            setEstadoId(data.estadoId);
        
        })
        .catch( error => { console.error(error)})
    
    }, [params]);

    const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

        const data = { id: Number(params.id)};

    try {

        const response = await fetch('http://localhost:3333/cidades', {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data),
        });
 
        const cidade = await response.json();
        alert(`Cidade ${cidade.id} excluída com sucesso`);

        push('/cidades');
    } catch (error) {
        console.error(error);
        window.alert('Erro ao deletar a cidade');
    }
}
    

    return (
        <main className="container m-auto">
            <h1>Cadastro de cidades: {nome}-{estadoId}</h1>

            <form onSubmit={handleSubmit}>

            <div>
                <Input name="nome" label="Nome" value={nome} setValue={(event) => 
                    setNome(event.target.value)} />
            </div>

              
             <div>
                <label htmlFor="estadoId">Estado</label>
                <select name="estadoId" id="estadoId" value={estadoId} onChange={event => setEstadoId(event.target.value)}>

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
                    <button type="submit">Deletar</button>
                    <button type="reset" onClick={() => { setNome(''); setEstadoId(''); }}>Limpar</button>
                </div>
            </form>
        </main>
    );
}