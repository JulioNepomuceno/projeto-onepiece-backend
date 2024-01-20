import prismaClient from "../../prisma";

interface TripulacaoPersonagemRequest {
    personagem_id: string
    tripulacao_id: string
}

class CreateTripulacaoPersonagemService{

    async execute({personagem_id,tripulacao_id}:TripulacaoPersonagemRequest){

        const personagemExists = await prismaClient.tripulacaoPersonagem.findFirst({
            where:{
                personagem_id
            }
        })

        if(personagemExists){
            throw new Error("Este personagem já está cadastrado na tripulação1")
        }

        const tripulacaoExists = await prismaClient.tripulacaoPersonagem.findFirst({
            where:{
                tripulacao_id
            }
        })

        if(tripulacaoExists){
            throw new Error("Este personagem já está cadastrado na tripulação")
        }

        const tripulacaoPersonagem = await prismaClient.tripulacaoPersonagem.create({
            data:{
                personagem_id:personagem_id,
                tripulacao_id:tripulacao_id
            }
        })


        return tripulacaoPersonagem;

    }

}

export {CreateTripulacaoPersonagemService}