import prismaClient from '../../prisma'

export class getByIDCidadeService {
    async execute(id: string) {

        try{
            const cidade = await prismaClient.cidade.findFirst({
                where:{
                    id: id
                }
            })

            return cidade

        } catch(error){    
            throw new Error("Cidade not found")
        }
    }
}