import { Request, Response } from "express";
import { DetalheUsuarioService } from "../../services/usuario/DetalheUsuarioService";
class DetalheUsuarioController {

    async handle(req: Request, res: Response) {

        const usuario_id = req.usuarioId;
        
        const detalheUsuarioService = new  DetalheUsuarioService();

        const usuario = await detalheUsuarioService.execute(usuario_id);

        return res.json(usuario);
    }
}

export {DetalheUsuarioController}