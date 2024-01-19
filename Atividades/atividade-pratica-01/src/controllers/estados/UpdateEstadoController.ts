import {FastifyRequest, FastifyReply} from "fastify";
import { updateEstadoService } from "../../services/estados/UpdateEstadoService";

export class UpdateEstadoController {
    async handle(request: FastifyRequest, reply: FastifyReply){                                 // Defining route handler

        const {id, nome, sigla} = request.body as {id: string, nome: string, sigla: string};
        const estadoService = new updateEstadoService();
        const estado = await estadoService.execute(id, nome, sigla);                            // Executing service
        reply.send(estado);                                                                     // Sending response                    
    }                                                                                        
}