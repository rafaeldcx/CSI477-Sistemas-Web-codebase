import prismaClient from '../../prisma'

export class getByIDDoacaoService {
    async execute(id: string) {

        try{
            const doacao = await prismaClient.doacao.findFirst({
                where:{
                    id: id
                }
            })

            return doacao

        } catch(error){    
            throw new Error("Estado not found")
        }
    }
}