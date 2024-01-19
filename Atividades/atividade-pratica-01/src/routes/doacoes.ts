import {FastifyInstance, FastifyPluginOptions, FastifyRequest, FastifyReply} from "fastify";
import { CreateDoacaoController } from "../controllers/doacoes/CreateDoacaoController";
import { DeleteDoacaoController } from "../controllers/doacoes/DeleteDoacaoController";
import { GetAllDoacaoController } from "../controllers/doacoes/GetAllDoacaoController";
import { GetByIDDoacaoController } from "../controllers/doacoes/GetByIDDoacaoController";
import { UpdateDoacaoController } from "../controllers/doacoes/UpdateDoacaoController";


export async function doacoesRoutes(instance: FastifyInstance, options: FastifyPluginOptions) {

    
    instance.get("/teste2", async (request: FastifyRequest, reply: FastifyReply) => {   
        return { ok: "true" };
    });

    instance.post("/doacao", async (request: FastifyRequest, reply: FastifyReply) => {
        return new CreateDoacaoController().handle(request, reply);                                                        
    });   
    
    instance.get("/doacoes", async (request: FastifyRequest, reply: FastifyReply) => {
        return new GetAllDoacaoController().handle(request, reply);                                                        
    });   

    instance.get("/doacao/:id", async (request: FastifyRequest, reply: FastifyReply) => {
        return new GetByIDDoacaoController().handle(request, reply);
    });

    instance.put("/doacao/:id", async (request: FastifyRequest, reply: FastifyReply) => {
        return new UpdateDoacaoController().handle(request, reply);
    });

    instance.delete("/doacao/:id", async (request: FastifyRequest, reply: FastifyReply) => {
        return new DeleteDoacaoController().handle(request, reply);
    });
}