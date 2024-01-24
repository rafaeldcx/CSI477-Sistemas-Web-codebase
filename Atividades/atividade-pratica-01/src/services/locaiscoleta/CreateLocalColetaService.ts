import prismaClient from '../../database'                                  // Importing prismaClient


interface createrLocalColetaProps{                                          // Defining the types of the params

    nome: string;
    rua: string;
    numero: string;
    complemento: string;
    cidadeId: number;  

}

export class createLocalColetaService {
    async execute({nome, rua, numero, complemento, cidadeId}: createrLocalColetaProps){                  // Defining the service

        if (!nome || !rua || !numero || !complemento || !cidadeId){ 
            throw new Error("Fill in all fields")
        }                                                                // Checking if params are missing

        const localColeta = await prismaClient.localColeta.create({  
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
            }
        })                                                               // Creating customer
                                                                        

        return localColeta
    }
}
