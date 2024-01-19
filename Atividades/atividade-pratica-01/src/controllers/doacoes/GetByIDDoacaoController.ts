import {FastifyRequest, FastifyReply} from 'fastify';
import { getByIDDoacaoService } from '../../services/doacoes/GetByIDDoacaoService';

export class GetByIDDoacaoController {
    async handle(request: FastifyRequest, reply: FastifyReply){                     // Defining route handler

        const {id} = request.params as {id: string};                                // Getting body params                                                                                                           
        const doacaoService = new getByIDDoacaoService();                           // Creating service instance
        const doacao = await doacaoService.execute(id);                             // Executing service
        reply.send(doacao);                                                         // Sending response                    
    }                                                                                        
}