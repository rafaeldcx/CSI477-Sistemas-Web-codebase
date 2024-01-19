import {FastifyRequest, FastifyReply} from 'fastify';
import { deleteLocalColetaService } from '../../services/locaiscoleta/DeleteLocalColetaService';

export class DeleteLocalColetaController {
    async handle(request: FastifyRequest, reply: FastifyReply){                     // Defining route handler

        const {id} = request.params as {id: string};                                // Getting body params                                                                                                           
        const localColetaService = new deleteLocalColetaService();                            // Creating service instance
        const localColeta = await localColetaService.execute({id: id});                       // Executing service
        reply.send(localColeta);                                                         // Sending response                    
    }                                                                                        
}