import prismaClient from '../../prisma'

export class getAllPessoaService {
    async execute() {

        const pessoas = await prismaClient.pessoa.findMany()

        return pessoas
    }
}