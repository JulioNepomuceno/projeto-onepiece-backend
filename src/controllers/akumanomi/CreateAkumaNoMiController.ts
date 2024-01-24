import { Request,Response } from "express";
import { CreateAkumaNoMiService } from "../../services/akumanomi/CreateAkumaNoMiService";

class CreateAkumaNoMiController{
    async handle(req: Request, res: Response){


        const {nome,tipo,descricao} = req.body;


        const createAkumaNoMiService = new CreateAkumaNoMiService();

        if(!req.file){
            throw new Error("error upload da imagem")
        }else{

            const {filename: url_imagem} = req.file
            const imagePath = `${process.env.IMG_CAMNHO}/akumanomi/${url_imagem}`;

            const akumanomi = await createAkumaNoMiService.execute({
                nome, 
                url_imagem:imagePath,
                tipo,
                descricao
            });
    
            return res.json(akumanomi)
        }

        
    }
}

export {CreateAkumaNoMiController}