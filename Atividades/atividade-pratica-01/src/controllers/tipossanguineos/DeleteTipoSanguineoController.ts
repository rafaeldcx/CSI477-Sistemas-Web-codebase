import {FastifyRequest, FastifyReply} from 'fastify';
import { deleteTipoSanguineoService } from '../../services/tipossanguineos/DeleteTipoSanguineoService';

export class DeleteTipoSanguineoController {
    async handle(request: FastifyRequest, reply: FastifyReply){                     // Defining route handler

        const {id} = request.params as {id: string};                                // Getting body params                                                                                                           
        const tipoSanguineoService = new deleteTipoSanguineoService();                            // Creating service instance
        const tipoSanguineo = await tipoSanguineoService.execute({id: id});                       // Executing service
        reply.send(tipoSanguineo);                                                         // Sending response                    
    }                                                                                        
}