import {FastifyRequest, FastifyReply} from 'fastify';
import { getByIDTipoSanguineoService } from '../../services/tipossanguineos/GetByIDTipoSanguineoService';

export class GetByIDTipoSanguineoController {
    async handle(request: FastifyRequest, reply: FastifyReply){                     // Defining route handler

        const {id} = request.params as {id: string};        // Getting body params                                                                                                           
        const tipoSanguineoService = new getByIDTipoSanguineoService();                        // Creating service instance
        const tipoSanguineo = await tipoSanguineoService.execute(id);              // Executing service
        reply.send(tipoSanguineo);                                                       // Sending response                    
    }                                                                                        
}