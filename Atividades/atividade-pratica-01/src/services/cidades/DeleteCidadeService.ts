import { Console } from "console";
import prismaClient from "../../database";


interface deleteCidadeProps{
    id: number;
}



export class DeleteCidadeService {
    async execute(id: number) {
        if(!id){
            console.error("Invalid Request")
        }

        const findCidade = await prismaClient.cidade.findFirst({
            where:{
                id: id
            }
        })
    
        if(!findCidade){
            throw new Error("Cidade not found")
        }

        // Delete or update all records in other tables that reference this city
        await prismaClient.pessoa.deleteMany({
            where: {
                cidadeId: id
            }
        });

        // Now you can delete the city
        const cidade = await prismaClient.cidade.delete({
            where: {
                id: id
            }
        });

        return cidade;
    }
}