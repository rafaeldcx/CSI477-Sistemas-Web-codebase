import fastify from "fastify";
import fastifyCors from "@fastify/cors";                  
import { cidadesRoutes } from "./routes/cidades";
import { estadosRoutes } from "./routes/estados";
import { doacoesRoutes } from "./routes/doacoes";
import { locaisColetasRoutes } from "./routes/locaiscoleta";
import { pessoasRoutes } from "./routes/pessoas";
import { tiposSanguineosRoutes } from "./routes/tipossanguineos";
                         

const app = fastify({ logger: true });                               // Creating Fastify instance

const start = async () => {                                          // Defining start function                                      

    await app.register(fastifyCors, { origin: "*" });
    await app.register(cidadesRoutes);
    await app.register(estadosRoutes);
    await app.register(doacoesRoutes);
    await app.register(locaisColetasRoutes);
    await app.register(pessoasRoutes);
    await app.register(tiposSanguineosRoutes);

    try{
        await app.listen({ port: 3333 });
    }catch(err){
        process.exit(1);
    }
}

start();

