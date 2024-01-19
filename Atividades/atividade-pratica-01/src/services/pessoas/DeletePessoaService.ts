import prismaClient from "../../prisma";


interface deletePessoaProps{
    id: string;
    nome: string;
}


export class deletePessoaService {
    async execute({id, nome}: deletePessoaProps) {

        if(!id || !nome){
            throw new Error("Invalid Request")
        }

        const findPessoa = await prismaClient.pessoa.findFirst({
            where:{
                id: id,
                nome: nome
            }
        })
    
        if(!findPessoa){
            throw new Error("Pessoa not found")
        }

        await prismaClient.estado.delete({
            where: {
                id: findPessoa.id,
                nome: findPessoa.nome
            }
        })

    return {message: "Pessoa deleted successfully"}
    
    }
}