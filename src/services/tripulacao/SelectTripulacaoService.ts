import prismaClient from "../../prisma";

class SelectTripulacaoService{

    async execute(){
        
        const tripulacao = await prismaClient.tripulacao.findMany({
            select:{
                id:true,
                nome:true,
            },orderBy:{
                nome:'asc'
            }
        })

        return tripulacao;
    }
}

export{SelectTripulacaoService}