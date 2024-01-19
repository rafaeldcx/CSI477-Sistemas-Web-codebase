import { FastifyRequest, FastifyReply } from 'fastify'
import { createEstadoService } from '../../services/estados/CreateEstadoService';


export class CreateEstadoController {
    async handle(request: FastifyRequest, reply: FastifyReply){                     // Defining route handler

        const {nome, sigla} = request.body as {nome: string, sigla: string};        // Getting body params                                                                                                           
        const estadoService = new createEstadoService();                        // Creating service instance
        const estado = await estadoService.execute({nome, sigla});              // Executing service

        reply.send(estado);                                                       // Sending response                    
    }                                                                                        
}
