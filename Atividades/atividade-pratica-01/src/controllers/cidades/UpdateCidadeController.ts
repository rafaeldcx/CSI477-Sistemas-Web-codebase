import {FastifyRequest, FastifyReply} from "fastify";
import { updateCidadeService } from "../../services/cidades/UpdateCidadeService";

export class UpdateCidadeController {
    async handle(request: FastifyRequest, reply: FastifyReply){                                     // Defining route handler

        const {id, nome, estadoId} = request.body as {id: number, nome: string, estadoId: number};
        const cidadeService = new updateCidadeService();
        const estado = await cidadeService.execute(id, nome, estadoId);                             // Executing service
        reply.send(estado);                                                                         // Sending response                    
    }                                                                                        
}