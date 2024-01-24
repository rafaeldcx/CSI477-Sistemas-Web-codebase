import prismaClient from "../../database";

export class updateTipoSanguineoService {
    async execute(id: number, tipo: string, fator: string) {

        if(!id){
            throw new Error("Invalid Request")
        }

        const findTipoSanguineo = await prismaClient.tipoSanguineo.findFirst({
            where:{
                id: id
            }
        })
    
        if(!findTipoSanguineo){
            throw new Error("Tipo Sanguineo not found")
        }

        await prismaClient.tipoSanguineo.update({
            where: {
                id: findTipoSanguineo.id
            },
            data:{
                tipo: tipo,
                fator: fator
            }
        })
    }
}