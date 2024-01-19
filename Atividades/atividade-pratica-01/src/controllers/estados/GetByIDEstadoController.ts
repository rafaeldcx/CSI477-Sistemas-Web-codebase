import {FastifyRequest, FastifyReply} from 'fastify';
import { getByIDEstadoService } from '../../services/estados/GetByIDEstadoService';

export class GetByIDEstadoController {
    async handle(request: FastifyRequest, reply: FastifyReply){                     // Defining route handler

        const {id} = request.params as {id: string};        // Getting body params                                                                                                           
        const estadoService = new getByIDEstadoService();                        // Creating service instance
        const estado = await estadoService.execute(id);              // Executing service
        reply.send(estado);                                                       // Sending response                    
    }                                                                                        
}