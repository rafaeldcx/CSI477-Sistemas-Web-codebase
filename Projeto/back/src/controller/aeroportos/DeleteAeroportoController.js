import { prisma } from "../../database/client.js";

export class DeleteAeroportoController {
    async handle(request, response) {
        const { id } = request.body;

        try {
            await prisma.reserva.deleteMany({
                where: {
                    id: parseInt(id),
                },
            });
            const aeroporto = await prisma.aeroporto.delete({
                where: {
                    id: parseInt(id),
                },
            });

            return response.json(aeroporto);
        } catch (error) {
            console.error(error);
            response.status(500).json({
                message: 'Erro ao excluir o aeroporto.', error
            });
        }
    }
}
