import { prisma } from '../../database/client.js'

export class CreateAeroportoController {

    async handle(request, response) {
        try {
            const { nome, cidade, pais } = request.body;
            if (nome === "" || cidade === "" || pais === "") {
                return response.status(400).json({
                    message: 'Invalid data. Nome, CPF and Email are required.'
                })
            }
            const aeroporto = await prisma.aeroporto.create({
                data: {
                    nome,
                    cidade,
                    pais
                }
            })
            return response.json(aeroporto);
        } catch (error) {
            console.error(error);
            return response.status(500).json({
                message: 'An error occurred while creating the client.'
            });
        }
    }
}