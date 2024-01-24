import { Response,Request } from "express";
import { CreateTripulacaoPersonagemService } from "../../services/tripulacao/CreateTripulacaoPersonagemService";

class CreateTripulacaoPersonagemController{

    async handle(req: Request, res:Response){

        const {personagem_id,tripulacao_id} = req.body;

        const createTripulacaoPersonagemService = new CreateTripulacaoPersonagemService();

        const tripulacaoPersonagem = await createTripulacaoPersonagemService.execute({
            personagem_id,
            tripulacao_id
        });


        return res.json(tripulacaoPersonagem)

    }
}

export {CreateTripulacaoPersonagemController}
