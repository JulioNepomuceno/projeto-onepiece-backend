import prismaClient from "../../prisma";

interface AkumaNoMiRequest {
    nome: string;
    url_imagem: string;
    tipo: string;
    descricao: string;

}


class CreateAkumaNoMiService {

    async execute({ nome, url_imagem, tipo, descricao }: AkumaNoMiRequest) {


        const akumanomiAlreadyExists = await prismaClient.akumaNoMi.findFirst({
            where: {
                nome: nome,
            }
        })

        // verificando se akuma no mi existe
        if (akumanomiAlreadyExists) {
            throw new Error("Akuma no mi já está cadastrado");
        }
        
        const akumanomi = await prismaClient.akumaNoMi.create({
            data: {
                nome: nome,
                url_imagem: url_imagem,
                tipo: tipo,
                descricao: descricao
            }
        })

        return akumanomi;

    }
}

export { CreateAkumaNoMiService }