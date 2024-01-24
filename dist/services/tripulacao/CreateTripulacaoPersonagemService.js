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
exports.CreateTripulacaoPersonagemService = void 0;
const prisma_1 = __importDefault(require("../../prisma"));
class CreateTripulacaoPersonagemService {
    execute({ personagem_id, tripulacao_id }) {
        return __awaiter(this, void 0, void 0, function* () {
            const personagemExists = yield prisma_1.default.tripulacaoPersonagem.findFirst({
                where: {
                    personagem_id
                }
            });
            if (personagemExists) {
                throw new Error("Este personagem já está cadastrado na tripulação1");
            }
            const tripulacaoExists = yield prisma_1.default.tripulacaoPersonagem.findFirst({
                where: {
                    tripulacao_id
                }
            });
            if (tripulacaoExists) {
                throw new Error("Este personagem já está cadastrado na tripulação");
            }
            const tripulacaoPersonagem = yield prisma_1.default.tripulacaoPersonagem.create({
                data: {
                    personagem_id: personagem_id,
                    tripulacao_id: tripulacao_id
                }
            });
            return tripulacaoPersonagem;
        });
    }
}
exports.CreateTripulacaoPersonagemService = CreateTripulacaoPersonagemService;
