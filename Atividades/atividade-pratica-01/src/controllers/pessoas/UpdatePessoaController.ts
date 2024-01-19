import {FastifyRequest, FastifyReply} from "fastify";
import { updatePessoaService } from "../../services/pessoas/UpdatePessoaService";

export class UpdatePessoaController {
    async handle(request: FastifyRequest, reply: FastifyReply){                                                 // Defining route handler

        const {id, nome, rua, numero, complemento, cidadeId, rg, tipoId } = request.body as {id: string, nome: string, rua: string, 
            numero: string, complemento: string, cidadeId: string, rg: string, tipoId: string};
        const pessoaService = new updatePessoaService();
        const pessoa = await pessoaService.execute(id, nome, rua, numero, complemento, cidadeId, rg, tipoId);                            // Executing service
        reply.send(pessoa);                                                                                     // Sending response                    
    }                                                                                        
}