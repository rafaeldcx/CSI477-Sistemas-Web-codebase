"use client"
import { useRouter } from 'next/navigation'
import { FormEvent, useState } from 'react';

export default function DeleteEstado() {
    const { push } = useRouter();
    const [id, setId] = useState('');

    async function handleSubmit(event: FormEvent) {
        event.preventDefault();

        const requestInit : RequestInit = {
            method: 'DELETE',
        }

        try {
            const response = await fetch(`http://localhost:3333/estados/${1}`, requestInit);
            if (response.ok) {
                alert(`Estado ${id} deletado com sucesso`);
                // Redirect to /estados
                push('/estados');
            }
        } catch (error) {
            // Handle error
            
        }
    }

    return (
        <main className="container m-auto">
            <h1>Deletar estado</h1>

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