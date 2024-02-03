import prismaClient from '../../database'

export class getByNomePessoaService {
    async execute(id: number) {

        try{
            const pessoa = await prismaClient.pessoa.findFirst({
                where:{
                    id: id
                }
            })

            return pessoa

        } catch(error){    
            throw new Error("Pessoa not found")
        }
    }
}