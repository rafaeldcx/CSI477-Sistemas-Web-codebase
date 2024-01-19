import { FastifyRequest, FastifyReply } from 'fastify'
import { createPessoaService } from '../../services/pessoas/CreatePessoaService';


export class CreatePessoaController {
    async handle(request: FastifyRequest, reply: FastifyReply){                     // Defining route handler

        const {nome, rua, numero, complemento, cidadeId, rg, tipoId} = request.body as {nome: string, 
            rua: string, numero: string, complemento: string, cidadeId: string, rg: string, tipoId: string};        // Getting body params                                                                                                           
        const pessoaService = new createPessoaService();                        // Creating service instance
        const pessoa = await pessoaService.execute({nome, rua, numero, complemento, cidadeId, rg, tipoId});              // Executing service

        reply.send(pessoa);                                                       // Sending response                    
    }  
}             