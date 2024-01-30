
import Link from "next/link";
import Line from "../components/Line";
import EstadoInterface from "../types/estado";
import getAllEstados from "../repository/estados/GetAllEstados";


export default async function Estado() {

    const estados : EstadoInterface[] = await getAllEstados();

    return (
        <main>
            <h1>Lista de estados</h1>
            <Link href="/estados/create">Criar estado</Link>

            <ul>
                {
                    estados.map( (estado) => {

                        return (
                            <Line key = {estado.id} id = {estado.id} description= {estado.nome} />
                        )
                    })
                }
            </ul>

        </main>
    )
}