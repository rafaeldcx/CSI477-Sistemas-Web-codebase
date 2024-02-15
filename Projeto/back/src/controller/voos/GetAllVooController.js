import { prisma } from "../../database/client.js";

export class GetAllVooController {
    async handle(request, response) {
        try {
            const voo = await prisma.voo.findMany({
                include: {
                    aeroporto_origem: true,
                    aeroporto_destino: true 
                }
            });
            return response.json(voo);
        } catch (error) {
            console.error(error);
            return response.status(500).json({
                message: 'An error occurred while retrieving the clients.'
            });
        }
    }
}