import { prisma } from "../../database/client.js";

export class UpdateVooController {
    async handle(request, response) {
        const { voo_id, numero_voo, aeroporto_origem_id, aeroporto_destino_id, hora_partida, hora_chegada } = request.body;
        
        if (!voo_id || !numero_voo || !aeroporto_origem_id || !aeroporto_destino_id || !hora_partida || !hora_chegada) {
            return response.status(400).json({
                message: 'Invalid data. ID, Number, Origem, Destino, Hora de Partida and Hora de Chegada are required.'
            });
        }

        try {
            const voo = await prisma.voo.update({
                where: {
                    id: parseInt(voo_id)
                },
                data: {
                    numero_voo,
                    aeroporto_origem: { connect: { id: aeroporto_origem_id } },
                    aeroporto_destino: { connect: { id: aeroporto_destino_id } },
                    hora_partida,
                    hora_chegada
                }
            });
            
            if (!voo) {
                return response.status(404).json({
                    message: 'Passageiro not found.'
                });
            }

            return response.json(voo);
        } catch (error) {
            console.error(error);
            return response.status(500).json({
                message: 'An error occurred while updating the passageiro.'
            });
        }
    }
}