import prismaClient from "../../prisma";

export class updateLocalColetaService {
    async execute(id: string, nome: string, rua: string, numero: string, complemento: string, cidadeId: string) {

        if(!id){
            throw new Error("Invalid Request")
        }

        const findLocalColeta = await prismaClient.localColeta.findFirst({
            where:{
                id: id
            }
        })
    
        if(!findLocalColeta){
            throw new Error("Local Coleta not found")
        }

        await prismaClient.localColeta.update({
            where: {
                id: findLocalColeta.id
            },
            data:{
                nome: nome,
                rua: rua,
                numero: numero,
                complemento: complemento,
                cidadeId: cidadeId 
            }
        })
    }
}