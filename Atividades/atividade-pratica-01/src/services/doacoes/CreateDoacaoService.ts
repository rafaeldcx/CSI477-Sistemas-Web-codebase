import prismaClient from '../../prisma'                                  // Importing prismaClient


interface createrDoacaoProps{                                          // Defining the types of the params

    pessoaId: string;
    localId: string;
    data: Date;  

}

export class createDoacaoService {
    async execute({pessoaId, localId, data}: createrDoacaoProps){                  // Defining the service

        if (!pessoaId || !localId || !data){ 
            throw new Error("Fill in all fields")
        }                                                                // Checking if params are missing

        const doacao = await prismaClient.doacao.create({  
            data:{
                pessoaId, 
                localId,
                data 
            }
        })                                                               // Creating doacao
                                                                        

        return doacao
    }
}
