import prismaClient from '../../database'

export class getByIDDoacaoService {
    async execute(id: number) {

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