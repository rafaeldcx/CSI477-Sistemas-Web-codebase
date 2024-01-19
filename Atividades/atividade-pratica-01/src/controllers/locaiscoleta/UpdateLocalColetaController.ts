import {FastifyRequest, FastifyReply} from "fastify";
import { updateLocalColetaService } from "../../services/locaiscoleta/UpdateLocalColetaService";

export class UpdateLocalColetaController {
    async handle(request: FastifyRequest, reply: FastifyReply){                                             // Defining route handler

        const {id, nome, rua, numero, complemento, cidadeId} = request.body as {id: string, nome: string, 
            rua: string, numero: string, complemento: string, cidadeId: string};
        const localColetaService = new updateLocalColetaService();
        const localColeta = await localColetaService.execute(id, nome, rua, numero, complemento, cidadeId);                            // Executing service
        reply.send(localColeta);                                                                            // Sending response                    
    }                                                                                        
}