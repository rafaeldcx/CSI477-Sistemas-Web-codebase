import prismaClient from '../../database'

export class getAllCidadeService {
    async execute() {

        const cidades = await prismaClient.cidade.findMany()

        return cidades
    }
}