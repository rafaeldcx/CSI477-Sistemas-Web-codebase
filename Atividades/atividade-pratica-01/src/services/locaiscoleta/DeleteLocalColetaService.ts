import prismaClient from "../../database";


interface deleteLocalColetaProps{
    id: number;
}


export class deleteLocalColetaService {
    async execute({id}: deleteLocalColetaProps) {

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

        await prismaClient.localColeta.delete({
            where: {
                id: findLocalColeta.id
            }
        })

    return {message: "Local Coleta deleted successfully"}
    
    }
}