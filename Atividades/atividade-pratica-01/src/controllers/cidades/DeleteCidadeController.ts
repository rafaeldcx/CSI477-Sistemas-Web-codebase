import {FastifyRequest, FastifyReply} from 'fastify';
import { deleteCidadeService } from '../../services/cidades/DeleteCidadeService';

export class DeleteCidadeController {
    async handle(request: FastifyRequest, reply: FastifyReply){                     // Defining route handler

        const {id} = request.params as {id: number};                                // Getting body params                                                                                                           
        const cidadeService = new deleteCidadeService();                            // Creating service instance
        const cidade = await cidadeService.execute(id);                       // Executing service
        reply.send(cidade);                                                         // Sending response                    
    }                                                                                        
}