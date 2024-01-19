import { FastifyRequest, FastifyReply } from 'fastify'
import { createCidadeService } from '../../services/cidades/CreateCidadeService';


export class CreateCidadeController {
    async handle(request: FastifyRequest, reply: FastifyReply){                           // Defining route handler

        const {nome, estadoId} = request.body as {nome: string, estadoId: string};        // Getting body params                                                                                                           
        const cidadeService = new createCidadeService();                                  // Creating service instance
        const cidade = await cidadeService.execute({nome, estadoId});                     // Executing service

        reply.send(cidade);                                                               // Sending response                    
    }                                                                                        
}
