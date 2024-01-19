import {FastifyRequest, FastifyReply} from 'fastify';
import { deleteEstadoService } from '../../services/estados/DeleteEstadoService';

export class DeleteEstadoController {
    async handle(request: FastifyRequest, reply: FastifyReply){                     // Defining route handler

        const {id} = request.params as {id: string};                                // Getting body params                                                                                                           
        const estadoService = new deleteEstadoService();                            // Creating service instance
        const estado = await estadoService.execute({id: id});                       // Executing service
        reply.send(estado);                                                         // Sending response                    
    }                                                                                        
}