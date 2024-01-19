import {FastifyRequest, FastifyReply} from "fastify";
import { getAllDoacaoService } from "../../services/doacoes/GetAllDoacaoService";

export class GetAllDoacaoController {
    async handle(request: FastifyRequest, reply: FastifyReply){                     // Defining route handler

        const doacaoService = new getAllDoacaoService();                            // Creating service instance
        const doacao = await doacaoService.execute();                               // Executing service

        reply.send(doacao);                                                         // Sending response                    
    }                                                                                        
}