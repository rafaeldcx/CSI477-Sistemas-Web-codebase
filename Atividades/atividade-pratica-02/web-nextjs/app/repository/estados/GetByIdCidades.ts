const getByIdCidade = async(id: string) => {

    const cidade = await fetch(`http://localhost:3333/cidades/${id}`, {cache: 'no-store'})
    return cidade.json();
}

export default getByIdCidade;