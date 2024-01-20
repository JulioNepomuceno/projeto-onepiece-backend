import { Request,Response } from "express";
import { CreateUsuarioService } from "../../services/usuario/CreateUsuarioService"; 
class CreateUsuarioController{

    async handle(req: Request, res:Response){

        
        const {nome, email, senha} = req.body;

        const createUsuarioService = new CreateUsuarioService();

        const usuario = await createUsuarioService.execute({
            nome,
            email,
            senha
        });

        return res.json(usuario)
    }
}

export {CreateUsuarioController}