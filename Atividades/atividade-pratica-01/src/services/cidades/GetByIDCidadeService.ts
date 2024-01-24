import prismaClient from '../../database'

export class getByIDCidadeService {
    async execute(id: number) {

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