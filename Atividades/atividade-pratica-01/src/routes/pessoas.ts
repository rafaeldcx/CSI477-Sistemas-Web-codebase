import { FastifyInstance, FastifyPluginOptions, FastifyRequest, FastifyReply } from 'fastify';
import { CreatePessoaController } from '../controllers/pessoas/CreatePessoaController';
import { GetAllPessoaController } from '../controllers/pessoas/GetAllPessoaController';
import { GetByNomePessoaController } from '../controllers/pessoas/GetByNomePessoaControler';
import { UpdatePessoaController } from '../controllers/pessoas/UpdatePessoaController';
import { DeletePessoaController } from '../controllers/pessoas/DeletePessoaController';

export async function pessoasRoutes(instance: FastifyInstance, options: FastifyPluginOptions) {

    
    instance.get("/teste5", async (request: FastifyRequest, reply: FastifyReply) => {   
        return { ok: "true" };
    });

    instance.post("/pessoa", async (request: FastifyRequest, reply: FastifyReply) => {
        return new CreatePessoaController().handle(request, reply);                                                        
    });   
    
    instance.get("/pessoas", async (request: FastifyRequest, reply: FastifyReply) => {
        return new GetAllPessoaController().handle(request, reply);                                                        
    });   

    instance.get("/pessoa/:nome", async (request: FastifyRequest, reply: FastifyReply) => {
        return new GetByNomePessoaController().handle(request, reply);
    });

    instance.put("/pessoa/:id", async (request: FastifyRequest, reply: FastifyReply) => {
        return new UpdatePessoaController().handle(request, reply);
    });

    instance.delete("/pessoa/:id", async (request: FastifyRequest, reply: FastifyReply) => {
        return new DeletePessoaController().handle(request, reply);
    });
}
