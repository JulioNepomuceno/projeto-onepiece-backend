import { Request,Response } from "express";
import { CreatePersonagemService } from "../../services/personagem/CreatePersonagemService";
class CreatePersonagemController{
    async handle(req: Request, res: Response){


        const {nome, apelido,afiliacao,recompensa, descricao,aniversario, id_tripulacao,id_akumanomi} = req.body;


        const createCharacterSerivce = new CreatePersonagemService();

        if(!req.file){
            throw new Error("error upload da imagem")
        }else{

            const {filename: url_imagem} = req.file
            const imagePath = `${process.env.IMG_CAMNHO}/personagem/${url_imagem}`;

            const character = await createCharacterSerivce.execute({
                nome, 
                apelido,
                url_imagem:imagePath,
                afiliacao,
                recompensa, 
                descricao,
                aniversario, 
                id_tripulacao,
                id_akumanomi
            });
    
            return res.json(character)
        }

        
    }
}

export {CreatePersonagemController}