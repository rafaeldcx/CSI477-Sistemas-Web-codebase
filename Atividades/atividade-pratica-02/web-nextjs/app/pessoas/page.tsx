const getAllPessoas = async () => {
    const pessoas = await fetch('http://localhost:3333/pessoas');
    return pessoas.json();
}

interface PessoaInterface {
    id: number;
    nome: string;
    idade: number;
    created_at: string;
    updated_at: string;
}

export default async function Pessoa() {
    const pessoas: PessoaInterface[] = await getAllPessoas();

    return (
        <main>
            <h1>Lista de pessoas</h1>

            <ul>
                {
                    pessoas.map((pessoa) => {
                        return (
                            <li key={pessoa.id}>{pessoa.nome} - {pessoa.idade}</li>
                        )
                    })
                }
            </ul>
        </main>
    )
}