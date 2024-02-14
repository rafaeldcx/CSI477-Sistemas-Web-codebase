import { prisma } from '../../database/client.js'

export class CreateVooController {
    async handle(request, response) {
        const { numero_voo, aeroporto_origem_id, aeroporto_destino_id, hora_partida, hora_chegada } = request.body;
        
        if (!numero_voo || !aeroporto_origem_id || !aeroporto_destino_id || !hora_partida || !hora_chegada) {
            return response.status(400).json({
                message: 'Invalid data. Number, Origem, Destino, Hora de Partida and Hora de Chegada are required.'
            });
        }

        // Verifique se os aeroportos existem
        const origem = await prisma.aeroporto.findUnique({ where: { id: aeroporto_origem_id } });
        const destino = await prisma.aeroporto.findUnique({ where: { id: aeroporto_destino_id } });

        if (!origem || !destino) {
            return response.status(400).json({
                message: 'Origem or Destino airport does not exist.'
            });
        }
        
        try {
            const voo = await prisma.voo.create({
                data: {
                    numero_voo,
                    aeroporto_origem_id,
                    aeroporto_destino_id,
                    hora_partida,
                    hora_chegada
                }
            });
            return response.json(voo);
        } catch (error) {
            console.error(error);
            return response.status(500).json({
                message: 'An error occurred while creating the voo.'
            });
        }
    }
}