import { prisma } from "../../database/client.js";

export class DeletePassageiroController {
    async handle(request, response) {
        const { id } = request.body;

        try {
            await prisma.reserva.deleteMany({
                where: {
                    passageiro_id: parseInt(id),
                },
            });
            const passageiro = await prisma.passageiro.delete({
                where: {
                    id: parseInt(id),
                },
            });

            return response.json(passageiro);
        } catch (error) {
            console.error(error);
            response.status(500).json({
                message: 'Erro ao excluir o passageiro.', error
            });
        }
    }
}
