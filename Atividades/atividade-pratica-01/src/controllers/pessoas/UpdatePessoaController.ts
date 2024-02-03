import {FastifyRequest, FastifyReply} from "fastify";
import { updatePessoaService } from "../../services/pessoas/UpdatePessoaService";

export class UpdatePessoaController {
    async handle(request: FastifyRequest, reply: FastifyReply){                                                 // Defining route handler

        const {id, nome, rua, numero, complemento, cidadeId, rg, tipoId } = request.body as {id: number, nome: string, rua: string, 
            numero: string, complemento: string, cidadeId: number, rg: string, tipoId: number};
        const pessoaService = new updatePessoaService();
        const pessoa = await pessoaService.execute(id, nome, rua, numero, complemento, cidadeId, rg, tipoId);                            // Executing service
        reply.send(pessoa);                                                                                     // Sending response                    
    }                                                                                        
}