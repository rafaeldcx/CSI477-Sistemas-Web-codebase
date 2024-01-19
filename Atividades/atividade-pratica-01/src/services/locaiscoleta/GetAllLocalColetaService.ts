import prismaClient from '../../prisma'

export class getAllLocalColetaService {
    async execute() {

        const locaisColeta = await prismaClient.localColeta.findMany()

        return locaisColeta
    }
}