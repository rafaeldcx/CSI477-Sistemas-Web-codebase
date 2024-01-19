import prismaClient from '../../prisma'

export class getByIDTipoSanguineoService {
    async execute(id: string) {

        try{
            const tipoSanguineo = await prismaClient.tipoSanguineo.findFirst({
                where:{
                    id: id
                }
            })

            return tipoSanguineo

        } catch(error){    
            throw new Error("Tipo Sanguineo not found")
        }
    }
}