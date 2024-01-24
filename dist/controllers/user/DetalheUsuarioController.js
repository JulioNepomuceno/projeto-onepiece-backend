"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DetalheUsuarioController = void 0;
const DetalheUsuarioService_1 = require("../../services/usuario/DetalheUsuarioService");
class DetalheUsuarioController {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const usuario_id = req.usuarioId;
            const detalheUsuarioService = new DetalheUsuarioService_1.DetalheUsuarioService();
            const usuario = yield detalheUsuarioService.execute(usuario_id);
            return res.json(usuario);
        });
    }
}
exports.DetalheUsuarioController = DetalheUsuarioController;
