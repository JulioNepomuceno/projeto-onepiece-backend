import { Request,Response } from "express";
import { DetalheAkumaNoMiService } from "../../services/akumanomi/DetalheAkumaNoMiService";

class DetalheAkumaNoMiController{

    async handle(req: Request , res: Response){

        const akumanomi_id = req.query.id as string;

        const detalheAkumaNoMiService = new DetalheAkumaNoMiService();

        const akumanomi = await detalheAkumaNoMiService.execute({
            akumanomi_id
        })


        return res.json(akumanomi);

    }

}

export {DetalheAkumaNoMiController}
