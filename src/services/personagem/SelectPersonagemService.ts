import prismaClient from "../../prisma";


class SelectPersonagemService{
    async execute(){
        
        const personagem = await prismaClient.personagens.findMany({
            select:{
                id:true,
                nome:true,
            },orderBy:{
                nome:'asc'
            }
        })

        return personagem;
    }
}

export {SelectPersonagemService}