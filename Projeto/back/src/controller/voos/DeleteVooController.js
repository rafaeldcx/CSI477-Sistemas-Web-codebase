import { prisma } from "../../database/client.js";

export class DeleteVooController {
    async handle(request, response) {
        const { voo_id } = request.body;

        try {
            const voo = await prisma.voo.delete({
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