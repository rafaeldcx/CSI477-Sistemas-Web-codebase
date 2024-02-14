import { prisma } from "../../database/client.js";

export class GetByIdAeroportoController {
    async handle(request, response) {
        const { aeroporto_id } = request.params;

        try{
            const aeroporto = await prisma.aeroporto.findUniqueOrThrow ({
                where: {
                    id: parseInt(aeroporto_id)
                }
            });
            return response.json(aeroporto);
        } catch (error) {
            response.status(404).json({
                message: 'Invalid request.', error
            })
        }
    }
}