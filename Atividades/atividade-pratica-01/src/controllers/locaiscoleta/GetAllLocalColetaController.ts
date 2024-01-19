import {FastifyRequest, FastifyReply} from "fastify";
import { getAllLocalColetaService } from "../../services/locaiscoleta/GetAllLocalColetaService";

export class GetAllLocalColetaController {
    async handle(request: FastifyRequest, reply: FastifyReply){                     // Defining route handler

        const localColetaService = new getAllLocalColetaService();                        // Creating service instance
        const localColeta = await localColetaService.execute();              // Executing service

        reply.send(localColeta);                                                       // Sending response                    
    }                                                                                        
}