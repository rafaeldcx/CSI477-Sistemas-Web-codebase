const getAllLocaisColeta = async () => {
    const locaisColeta = await fetch('http://localhost:3333/locaiscoleta');
    return locaisColeta.json();
}

interface LocalColetaInterface {
    id: number;
    nome: string;
    rua: string;
    numero: string;
    complemento: string;
    cidadeId: number;
}

export default async function LocalColeta() {
    const locaisColeta: LocalColetaInterface[] = await getAllLocaisColeta();

    return (
        <main>
            <h1>Lista de locais de coleta</h1>

            <ul>
                {
                    locaisColeta.map((localColeta) => {
                        return (
                            <li key={localColeta.id}>
                                {localColeta.nome} - {localColeta.rua}, {localColeta.numero}, {localColeta.complemento}, Cidade ID: {localColeta.cidadeId}
                            </li>
                        )
                    })
                }
            </ul>
        </main>
    )
}