"use client"
import { FormEvent, useState } from "react"
import { useRouter } from 'next/navigation'

export default function UpdateEstado() {
    const [id, setId] = useState('');
    const [nome, setNome] = useState('');
    const [sigla, setSigla] = useState('');
    const { push } = useRouter();

    async function handleSubmit(event: FormEvent) {
        event.preventDefault();

        const data = {
            nome,
            sigla
        }

        const requestInit : RequestInit = {
            method: 'PUT',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        }

        try {
            const response = await fetch(`http://localhost:3333/estados/:id`, requestInit);
            if (response.ok) {
                const estado = await response.json();
                alert(`Estado ${estado.id} atualizado com sucesso`);
                // Redirect to /estados
                push('/estados');
            }
        } catch (error) {
            // Handle error
        }
    }

    return (
        <main className="container m-auto">
            <h1>Atualizar estado</h1>

            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="id">ID</label>
                    <input type="text" name="id" id="id" 
                    onChange={(event) => {
                        setId(event.target.value)
                    }}/>
                </div>

                <div>
                    <label htmlFor="nome">Nome</label>
                    <input type="text" name="nome" id="nome" 
                    onChange={(event) => {
                        setNome(event.target.value)
                    }}/>
                </div>

                <div>
                    <label htmlFor="sigla">Sigla</label>
                    <input type="text" name="sigla" id="sigla" 
                    onChange={(event) => {
                        setSigla(event.target.value)
                    }}/>
                </div>

                <div>
                    <button type="submit">Atualizar</button>
                    <button type="reset">Limpar</button>
                </div>
            </form>
        </main>
    )
}