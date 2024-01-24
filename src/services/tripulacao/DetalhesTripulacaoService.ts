import prismaClient from "../../prisma";

interface DetalheRequest{
    tripulacao_id: string;
}

class DetalheTripulacaoService{
    async execute({tripulacao_id}:DetalheRequest){

        const tripulacao = await prismaClient.tripulacao.findFirst({
            where:{
                id:tripulacao_id
            },include:{
                personagem:{
                    select:{
                        id:true,
                        nome:true,
                        url_imagem:true
                    }
                },
                tripulacaoPersonagem:{
                    where: {
                        tripulacao_id: tripulacao_id
                    },
                    select: {
                        id:true,
                        personagem: {
                            select: {
                                id:true,
                                nome: true,
                                url_imagem:true
                            }
                        }
                    }
                    
                }
            },
        })

        return tripulacao;

    }   
}

export {DetalheTripulacaoService}