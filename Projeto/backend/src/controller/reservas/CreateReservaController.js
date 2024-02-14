import { prisma } from '../../database/client.js'

export class CreateReservaController {
    async handle(request, response) {
        const { nome_reserva, voo_id, passageiro_id, data } = request.body;

        if (!nome_reserva || !voo_id || !passageiro_id || !data) {
            return response.status(400).json({
                message: 'Invalid data. Nome da reserva, ID do voo, ID do passageiro e data são obrigatórios.'
            });
        }

        try {
            const voo = await prisma.voo.findUnique({ where: { id: voo_id } });
            const passageiro = await prisma.passageiro.findUnique({ where: { id: passageiro_id } });

            if (!voo) {
                return response.status(404).json({ message: 'Voo not found.' });
            }

            if (!passageiro) {
                return response.status(404).json({ message: 'Passageiro not found.' });
            }

            const reserva = await prisma.reserva.create({
                data: {
                    nome_reserva,
                    data,
                    passageiro: {
                        connect: {
                            id: passageiro_id
                        }
                    },
                    voo: {
                        connect: {
                            id: voo_id
                        }
                    }
                }
            });

            return response.json(reserva);
        } catch (error) {
            console.error(error);

            if (error.code === 'P2002') {
                return response.status(400).json({
                    message: 'There is a unique constraint violation, a new reserva cannot be created with this data.'
                });
            }

            return response.status(500).json({
                message: 'An error occurred while creating the reserva.'
            });
        }
    }
}
