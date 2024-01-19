import {FastifyRequest, FastifyReply} from 'fastify';
import { getByNomePessoaService } from '../../services/pessoas/GetByNomePessoaService';

export class GetByNomePessoaController {
    async handle(request: FastifyRequest, reply: FastifyReply){                       // Defining route handler

        const {nome} = request.params as {nome:string};                               // Getting body params                                                                                                           
        const pessoaService = new getByNomePessoaService();                           // Creating service instance
        const pessoa = await pessoaService.execute(nome);                             // Executing service
        reply.send(pessoa);                                                           // Sending response                    
    }                                                                                        
}