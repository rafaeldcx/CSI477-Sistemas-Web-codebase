import prismaClient from '../../prisma'

export class getByIDEstadoService {
    async execute(id: string) {

        try{
            const estado = await prismaClient.estado.findFirst({
                where:{
                    id: id
                }
            })

            return estado

        } catch(error){    
            throw new Error("Estado not found")
        }
    }
}