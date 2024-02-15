import { prisma } from "../../database/client.js";

export class GetAllPassageiroController {
    async handle(request, response) {
        try {
            const passageiro = await prisma.passageiro.findMany({
//                include: {
//                    reserva: true
//                }
            });
            return response.json(passageiro);
        } catch (error) {
            console.error(error);
            return response.status(500).json({
                message: 'An error occurred while retrieving the clients.'
            });
        }
    }
}