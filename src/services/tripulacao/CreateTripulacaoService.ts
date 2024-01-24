import prismaClient from "../../prisma";

interface TripulacaoRequest {
    nome: string
    url_imagem: string
}


class CreateTripulacaoService {

    async execute({ nome, url_imagem }: TripulacaoRequest) {

        const tripulacaoAlreadyExists = await prismaClient.tripulacao.findFirst({
            where: {
                nome: nome,
            }
        })

        // verificando se a tripulacao já existe
        if (tripulacaoAlreadyExists) {
            throw new Error("Tripulacao já está cadastrado");
        }

        const tripulacao = await prismaClient.tripulacao.create({
            data: {
                nome: nome,
                url_imagem: url_imagem,
            }
        })

        return tripulacao;

    }

}
export { CreateTripulacaoService }