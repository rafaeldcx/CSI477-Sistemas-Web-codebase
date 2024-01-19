import prismaClient from '../../prisma'

export class getAllDoacaoService {
    async execute() {

        const doacoes = await prismaClient.doacao.findMany()

        return doacoes
    }
}