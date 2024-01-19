import { FastifyRequest, FastifyReply } from 'fastify'
import { createTipoSanguineoService } from '../../services/tipossanguineos/CreateTipoSanguineoService';


export class CreateTipoSanguineoController {
    async handle(request: FastifyRequest, reply: FastifyReply){                     // Defining route handler

        const {tipo, fator} = request.body as {tipo: string, fator: string};        // Getting body params                                                                                                           
        const tipoSanguineoService = new createTipoSanguineoService();                        // Creating service instance
        const tipoSanguineo = await tipoSanguineoService.execute({fator, tipo});              // Executing service

        reply.send(tipoSanguineo);                                                       // Sending response                    
    }               
}