import prismaClient from '../../database'                                  // Importing prismaClient


interface createrEstadoProps{                                          // Defining the types of the params

    nome: string;
    sigla: string;  

}

export class createEstadoService {
    async execute({nome, sigla}: createrEstadoProps){                  // Defining the service

        if (nome==='' || sigla ===''){ 
            throw new Error("Fill in all fields")
        }                                                                // Checking if params are missing

        const estado = await prismaClient.estado.create({  
            data:{
                nome, 
                sigla 
            }
        })                                                               // Creating customer
                                                                        

        return estado
    }
}


