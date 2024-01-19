import prismaClient from "../../prisma";

export class updateCidadeService {
    async execute(id: string, nome: string, estadoId: string) {

        if(!id){
            throw new Error("Invalid Request")
        }

        const findCidade = await prismaClient.cidade.findFirst({
            where:{
                id: id
            }
        })
    
        if(!findCidade){
            throw new Error("Cidade not found")
        }

        await prismaClient.cidade.update({
            where: {
                id: findCidade.id
            },
            data:{
                nome: nome,
                estadoId: estadoId
            }
        })
    }
}