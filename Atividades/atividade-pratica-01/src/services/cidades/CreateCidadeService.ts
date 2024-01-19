import prismaClient from '../../prisma'                                  // Importing prismaClient


interface createrCidadeProps{                                          // Defining the types of the params

    nome: string;
    estadoId: string;  

}

export class createCidadeService {
    async execute({nome, estadoId}: createrCidadeProps){                  // Defining the service

        if (nome==='' || estadoId ===''){ 
            throw new Error("Fill in all fields")
        }                                                                // Checking if params are missing

        const cidade = await prismaClient.cidade.create({  
            data:{
                nome, 
                estadoId 
            }
        })                                                               // Creating cidade
                                                                        

        return cidade
    }
}