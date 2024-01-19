import {FastifyRequest, FastifyReply} from "fastify";
import { updateDoacaoService } from "../../services/doacoes/UpdateDoacaoService";

export class UpdateDoacaoController {
    async handle(request: FastifyRequest, reply: FastifyReply){                                             // Defining route handler

        const {id, pessoaId, localId, data} = request.body as {id: string, pessoaId: string, localId: string, data: Date};
        const doacaoService = new updateDoacaoService();
        const doacao = await doacaoService.execute(id, pessoaId, localId, data);                            // Executing service
        reply.send(doacao);                                                                                 // Sending response                    
    }                                                                                        
}