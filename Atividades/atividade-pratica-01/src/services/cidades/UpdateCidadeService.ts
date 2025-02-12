import prismaClient from "../../database";

export class updateCidadeService {
    async execute(id: number, nome: string, estadoId: number) {

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


        const cidade = await prismaClient.cidade.update({
            where: {
                id: findCidade.id
            },
            data:{
                nome: nome,
                estado: {
                    connect: {
                        id: estadoId
                    }
                }
            }
        })

        return cidade
    }
}