import prismaClient from "../../database";

export class updateEstadoService {
    async execute(id: number, nome: string, sigla: string) {

        if(!id){
            throw new Error("Invalid Request")
        }

        const findEstado = await prismaClient.estado.findFirst({
            where:{
                id: id
            }
        })
    
        if(!findEstado){
            throw new Error("Estado not found")
        }

        await prismaClient.estado.update({
            where: {
                id: findEstado.id
            },
            data:{
                nome: nome,
                sigla: sigla
            }
        })
    }
}