import prismaClient from "../../prisma";


interface deleteEstadoProps{
    id: string;
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