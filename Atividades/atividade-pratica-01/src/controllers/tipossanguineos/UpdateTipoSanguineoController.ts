import {FastifyRequest, FastifyReply} from "fastify";
import { updateTipoSanguineoService } from "../../services/tipossanguineos/UpdateTipoSanguineoService";

export class UpdateTipoSanguineoController {
    async handle(request: FastifyRequest, reply: FastifyReply){                                               // Defining route handler

        const {id, tipo, fator} = request.body as {id: string, tipo: string, fator: string};
        const tipoSanguineoService = new updateTipoSanguineoService();
        const tipoSanguineo = await tipoSanguineoService.execute(id, tipo, fator);                            // Executing service
        reply.send(tipoSanguineo);                                                                            // Sending response                    
    }                                                                                        
}