import prismaClient from "../../prisma";

class SelectAkumaNoMiService {

   async execute(){

    const akumanomi = await prismaClient.akumaNoMi.findMany({
        select:{
            id:true,
            nome:true,
        },orderBy:{
            nome:'asc'
        }
    })

    return akumanomi;

    }
}
export {SelectAkumaNoMiService}