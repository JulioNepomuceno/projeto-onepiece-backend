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
exports.CreateTripulacaoController = void 0;
const CreateTripulacaoService_1 = require("../../services/tripulacao/CreateTripulacaoService");
class CreateTripulacaoController {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { nome } = req.body;
            const createTripulacaoSerivce = new CreateTripulacaoService_1.CreateTripulacaoService();
            if (!req.file) {
                throw new Error("error upload da imagem");
            }
            else {
                const { filename: url_imagem } = req.file;
                const imagePath = `${process.env.IMG_CAMNHO}/tripulacao/${url_imagem}`;
                const tripulacao = createTripulacaoSerivce.execute({
                    nome,
                    url_imagem: imagePath,
                });
                return res.json(tripulacao);
            }
        });
    }
}
exports.CreateTripulacaoController = CreateTripulacaoController;
