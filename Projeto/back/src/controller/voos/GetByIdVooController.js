import { prisma } from "../../database/client.js";

export class GetByIdVooController {
    async handle(request, response) {
        const { voo_id } = request.params;

        try{
            const voo = await prisma.voo.findUniqueOrThrow ({
                where: {
                    id: parseInt(voo_id)
                }
            });
            return response.json(voo);
        } catch (error) {
            response.status(404).json({
                message: 'Invalid request.', error
            })
        }
    }
}