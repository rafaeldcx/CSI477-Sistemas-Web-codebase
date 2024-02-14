import { prisma } from "../../database/client.js";

export class GetAllAeroportoController {
    async handle(request, response) {
        try {
            const aeroporto = await prisma.aeroporto.findMany({
                include: {
                    voos_origem: true,
                    voos_destino: true
                }
            });
            return response.json(aeroporto);
        } catch (error) {
            console.error(error);
            return response.status(500).json({
                message: 'An error occurred while retrieving the clients.'
            });
        }
    }
}