import { Request,Response } from "express";
import { SelectAkumaNoMiService } from "../../services/akumanomi/SelectAkumaNoMiService";
class SelectAkumaNoMiController{
    async handle(req: Request , res:Response){

        const selectAkumanomiService = new SelectAkumaNoMiService();

        const akumanomi = await selectAkumanomiService.execute();

        return res.json(akumanomi)

    }
}

export {SelectAkumaNoMiController}