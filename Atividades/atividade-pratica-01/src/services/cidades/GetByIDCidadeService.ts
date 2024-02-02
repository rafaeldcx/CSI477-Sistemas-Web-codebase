import prismaClient from '../../database'

export class getByIDCidadeService {
    async execute(id: number) {

        try{
            const cidade = await prismaClient.cidade.findFirst({
                where:{
                    id: Number(id)
                }
            })

            return cidade

        } catch(error){    
            console.error(error)
            throw new Error("Cidade not found")
        }
    }
}