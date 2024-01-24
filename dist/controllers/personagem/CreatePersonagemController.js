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
exports.CreatePersonagemController = void 0;
const CreatePersonagemService_1 = require("../../services/personagem/CreatePersonagemService");
class CreatePersonagemController {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { nome, apelido, afiliacao, recompensa, descricao, aniversario, id_tripulacao, id_akumanomi } = req.body;
            const createCharacterSerivce = new CreatePersonagemService_1.CreatePersonagemService();
            if (!req.file) {
                throw new Error("error upload da imagem");
            }
            else {
                const { filename: url_imagem } = req.file;
                const imagePath = `${process.env.IMG_CAMNHO}/personagem/${url_imagem}`;
                const character = yield createCharacterSerivce.execute({
                    nome,
                    apelido,
                    url_imagem: imagePath,
                    afiliacao,
                    recompensa,
                    descricao,
                    aniversario,
                    id_tripulacao,
                    id_akumanomi
                });
                return res.json(character);
            }
        });
    }
}
exports.CreatePersonagemController = CreatePersonagemController;
