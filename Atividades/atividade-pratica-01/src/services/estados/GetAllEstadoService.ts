import prismaClient from '../../prisma'

export class getAllEstadoService {
    async execute() {

        const estados = await prismaClient.estado.findMany()

        return estados
    }
}