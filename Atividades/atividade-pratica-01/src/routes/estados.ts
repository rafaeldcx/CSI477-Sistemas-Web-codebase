import { FastifyInstance, FastifyPluginOptions, FastifyRequest, FastifyReply } from "fastify"  // Importing Fastify types
import { CreateEstadoController } from "../controllers/estados/CreateEstadoController"         // Importing controller              
import { GetAllEstadoController } from "../controllers/estados/GetAllEstadoController";
import { DeleteEstadoController } from "../controllers/estados/DeleteEstadoController";
import { UpdateEstadoController } from "../controllers/estados/UpdateEstadoController";
import { GetByIDEstadoController } from "../controllers/estados/GetByIDEstadoController";

export async function estadosRoutes(instance: FastifyInstance, options: FastifyPluginOptions) {       // Defining routes

    
    instance.get("/teste3", async (request: FastifyRequest, reply: FastifyReply) => {   
        return { ok: "true" };
    });                                                                                        // Defining route handler

    instance.post("/estado", async (request: FastifyRequest, reply: FastifyReply) => {
        return new CreateEstadoController().handle(request, reply);                                                        
    });   
    
    instance.get("/estados", async (request: FastifyRequest, reply: FastifyReply) => {
        return new GetAllEstadoController().handle(request, reply);                                                        
    });   

    instance.get("/estado/:id", async (request: FastifyRequest, reply: FastifyReply) => {
        return new GetByIDEstadoController().handle(request, reply);
    });
       
    instance.delete("/estado/:id", async (request: FastifyRequest, reply: FastifyReply) => {
        return new DeleteEstadoController().handle(request, reply);                                                        
    });   

    instance.put("/estado/:id", async (request: FastifyRequest, reply: FastifyReply) => {
        return new UpdateEstadoController().handle(request, reply);                                                        
    }); 
    
}

