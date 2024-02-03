import prismaClient from "../../database";


interface deleteCidadeProps{
    id: number;
}


export class deleteCidadeService {
    async execute(id: number) {

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

       const cidade = await prismaClient.cidade.delete({
            where: {
                id
            }
        })

        return cidade

    return {message: "Cidade deleted successfully"}
    
    }
}