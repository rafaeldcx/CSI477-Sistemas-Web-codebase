import {FastifyRequest, FastifyReply} from "fastify";
import { getAllCidadeService } from "../../services/cidades/GetAllCidadeService";

export class GetAllCidadeController {
    async handle(request: FastifyRequest, reply: FastifyReply){                     // Defining route handler

        const cidadeService = new getAllCidadeService();                        // Creating service instance
        const cidade = await cidadeService.execute();              // Executing service

        reply.send(cidade);                                                       // Sending response                    
    }                                                                                        
}