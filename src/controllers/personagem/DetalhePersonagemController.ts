import { Request,Response } from "express";
import { DetalhePersonagemMiService } from "../../services/personagem/DetalhePersonagemSerivce";
class DetalhePersonagemController{

    async handle(req: Request , res: Response){

        const personagem_id = req.query.id as string;

        const detalhePersonagemService = new DetalhePersonagemMiService();

        const personagem = await detalhePersonagemService.execute({
            personagem_id
        })


        return res.json(personagem);

    }

}

export {DetalhePersonagemController}
