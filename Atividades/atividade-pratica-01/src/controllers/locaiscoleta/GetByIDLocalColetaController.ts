import {FastifyRequest, FastifyReply} from 'fastify';
import { getByIDLocalColetaService } from '../../services/locaiscoleta/GetByIDLocalColetaService';

export class GetByIDLocalColetaController {
    async handle(request: FastifyRequest, reply: FastifyReply){                     // Defining route handler

        const {id} = request.params as {id: string};                                // Getting body params                                                                                                           
        const localColetaService = new getByIDLocalColetaService();                           // Creating service instance
        const localColeta = await localColetaService.execute(id);                             // Executing service
        reply.send(localColeta);                                                         // Sending response                    
    }                                                                                        
}