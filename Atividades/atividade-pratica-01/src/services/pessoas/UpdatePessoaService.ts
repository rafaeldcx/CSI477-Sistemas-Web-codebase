import prismaClient from "../../database";

export class updatePessoaService {
    async execute(id: number, nome: string, rua: string, numero: string, 
        complemento: string, cidadeId: number, rg: string, tipoId: number) {

        if(!id){
            throw new Error("Invalid Request")
        }

        const findPessoa = await prismaClient.pessoa.findFirst({
            where:{
                id: id
            }
        })
    
        if(!findPessoa){
            throw new Error("Pessoa not found")
        }

       const pessoa = await prismaClient.pessoa.update({
            where: {
                id: findPessoa.id
            },
            data:{
                nome: nome, 
                rua: rua,
                numero: numero,
                complemento: complemento,
                cidade: {
                    connect: {
                        id: cidadeId
                    }
                },
                rg: rg,
                tipoSanguineo: {
                    connect: {
                        id: tipoId
                    }
                }
            }
        })

        return pessoa
    }
}