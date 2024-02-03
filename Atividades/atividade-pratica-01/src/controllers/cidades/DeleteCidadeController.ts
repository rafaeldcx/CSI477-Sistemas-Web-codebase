import {FastifyRequest, FastifyReply} from 'fastify';
import { DeleteCidadeService } from '../../services/cidades/DeleteCidadeService';

export class DeleteCidadeController {
    async handle(request: FastifyRequest, reply: FastifyReply){
        const {id} = request.params as {id: string};
        const cidadeService = new DeleteCidadeService();
        const cidade = await cidadeService.execute(Number(id));
        reply.send(cidade);
    }
}