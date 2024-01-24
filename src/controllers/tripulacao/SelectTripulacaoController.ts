import { Request,Response } from "express";
import { SelectTripulacaoService } from "../../services/tripulacao/SelectTripulacaoService";
class SelectTripulacaoController{
    async handle(req: Request, res:Response){

        const selectTripulacaoService = new SelectTripulacaoService();

        const tripulacao = await selectTripulacaoService.execute();

        return res.json(tripulacao)
    }
}

export{SelectTripulacaoController}