import prismaClient from "../../prisma";

export class updateDoacaoService {
    async execute(id: string, pessoaId: string, localId: string, data: Date) {

        if(!id){
            throw new Error("Invalid Request")
        }

        const findDoacao = await prismaClient.doacao.findFirst({
            where:{
                id: id
            }
        })
    
        if(!findDoacao){
            throw new Error("Doacao not found")
        }

        await prismaClient.doacao.update({
            where: {
                id: findDoacao.id
            },
            data:{
                pessoaId: pessoaId, 
                localId: localId,
                data: data
            }
        })
    }
}