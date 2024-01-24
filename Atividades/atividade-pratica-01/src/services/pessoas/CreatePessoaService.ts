import prismaClient from '../../database'                                  // Importing prismaClient


interface createrPessoaProps{                                          // Defining the types of the params

    nome: string;
    rua: string; 
    numero: string;
    complemento: string;
    cidadeId: number;
    rg: string;
    tipoId: number; 

}

export class createPessoaService {
    async execute({nome, rua, numero, complemento, cidadeId, rg, tipoId}: createrPessoaProps){                  // Defining the service

        if (!nome || !rua || !numero || !complemento || !cidadeId || !rg || !tipoId){ 
            throw new Error("Fill in all fields")
        }                                                                // Checking if params are missing

        const pessoa = await prismaClient.pessoa.create({  
            data:{
                nome, 
                rua,
                numero,
                complemento,
                cidade: {
                    connect: {
                        id: cidadeId,
                    },
                },
                rg,
                tipoSanguineo: {
                    connect: {
                        id: tipoId,
            },
        }, 
            }
        })                                                          

        return pessoa
    }
}
