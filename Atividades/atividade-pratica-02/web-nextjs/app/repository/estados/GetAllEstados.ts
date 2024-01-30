const getAllEstados = async () => {

    const estados =  await fetch('http://localhost:3333/estados', {cache: "no-store"})

    return estados.json();
}

export default getAllEstados;