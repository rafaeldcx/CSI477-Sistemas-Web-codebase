import prismaClient from "../../database";


interface deleteEstadoProps{
    id: number;
}


export class deleteEstadoService {
    async execute({id}: deleteEstadoProps) {

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

        await prismaClient.estado.delete({
            where: {
                id: findEstado.id
            }
        })

    return {message: "Estado deleted successfully"}
    
    }
}