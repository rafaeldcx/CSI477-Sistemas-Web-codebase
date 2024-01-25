const getAllCidades = async () => {
    const cidades = await fetch('http://localhost:3333/cidades');
    return cidades.json();
}

interface CidadeInterface {
    id: number;
    nome: string;
    estado_id: number;
    created_at: string;
    updated_at: string;
}

export default async function Cidade() {
    const cidades: CidadeInterface[] = await getAllCidades();

    return (
        <main>
            <h1>Lista de cidades</h1>

            <ul>
                {
                    cidades.map((cidade) => {
                        return (
                            <li key={cidade.id}>{cidade.nome}</li>
                        )
                    })
                }
            </ul>
        </main>
    )
}