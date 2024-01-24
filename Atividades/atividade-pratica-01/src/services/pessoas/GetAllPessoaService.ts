import prismaClient from '../../database'

export class getAllPessoaService {
    async execute() {

        const pessoas = await prismaClient.pessoa.findMany()

        return pessoas
    }
}