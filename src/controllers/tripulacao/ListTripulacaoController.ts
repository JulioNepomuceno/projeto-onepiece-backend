import { Request, Response } from "express";
import { ListTripulacaoService } from "../../services/tripulacao/ListTripulacaoService";

class ListTripulacaoController{
    async handle(req:Request, res: Response){
        
        const listTripulacaoService = new ListTripulacaoService();
        
        const tripulacao = await listTripulacaoService.execute();

        return res.json(tripulacao);

    }
}

export{ListTripulacaoController}