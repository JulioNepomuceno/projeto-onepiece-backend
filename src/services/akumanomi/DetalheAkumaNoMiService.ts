import prismaClient from "../../prisma";


interface DetalheRequest{
    akumanomi_id: string;
}

class DetalheAkumaNoMiService {

    async execute({akumanomi_id}: DetalheRequest){

        const akumanomi = await prismaClient.akumaNoMi.findFirst({
            where: {
                id:akumanomi_id
            },
            include:{
                akumanomiPersonagem:{
                    where:{
                        akumanomi_id:akumanomi_id
                    },
                    select:{
                        id:true,
                        personagem:{
                            select:{
                                id:true,
                                nome:true,
                                url_imagem:true
                            }
                        }
                    }
                }
            }
        })


        return akumanomi;

    }
}

export {DetalheAkumaNoMiService}