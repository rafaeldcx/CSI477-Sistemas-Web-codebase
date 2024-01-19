import prismaClient from "../../prisma";


interface deleteDoacaoProps{
    id: string;
}


export class deleteDoacaoService {
    async execute({id}: deleteDoacaoProps) {

        if(!id){
            throw new Error("Invalid Request")
        }

        const findDoacao = await prismaClient.doacao.findFirst({
            where:{
                id: id
            }
        })
    
        if(!findDoacao){
            throw new Error("Doacao not found")
        }

        await prismaClient.doacao.delete({
            where: {
                id: findDoacao.id
            }
        })

    return {message: "Doacao deleted successfully"}
    
    }
}