import { FastifyRequest, FastifyReply } from 'fastify'
import { createDoacaoService } from '../../services/doacoes/CreateDoacaoService';


export class CreateDoacaoController {
    async handle(request: FastifyRequest, reply: FastifyReply){                                                   // Defining route handler

        const {pessoaId, localId, data} = request.body as {pessoaId: string, localId: string, data: Date};        // Getting body params                                                                                                           
        const doacaoService = new createDoacaoService();                                                          // Creating service instance
        const doacao = await doacaoService.execute({pessoaId, localId, data});                                    // Executing service

        reply.send(doacao);                                                                                       // Sending response                    
    }  
}             