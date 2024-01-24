import prismaClient from "../../prisma";

class ListTripulacaoService {

    async execute(){


      const tripulacao = await prismaClient.tripulacao.findMany({
        select:{
            id:true,
            nome:true,
            url_imagem:true
        },
        orderBy:{
            nome:'asc'
        }
      })


      return tripulacao;
    }
}

export{ListTripulacaoService}