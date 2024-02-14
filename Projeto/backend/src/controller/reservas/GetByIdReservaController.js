import { prisma } from "../../database/client.js";

export class GetByIdReservaController {
    async handle(request, response) {
        const { reserva_id } = request.params;

        try{
            const reserva = await prisma.reserva.findUniqueOrThrow ({
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