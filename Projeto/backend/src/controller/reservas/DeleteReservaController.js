import { prisma } from "../../database/client.js";

export class DeleteReservaController {
    async handle(request, response) {
        const { reserva_id } = request.body;

        try {
            const reserva = await prisma.reserva.delete({
                where: {
                    id: parseInt(reserva_id) 
                }
            });
            return response.json(reserva);
        } catch (error) {
            response.status(404).json({
                message: 'Invalid request.', error
            })
        }
    }
}