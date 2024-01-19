import {FastifyRequest, FastifyReply} from "fastify";
import { getAllEstadoService } from "../../services/estados/GetAllEstadoService";

export class GetAllEstadoController {
    async handle(request: FastifyRequest, reply: FastifyReply){                     // Defining route handler

        const estadoService = new getAllEstadoService();                        // Creating service instance
        const estado = await estadoService.execute();              // Executing service

        reply.send(estado);                                                       // Sending response                    
    }                                                                                        
}