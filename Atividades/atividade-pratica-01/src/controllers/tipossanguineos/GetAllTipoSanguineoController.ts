import {FastifyRequest, FastifyReply} from "fastify";
import { getAllTipoSanguineoService } from "../../services/tipossanguineos/GetAllTipoSanguineoService";

export class GetAllTipoSanguineoController {
    async handle(request: FastifyRequest, reply: FastifyReply){                               // Defining route handler

        const tipoSanguineoService = new getAllTipoSanguineoService();                        // Creating service instance
        const tipoSanguineo = await tipoSanguineoService.execute();                           // Executing service

        reply.send(tipoSanguineo);                                                            // Sending response                    
    }                                                                                        
}