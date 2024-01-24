import prismaClient from '../../database'

export class getByIDLocalColetaService {
    async execute(id: number) {

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