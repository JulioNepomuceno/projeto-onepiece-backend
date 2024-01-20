import { Request,Response } from "express";
import { DetalheTripulacaoService } from "../../services/tripulacao/DetalhesTripulacaoService";

class DetalheTripulacaoController{

    async handle(req:Request, res:Response){

        const tripulacao_id = req.query.id as string;

        const detalhetripulacaoService = new DetalheTripulacaoService();

        const tripulacao = await detalhetripulacaoService.execute({
            tripulacao_id
        })

        return res.json(tripulacao);

    }
}

export {DetalheTripulacaoController}