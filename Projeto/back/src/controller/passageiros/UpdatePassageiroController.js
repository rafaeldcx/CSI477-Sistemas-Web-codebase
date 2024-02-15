import { prisma } from "../../database/client.js";

export class UpdatePassageiroController {
    async handle(request, response) {
        const {passageiro_id, nome, cpf, email } = request.body;

        if (!passageiro_id || !nome || !cpf || !email) {
            return response.status(400).json({
                message: 'Invalid data. ID, Nome, CPF and Email are required.'
            });
        }

        try {
            const passageiro = await prisma.passageiro.update({
                where: {
                    id: parseInt(passageiro_id)
                },
                data: {
                    nome,
                    cpf,
                    email
                }
            });

            if (!passageiro) {
                return response.status(404).json({
                    message: 'Passageiro not found.'
                });
            }

            return response.json(passageiro);
        } catch (error) {
            console.error(error);
            return response.status(500).json({
                message: 'An error occurred while updating the passageiro.'
            });
        }
    }
}