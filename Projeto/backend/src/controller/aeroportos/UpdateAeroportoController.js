import { prisma } from "../../database/client.js";

export class UpdateAeroportoController {
    async handle(request, response) {
        const { aeroporto_id, nome, cidade, pais } = request.body;

        if (!aeroporto_id || !nome || !cidade || !pais) {
            return response.status(400).json({
                message: 'Invalid data. ID, Nome, Cidade and Country are required.'
            });
        }

        try {
            const aeroporto = await prisma.aeroporto.update({
                where: {
                    id: parseInt(aeroporto_id)
                },
                data: {
                    nome,
                    cidade,
                    pais
                }
            });

            if (!aeroporto) {
                return response.status(404).json({
                    message: 'Passageiro not found.'
                });
            }

            return response.json(aeroporto);
        } catch (error) {
            console.error(error);
            return response.status(500).json({
                message: 'An error occurred while updating the passageiro.'
            });
        }
    }
}