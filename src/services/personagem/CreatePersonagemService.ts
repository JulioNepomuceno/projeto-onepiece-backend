import prismaClient from "../../prisma";

interface PersonagemRequest {

  nome: string;
  apelido: string;
  url_imagem: string;
  afiliacao: string
  recompensa: string;
  descricao: string;
  aniversario: string;
  id_tripulacao?: string;
  id_akumanomi:string;
  
}


class CreatePersonagemService {

    async execute({nome, apelido, url_imagem,afiliacao,recompensa, descricao,aniversario, id_tripulacao,id_akumanomi}:PersonagemRequest){
        const personagemAlreadyExists = await prismaClient.personagens.findFirst({
            where: {
                nome: nome,
            }
        })

        // verificando se personagem existe
        if (personagemAlreadyExists) {
            throw new Error("Personagem já está cadastrado");
        }

        const personagem = await prismaClient.personagens.create({
            data: {
                nome: nome,
                apelido:apelido,
                url_imagem: url_imagem,
                afiliacao:afiliacao,
                recompensa:recompensa,
                descricao:descricao,
                aniversario:aniversario,
                tripulacao_id:id_tripulacao,
                akumanomi_id: id_akumanomi
            }
        })

        return personagem;
        
    }

}
export { CreatePersonagemService }