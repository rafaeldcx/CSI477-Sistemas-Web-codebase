import { prisma } from '../../database/client.js'

export class CreatePassageiroController {

    async handle(request, response) {
        try {
            const { nome, cpf, email } = request.body;
            if (nome === "" || cpf === "" || email === "") {
                return response.status(400).json({
                    message: 'Invalid data. Nome, CPF and Email are required.'
                })
            }

            const existingPassageiro = await prisma.passageiro.findFirst({
                where: {
                    OR: [
                        { cpf: cpf },
                        { email: email }
                    ]
                }
            });

            if (existingPassageiro) {
                return response.status(400).json({
                    message: 'A passenger with this CPF or Email already exists.'
                });
            }

            const passageiro = await prisma.passageiro.create({
                data: {
                    nome,
                    cpf,
                    email
                }
            })
            return response.json(passageiro);
        } catch (error) {
            console.error(error);
            return response.status(500).json({
                message: 'An error occurred while creating the client.'
            });
        }
    }
}