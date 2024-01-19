import { FastifyInstance, FastifyPluginOptions, FastifyRequest, FastifyReply } from 'fastify';
import { CreateTipoSanguineoController } from '../controllers/tipossanguineos/CreateTipoSanguineoController';
import { GetAllTipoSanguineoController } from '../controllers/tipossanguineos/GetAllTipoSanguineoController';
import { GetByIDTipoSanguineoController } from '../controllers/tipossanguineos/GetByIDTipoSanguineoController';
import { UpdateTipoSanguineoController } from '../controllers/tipossanguineos/UpdateTipoSanguineoController';
import { DeleteTipoSanguineoController } from '../controllers/tipossanguineos/DeleteTipoSanguineoController';

export async function tiposSanguineosRoutes(instance: FastifyInstance, options: FastifyPluginOptions) {

    instance.get("/", async (request: FastifyRequest, reply: FastifyReply) => {
        return { message: "Hello, world!" };
    });
    
    instance.get("/teste6", async (request: FastifyRequest, reply: FastifyReply) => {   
        return { ok: "true" };
    });

    instance.post("/tiposanguineo", async (request: FastifyRequest, reply: FastifyReply) => {
        return new CreateTipoSanguineoController().handle(request, reply);                                                        
    });   
    
    instance.get("/tipossanguineos", async (request: FastifyRequest, reply: FastifyReply) => {
        return new GetAllTipoSanguineoController().handle(request, reply);                                                        
    });   

    instance.get("/tiposanguineo/:id", async (request: FastifyRequest, reply: FastifyReply) => {
        return new GetByIDTipoSanguineoController().handle(request, reply);
    });

    instance.put("/tiposanguineo/:id", async (request: FastifyRequest, reply: FastifyReply) => {
        return new UpdateTipoSanguineoController().handle(request, reply);
    });

    instance.delete("/tiposanguineo/:id", async (request: FastifyRequest, reply: FastifyReply) => {
        return new DeleteTipoSanguineoController().handle(request, reply);
    });
}