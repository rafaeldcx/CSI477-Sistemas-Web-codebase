import {FastifyRequest, FastifyReply} from "fastify";
import { getAllPessoaService } from "../../services/pessoas/GetAllPessoaService";

export class GetAllPessoaController {
    async handle(request: FastifyRequest, reply: FastifyReply){                     // Defining route handler

        const pessoaService = new getAllPessoaService();                            // Creating service instance
        const pessoa = await pessoaService.execute();                               // Executing service

        reply.send(pessoa);                                                         // Sending response                    
    }                                                                                        
}