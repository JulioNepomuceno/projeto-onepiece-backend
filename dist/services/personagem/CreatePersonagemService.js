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
exports.CreatePersonagemService = void 0;
const prisma_1 = __importDefault(require("../../prisma"));
class CreatePersonagemService {
    execute({ nome, apelido, url_imagem, afiliacao, recompensa, descricao, aniversario, id_tripulacao, id_akumanomi }) {
        return __awaiter(this, void 0, void 0, function* () {
            const personagemAlreadyExists = yield prisma_1.default.personagens.findFirst({
                where: {
                    nome: nome,
                }
            });
            // verificando se personagem existe
            if (personagemAlreadyExists) {
                throw new Error("Personagem já está cadastrado");
            }
            const personagem = yield prisma_1.default.personagens.create({
                data: {
                    nome: nome,
                    apelido: apelido,
                    url_imagem: url_imagem,
                    afiliacao: afiliacao,
                    recompensa: recompensa,
                    descricao: descricao,
                    aniversario: aniversario,
                    tripulacao_id: id_tripulacao,
                    akumanomi_id: id_akumanomi
                }
            });
            return personagem;
        });
    }
}
exports.CreatePersonagemService = CreatePersonagemService;
