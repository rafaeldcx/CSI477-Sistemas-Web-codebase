import prismaClient from "../../database";


interface deleteTipoSanguineoProps{
    id: number;
}


export class deleteTipoSanguineoService {
    async execute({id}: deleteTipoSanguineoProps) {

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

        await prismaClient.tipoSanguineo.delete({
            where: {
                id: findTipoSanguineo.id
            }
        })

    return {message: "Tipo Sanguineo deleted successfully"}
    
    }
}