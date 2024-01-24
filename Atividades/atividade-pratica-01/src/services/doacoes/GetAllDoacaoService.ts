import prismaClient from '../../database'

export class getAllDoacaoService {
    async execute() {

        const doacoes = await prismaClient.doacao.findMany()

        return doacoes
    }
}