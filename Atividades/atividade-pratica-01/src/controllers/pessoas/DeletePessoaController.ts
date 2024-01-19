import {FastifyRequest, FastifyReply} from 'fastify';
import { deletePessoaService } from '../../services/pessoas/DeletePessoaService';

export class DeletePessoaController {
    async handle(request: FastifyRequest, reply: FastifyReply){                     // Defining route handler

        const {id, nome} = request.params as {id: string, nome:string};                                // Getting body params                                                                                                           
        const pessoaService = new deletePessoaService();                            // Creating service instance
        const pessoa = await pessoaService.execute({id: id, nome:nome});                       // Executing service
        reply.send(pessoa);                                                         // Sending response                    
    }                                                                                        
}