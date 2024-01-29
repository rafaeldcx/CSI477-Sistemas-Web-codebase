"use client"
import { useRouter } from 'next/navigation'
import { FormEvent, useState } from 'react';

export default function DeleteLocalColeta() {
    const { push } = useRouter();
    const [id, setId] = useState('');

    async function handleSubmit(event: FormEvent) {
        event.preventDefault();

        const requestInit : RequestInit = {
            method: 'DELETE',
        }

        try {
            const response = await fetch(`http://localhost:3333/locaiscoleta/${id}`, requestInit);
            if (response.ok) {
                alert(`Local de Coleta ${id} deletado com sucesso`);
                // Redirect to /locaisColeta
                push('/locaisColeta');
            }
        } catch (error) {
            // Handle error
            
        }
    }

    return (
        <main className="container m-auto">
            <h1>Deletar Local de Coleta</h1>

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