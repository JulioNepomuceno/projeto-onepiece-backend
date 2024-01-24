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
exports.CreateAkumaNoMiController = void 0;
const CreateAkumaNoMiService_1 = require("../../services/akumanomi/CreateAkumaNoMiService");
class CreateAkumaNoMiController {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { nome, tipo, descricao } = req.body;
            const createAkumaNoMiService = new CreateAkumaNoMiService_1.CreateAkumaNoMiService();
            if (!req.file) {
                throw new Error("error upload da imagem");
            }
            else {
                const { filename: url_imagem } = req.file;
                const imagePath = `${process.env.IMG_CAMNHO}/akumanomi/${url_imagem}`;
                const akumanomi = yield createAkumaNoMiService.execute({
                    nome,
                    url_imagem: imagePath,
                    tipo,
                    descricao
                });
                return res.json(akumanomi);
            }
        });
    }
}
exports.CreateAkumaNoMiController = CreateAkumaNoMiController;
