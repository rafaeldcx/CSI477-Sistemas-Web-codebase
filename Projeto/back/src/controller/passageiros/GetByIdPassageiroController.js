import { prisma } from "../../database/client.js";

export class GetByIdPassageiroController {
    async handle(request, response) {
        const { id } = request.params;

        try{
            const passageiro = await prisma.passageiro.findUnique({
                where: {
                    id: parseInt(id)
                }
            });
            return response.json(passageiro);
        } catch (error) {
            response.status(404).json({
                message: 'Invalid request.', error
            })
        }
    }
}