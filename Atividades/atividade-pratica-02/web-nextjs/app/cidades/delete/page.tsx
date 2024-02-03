"use client"
import { useRouter } from 'next/navigation'
import { FormEvent, useState } from 'react';


export default function DeleteCidade() {
    const { push } = useRouter();
    const [id, setId] = useState('');

    async function handleSubmit(event: FormEvent) {
        event.preventDefault();

        const data = { id: Number(id) };

        const requestInit : RequestInit = {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data),
        }

        try {
            const response = await fetch(`http://localhost:3333/cidades/${id}`, requestInit);
            if (response.ok) {
                alert(`Cidade ${id} deletada com sucesso`);
                // Redirect to /cidades
                push('/cidades');
            }
        } catch (error) {
            // Handle error
            
        }
    }

    return (
        <main className="container m-auto">
            <h1>Deletar cidade</h1>

            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="id">ID</label>
                    <input type="text" name="id" id="id" 
                    onChange={(event) => {
                        setId(event.target.value)
                    }}/>
                </div>

                <div>
                    <button type="submit">Deletar</button>
                    <button type="reset">Limpar</button>
                </div>
            </form>
        </main>
    )
}