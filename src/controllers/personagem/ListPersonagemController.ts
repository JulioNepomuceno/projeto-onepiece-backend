import { Request, Response } from "express";
import { ListPersonagemService } from "../../services/personagem/ListPersonagemService";

class ListPersonagemController{
    async handle(req:Request, res: Response){
        
        const listPersonagemService = new ListPersonagemService();
        
        const personagem = await listPersonagemService.execute();

        return res.json(personagem);

    }
}

export{ListPersonagemController}