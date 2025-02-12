import {FastifyInstance,FastifyPluginOptions, FastifyRequest, FastifyReply} from "fastify";
import { CreateCidadeController } from "../controllers/cidades/CreateCidadeController";
import { GetAllCidadeController } from "../controllers/cidades/GetAllCidadeController";
import { DeleteCidadeController } from "../controllers/cidades/DeleteCidadeController";
import { UpdateCidadeController } from "../controllers/cidades/UpdateCidadeController";
import { GetByIDCidadeController } from "../controllers/cidades/GetByIDCidadeController";

export async function cidadesRoutes(instance: FastifyInstance, options: FastifyPluginOptions) {       // Defining routes

    
    instance.get("/teste1", async (request: FastifyRequest, reply: FastifyReply) => {   
        return { ok: "true" };
    });                                                                                        // Defining route handler

    instance.post("/cidades", async (request: FastifyRequest, reply: FastifyReply) => {
        return new CreateCidadeController().handle(request, reply);                                                        
    });   
    
    instance.get("/cidades", async (request: FastifyRequest, reply: FastifyReply) => {
        return new GetAllCidadeController().handle(request, reply);                                                        
    });   

    instance.get("/cidades/:id", async (request: FastifyRequest, reply: FastifyReply) => {
        return new GetByIDCidadeController().handle(request, reply);
    });
       
    instance.delete("/cidades/:id", async (request: FastifyRequest, reply: FastifyReply) => {
        return new DeleteCidadeController().handle(request, reply);                                                        
    });   

    instance.put("/cidades/:id", async (request: FastifyRequest, reply: FastifyReply) => {
        return new UpdateCidadeController().handle(request, reply);                                                        
    }); 
    
}
