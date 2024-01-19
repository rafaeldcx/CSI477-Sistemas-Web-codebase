import { FastifyRequest, FastifyReply } from 'fastify'
import { createLocalColetaService } from '../../services/locaiscoleta/CreateLocalColetaService';


export class CreateLocalColetaController {
    async handle(request: FastifyRequest, reply: FastifyReply){                     // Defining route handler

        const {nome, rua, numero, complemento, cidadeId} = request.body as {nome: string, rua: string, numero:string, complemento: string, cidadeId: string};        // Getting body params                                                                                                           
        const localColetaService = new createLocalColetaService();                        // Creating service instance
        const localColeta = await localColetaService.execute({nome, rua, numero, complemento, cidadeId});              // Executing service

        reply.send(localColeta);                                                       // Sending response                    
    }               
}