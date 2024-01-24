import prismaClient from '../../database'

export class getAllEstadoService {
    async execute() {

        const estados = await prismaClient.estado.findMany()

        return estados
    }
}