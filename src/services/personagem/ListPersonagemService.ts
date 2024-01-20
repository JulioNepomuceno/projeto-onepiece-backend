import prismaClient from "../../prisma";


class ListPersonagemService{
    async execute(){
        
        const personagem = await prismaClient.personagens.findMany({
            include:{
                akumanomi:{
                    select:{
                        id:true,
                        nome:true
                    }
                },
                tripulacao:{
                    select:{
                        id:true,
                        nome:true
                    }
                }
            },orderBy:{
                nome:'asc'
            }
        })

        return personagem;
    }
}

export {ListPersonagemService}