import prismaClient from '../../database'

export class getByNomePessoaService {
    async execute(nome: string) {

        try{
            const pessoa = await prismaClient.pessoa.findFirst({
                where:{
                    nome: nome
                }
            })

            return pessoa

        } catch(error){    
            throw new Error("Pessoa not found")
        }
    }
}