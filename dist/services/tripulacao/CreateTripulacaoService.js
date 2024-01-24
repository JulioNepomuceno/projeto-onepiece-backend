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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateTripulacaoService = void 0;
const prisma_1 = __importDefault(require("../../prisma"));
class CreateTripulacaoService {
    execute({ nome, url_imagem }) {
        return __awaiter(this, void 0, void 0, function* () {
            const tripulacaoAlreadyExists = yield prisma_1.default.tripulacao.findFirst({
                where: {
                    nome: nome,
                }
            });
            // verificando se a tripulacao já existe
            if (tripulacaoAlreadyExists) {
                throw new Error("Tripulacao já está cadastrado");
            }
            const tripulacao = yield prisma_1.default.tripulacao.create({
                data: {
                    nome: nome,
                    url_imagem: url_imagem,
                }
            });
            return tripulacao;
        });
    }
}
exports.CreateTripulacaoService = CreateTripulacaoService;
