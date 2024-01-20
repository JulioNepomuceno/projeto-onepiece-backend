import { Response,Request } from "express";
import { CreateAkumanomiPersonagemService } from "../../services/akumanomi/CreateAkumanomiPersonagemService";
class CreateAkumanomiPersonagemController{

    async handle(req: Request, res:Response){

        const {personagem_id,akumanomi_id} = req.body;

        const createAkumanomiPersonagemService = new CreateAkumanomiPersonagemService();

        const akumanomiPersonagem = await createAkumanomiPersonagemService.execute({
            personagem_id,
            akumanomi_id
        });


        return res.json(akumanomiPersonagem)

    }
}

export {CreateAkumanomiPersonagemController}
