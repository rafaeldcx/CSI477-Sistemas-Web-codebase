import prismaClient from "../../database";

export class updateLocalColetaService {
    async execute(id: number, nome: string, rua: string, numero: string, complemento: string, cidadeId: number) {

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