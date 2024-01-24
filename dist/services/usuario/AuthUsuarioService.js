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
exports.AuthUsuarioService = void 0;
const prisma_1 = __importDefault(require("../../prisma"));
const bcryptjs_1 = require("bcryptjs");
const jsonwebtoken_1 = require("jsonwebtoken");
class AuthUsuarioService {
    execute({ email, senha }) {
        return __awaiter(this, void 0, void 0, function* () {
            //Verificar se o email existe
            const usuario = yield prisma_1.default.usuarios.findFirst({
                where: {
                    email: email
                }
            });
            console;
            if (!usuario) {
                throw new Error("Email ou Senha incorreto");
            }
            // verificar se a senha que ele mandou esta correta
            const senhaMatch = yield (0, bcryptjs_1.compare)(senha, usuario.senha);
            if (!senhaMatch) {
                throw new Error("Email ou Senha incorreto");
            }
            //gerando um token JWT e devolver os dados do usuario
            const token = (0, jsonwebtoken_1.sign)({
                nome: usuario.nome,
                email: usuario.email,
            }, process.env.JWT_SECRET, {
                subject: usuario.id,
                expiresIn: '30d'
            });
            return {
                id: usuario.id,
                nome: usuario.nome,
                email: usuario.email,
                token: token
            };
        });
    }
}
exports.AuthUsuarioService = AuthUsuarioService;
