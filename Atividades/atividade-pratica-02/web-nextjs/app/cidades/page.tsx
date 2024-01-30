
import Link from "next/link";
import Line from "../components/Line";
import CidadeInterface from "../types/cidade";
import getAllEstados from "../repository/estados/GetAllEstados";

const getAllCidades = async () => {
    const cidades = await fetch('http://localhost:3333/cidades', {cache: "no-store"});
    return cidades.json();
}

export default async function Cidade() {
    const cidades: CidadeInterface[] = await getAllCidades();

    return (
        <main>
            <h1>Lista de cidades</h1>
            <Link href="/cidades/create">Criar cidade</Link>

            <ul>
                {
                    cidades.map((cidade) => {

                        const nome = `${cidade.nome} - ${cidade.estado.sigla}`;

                        return (
                            <Line key={cidade.id} id={cidade.id} description={nome} />
                        )
                    })
                }
            </ul>
        </main>
    )
}