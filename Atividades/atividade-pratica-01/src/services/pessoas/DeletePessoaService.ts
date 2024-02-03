import prismaClient from "../../database";


interface deletePessoaProps{
    id: number;
    nome: string;
}


export class deletePessoaService {
    async execute({id, nome}: deletePessoaProps) {

        if(!id || !nome){
            throw new Error("Invalid Request")
        }

        const findPessoa = await prismaClient.pessoa.findFirst({
            where:{
                id: id
            }
        })
    
        if(!findPessoa){
            throw new Error("Pessoa not found")
        }

        await prismaClient.estado.delete({
            where: {
                id: findPessoa.id,
            }
        })

    return {message: "Pessoa deleted successfully"}
    
    }
}