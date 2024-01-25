const getAllDoacoes = async () => {
    const doacoes = await fetch('http://localhost:3333/doacoes');
    return doacoes.json();
}

interface DoacaoInterface {
    id: number;
    nome: string;
    valor: number;
    created_at: string;
    updated_at: string;
}

export default async function Doacao() {
    const doacoes: DoacaoInterface[] = await getAllDoacoes();

    return (
        <main>
            <h1>Lista de doações</h1>

            <ul>
                {
                    doacoes.map((doacao) => {
                        return (
                            <li key={doacao.id}>{doacao.nome} - {doacao.valor}</li>
                        )
                    })
                }
            </ul>
        </main>
    )
}