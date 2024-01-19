import prismaClient from '../../prisma'

export class getByIDLocalColetaService {
    async execute(id: string) {

        try{
            const localColeta = await prismaClient.localColeta.findFirst({
                where:{
                    id: id
                }
            })

            return localColeta

        } catch(error){    
            throw new Error("Local Coleta not found")
        }
    }
}