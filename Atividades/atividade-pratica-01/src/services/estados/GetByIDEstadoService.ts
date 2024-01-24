import prismaClient from '../../database'

export class getByIDEstadoService {
    async execute(id: number) {

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