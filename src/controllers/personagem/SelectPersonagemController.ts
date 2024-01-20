import { Request,Response } from "express";
import { SelectPersonagemService } from "../../services/personagem/SelectPersonagemService";

class SelectPersonagemController{

    async handle(req: Request, res:Response){

        const listPersonagemService = new SelectPersonagemService();

        const personagem = await listPersonagemService.execute();

        return res.json(personagem)
    }
}

export {SelectPersonagemController}