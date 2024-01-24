
import { Request, Response } from "express";
import { ListAkumaNoMiService } from "../../services/akumanomi/ListAkumaNoMiService";

class ListAkumaNoMiController {
  async handle(req: Request, res: Response) {
    
    const { page = 1, pageSize = 10 } = req.query;

    const listAkumaNoMiService = new ListAkumaNoMiService();
    const akumanomi = await listAkumaNoMiService.execute(
      Number(page),
      Number(pageSize)
    );

    return res.json(akumanomi);
  }
}

export { ListAkumaNoMiController };
