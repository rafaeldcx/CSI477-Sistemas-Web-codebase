import { prisma } from "../../database/client.js";

export class UpdateReservaController {
    async handle(request, response) {
        const { reserva_id, nome_reserva, voo_id, passageiro_id, data } = request.body;

        if (!nome_reserva || !voo_id || !passageiro_id || !data ) {
            return response.status(400).json({
                message: 'Invalid data. Nome da reserva, ID do voo, ID do passageiro e data são obrigatórios.'
            });
        }

        const vooExists = await prisma.voo.findUnique({ where: { id: voo_id } });
        const passageiroExists = await prisma.passageiro.findUnique({ where: { id: passageiro_id } });

        if (!vooExists || !passageiroExists) {
            return response.status(404).json({
                message: 'Voo or Passageiro not found.'
            });
        }

        try {
            const reserva = await prisma.reserva.update({
                where: {
                    id: parseInt(reserva_id)
                },
                data: {
                    nome_reserva,
                    voo: { connect: { id: voo_id } },
                    passageiro: { connect: { id: passageiro_id } },
                    data
                }
            });

            if (!reserva) {
                return response.status(404).json({
                    message: 'Passageiro not found.'
                });
            }

            return response.json(reserva);
        } catch (error) {
            console.error(error);
            return response.status(500).json({
                message: 'An error occurred while updating the passageiro.'
            });
        }
    }
}