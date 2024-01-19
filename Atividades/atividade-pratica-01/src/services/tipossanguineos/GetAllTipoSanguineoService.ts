import prismaClient from '../../prisma'

export class getAllTipoSanguineoService {
    async execute() {

        const tiposSanguineos = await prismaClient.tipoSanguineo.findMany()

        return tiposSanguineos
    }
}