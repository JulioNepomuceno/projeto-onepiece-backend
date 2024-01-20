import prismaClient from "../../prisma";

interface AkumanomiPersonagemRequest {
    personagem_id: string
    akumanomi_id: string
}

class CreateAkumanomiPersonagemService{

    async execute({personagem_id,akumanomi_id}:AkumanomiPersonagemRequest){

        const personagemExists = await prismaClient.akumaNoMiPersonagem.findFirst({
            where:{
                personagem_id
            }
        })

        if(personagemExists){
            throw new Error("Este personagem já está cadastrado na akumanomi")
        }

        const akumanomiExists = await prismaClient.akumaNoMiPersonagem.findFirst({
            where:{
                akumanomi_id
            }
        })

        if(akumanomiExists){
            throw new Error("Este personagem já está cadastrado na akumanomi")
        }

        const akumanomiPersonagem = await prismaClient.akumaNoMiPersonagem.create({
            data:{
                personagem_id:personagem_id,
                akumanomi_id:akumanomi_id
            }
        })


        return akumanomiPersonagem;

    }

}

export {CreateAkumanomiPersonagemService}