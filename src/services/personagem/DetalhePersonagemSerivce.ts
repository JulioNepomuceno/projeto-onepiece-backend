import prismaClient from "../../prisma";


interface DetalheRequest{
    personagem_id: string;
}

class DetalhePersonagemMiService {

    async execute({personagem_id}: DetalheRequest){

        const personagem = await prismaClient.personagens.findFirst({
            where: {
                id:personagem_id
            },include:{
                akumanomi:{
                    select:{
                        id:true,
                        nome:true,
                        url_imagem:true
                    }
                },
                tripulacao:{
                    select:{
                        id:true,
                        nome:true,
                        url_imagem:true
                    }
                }
            }
        })


        return personagem;

    }
}

export {DetalhePersonagemMiService}