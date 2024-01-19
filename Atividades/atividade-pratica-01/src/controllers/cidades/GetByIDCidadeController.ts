import {FastifyRequest, FastifyReply} from 'fastify';
import { getByIDCidadeService } from '../../services/cidades/GetByIDCidadeService';

export class GetByIDCidadeController {
    async handle(request: FastifyRequest, reply: FastifyReply){                     // Defining route handler

        const {id} = request.params as {id: string};        // Getting body params                                                                                                           
        const cidadeService = new getByIDCidadeService();                        // Creating service instance
        const cidade = await cidadeService.execute(id);              // Executing service
        reply.send(cidade);                                                       // Sending response                    
    }                                                                                        
}