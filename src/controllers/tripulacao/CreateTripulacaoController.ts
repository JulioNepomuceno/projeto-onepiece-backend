import { Request,Response } from "express";
import { CreateTripulacaoService } from "../../services/tripulacao/CreateTripulacaoService";
class CreateTripulacaoController{

    async handle(req: Request, res: Response){


        const {nome} = req.body;


        const createTripulacaoSerivce = new CreateTripulacaoService();

        if(!req.file){
            throw new Error("error upload da imagem")
        }else{

            const {filename: url_imagem} = req.file
            const imagePath = `${process.env.IMG_CAMNHO}/tripulacao/${url_imagem}`;

            const tripulacao = createTripulacaoSerivce.execute({
                nome, 
                url_imagem: imagePath, 

            });
    
            return res.json(tripulacao)
        }

        
    }
}

export {CreateTripulacaoController}