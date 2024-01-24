import prismaClient from "../../prisma";
class ListAkumaNoMiService {

  async execute(page: number, pageSize: number){

    const skip = (page - 1) * pageSize;

    const akumanomi = await prismaClient.akumaNoMi.findMany({
      select: {
        id: true,
        nome: true,
        url_imagem: true,
        tipo: true,
        descricao: true,
      },
      orderBy: {
        nome: 'asc',
      },
      skip,
      take: pageSize,
    });

    return akumanomi;
  }
}

export { ListAkumaNoMiService };
