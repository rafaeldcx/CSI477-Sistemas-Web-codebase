import {FastifyInstance, FastifyPluginOptions, FastifyRequest, FastifyReply} from "fastify";
import { CreateLocalColetaController } from "../controllers/locaiscoleta/CreateLocalColetaController";
import { DeleteLocalColetaController } from "../controllers/locaiscoleta/DeleteLocalColetaController";
import { GetAllLocalColetaController } from "../controllers/locaiscoleta/GetAllLocalColetaController";
import { GetByIDLocalColetaController } from "../controllers/locaiscoleta/GetByIDLocalColetaController";
import { UpdateLocalColetaController } from "../controllers/locaiscoleta/UpdateLocalColetaController";


export async function locaisColetasRoutes(instance: FastifyInstance, options: FastifyPluginOptions) {

    
    instance.get("/teste4", async (request: FastifyRequest, reply: FastifyReply) => {   
        return { ok: "true" };
    });

    instance.post("/locaiscoleta", async (request: FastifyRequest, reply: FastifyReply) => {
        return new CreateLocalColetaController().handle(request, reply);                                                        
    });   
    
    instance.get("/locaiscoleta", async (request: FastifyRequest, reply: FastifyReply) => {
        return new GetAllLocalColetaController().handle(request, reply);                                                        
    });   

    instance.get("/locaiscoleta/:id", async (request: FastifyRequest, reply: FastifyReply) => {
        return new GetByIDLocalColetaController().handle(request, reply);
    });

    instance.put("/locaiscoleta/:id", async (request: FastifyRequest, reply: FastifyReply) => {
        return new UpdateLocalColetaController().handle(request, reply);
    });

    instance.delete("/locaiscoleta/:id", async (request: FastifyRequest, reply: FastifyReply) => {
        return new DeleteLocalColetaController().handle(request, reply);
    });
}