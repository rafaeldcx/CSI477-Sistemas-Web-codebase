import {FastifyRequest, FastifyReply} from 'fastify';
import { deleteDoacaoService } from '../../services/doacoes/DeleteDoacaoService';

export class DeleteDoacaoController {
    async handle(request: FastifyRequest, reply: FastifyReply){                     // Defining route handler

        const {id} = request.params as {id: string};                                // Getting body params                                                                                                           
        const doacaoService = new deleteDoacaoService();                            // Creating service instance
        const doacao = await doacaoService.execute({id: id});                       // Executing service
        reply.send(doacao);                                                         // Sending response                    
    }                                                                                        
}