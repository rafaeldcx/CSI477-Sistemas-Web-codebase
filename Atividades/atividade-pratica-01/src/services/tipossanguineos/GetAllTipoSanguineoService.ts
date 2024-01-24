import prismaClient from '../../database'

export class getAllTipoSanguineoService {
    async execute() {

        const tiposSanguineos = await prismaClient.tipoSanguineo.findMany()

        return tiposSanguineos
    }
}