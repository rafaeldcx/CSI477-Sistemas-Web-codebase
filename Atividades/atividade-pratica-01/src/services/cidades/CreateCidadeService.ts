import prismaClient from '../../database'                                  // Importing prismaClient


interface createrCidadeProps{                                          // Defining the types of the params

    nome: string;
    estadoId: number;  

}

export class createCidadeService {
    async execute({nome, estadoId}: createrCidadeProps){                  // Defining the service

        if (!nome || !estadoId){ 
            throw new Error("Fill in all fields")
        }                                                                // Checking if params are missing

        const cidade = await prismaClient.cidade.create({  
            data:{
                nome, 
                estado: {
                    connect: {
                        id: estadoId,
                    },
                }
            }
        })                                                               // Creating cidade
                                                                        

        return cidade
    }
}