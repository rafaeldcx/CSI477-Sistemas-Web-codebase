import { prisma } from "../../database/client.js";

export class GetAllReservaController {
    async handle(request, response) {
        try {
            const reserva = await prisma.reserva.findMany({
                include: {
                    voo: true,
                    passageiro: true
                }
            });
            return response.json(reserva);
        } catch (error) {
            console.error(error);
            return response.status(500).json({
                message: 'An error occurred while retrieving the clients.'
            });
        }
    }
}