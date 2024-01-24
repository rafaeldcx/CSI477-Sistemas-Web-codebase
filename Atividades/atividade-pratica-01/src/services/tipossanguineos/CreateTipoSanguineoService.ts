import prismaClient from '../../database'                                  // Importing prismaClient


interface createrTipoSanguineoProps{                                          // Defining the types of the params

   tipo: string;
   fator: string;

}

export class createTipoSanguineoService {
    async execute({tipo, fator}: createrTipoSanguineoProps){                  // Defining the service

        if (tipo==='' || fator ===''){ 
            throw new Error("Fill in all fields")
        }                                                                // Checking if params are missing

        const tipoSanguineo = await prismaClient.tipoSanguineo.create({  
            data:{
               tipo,
               fator
            }
        })                                                               // Creating tipoSanguineo
                                                                        

        return tipoSanguineo
    }
}