import prismaClient from "../../database";


interface deleteCidadeProps{
    id: number;
}


export class deleteCidadeService {
    async execute({id}: deleteCidadeProps) {

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

        await prismaClient.cidade.delete({
            where: {
                id: findCidade.id
            }
        })

    return {message: "Cidade deleted successfully"}
    
    }
}