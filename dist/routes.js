"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const multer_1 = __importDefault(require("multer"));
const isAuthenticated_1 = require("./middlewares/isAuthenticated");
const CreateUsuarioController_1 = require("./controllers/user/CreateUsuarioController");
const AuthUsuarioController_1 = require("./controllers/user/AuthUsuarioController");
const DetalheUsuarioController_1 = require("./controllers/user/DetalheUsuarioController");
const CreateAkumaNoMiController_1 = require("./controllers/akumanomi/CreateAkumaNoMiController");
const DetalheAkumaNoMiController_1 = require("./controllers/akumanomi/DetalheAkumaNoMiController");
const CreateTripulacaoController_1 = require("./controllers/tripulacao/CreateTripulacaoController");
const CreatePersonagemController_1 = require("./controllers/personagem/CreatePersonagemController");
const CreateTripulacaoPersonagemController_1 = require("./controllers/tripulacao/CreateTripulacaoPersonagemController");
const DetalhesTripulacaoController_1 = require("./controllers/tripulacao/DetalhesTripulacaoController");
const DetalhePersonagemController_1 = require("./controllers/personagem/DetalhePersonagemController");
const SelectAkumaNoMiController_1 = require("./controllers/akumanomi/SelectAkumaNoMiController");
const CreateAkumanomiPersonagemController_1 = require("./controllers/akumanomi/CreateAkumanomiPersonagemController");
const SelectPersonagemController_1 = require("./controllers/personagem/SelectPersonagemController");
const ListAkumaNoMiController_1 = require("./controllers/akumanomi/ListAkumaNoMiController");
const ListPersonagemController_1 = require("./controllers/personagem/ListPersonagemController");
const multer_2 = __importDefault(require("./config/multer"));
const ListTripulacaoController_1 = require("./controllers/tripulacao/ListTripulacaoController");
const SelectTripulacaoController_1 = require("./controllers/tripulacao/SelectTripulacaoController");
const router = (0, express_1.Router)();
exports.router = router;
const uploadAkumanomi = (0, multer_1.default)(multer_2.default.upload("./tmp/akumanomi"));
const uploadTripulacao = (0, multer_1.default)(multer_2.default.upload("./tmp/tripulacao"));
const uploadPersonagem = (0, multer_1.default)(multer_2.default.upload("./tmp/personagem"));
// -- ROTAS USUARIO
router.post('/create_usuario', new CreateUsuarioController_1.CreateUsuarioController().handle);
router.post('/session', new AuthUsuarioController_1.AuthUsuarioController().handle);
router.get('/me', isAuthenticated_1.isAuthenticated, new DetalheUsuarioController_1.DetalheUsuarioController().handle);
// --ROTAS PERSONAGENS
router.post("/create_personagem", isAuthenticated_1.isAuthenticated, uploadPersonagem.single('file'), new CreatePersonagemController_1.CreatePersonagemController().handle);
router.get('/select_personagem', isAuthenticated_1.isAuthenticated, new SelectPersonagemController_1.SelectPersonagemController().handle);
router.get('/list_personagem', new ListPersonagemController_1.ListPersonagemController().handle);
router.get('/personagem/detalhes', new DetalhePersonagemController_1.DetalhePersonagemController().handle);
// --RORAS TRIPULACAO
router.post("/create_tripulacao", isAuthenticated_1.isAuthenticated, uploadTripulacao.single('file'), new CreateTripulacaoController_1.CreateTripulacaoController().handle);
router.post("/add_capitao", isAuthenticated_1.isAuthenticated, new CreateTripulacaoPersonagemController_1.CreateTripulacaoPersonagemController().handle);
router.get('/select_tripulacao', isAuthenticated_1.isAuthenticated, new SelectTripulacaoController_1.SelectTripulacaoController().handle);
router.get('/list_tripulacao', new ListTripulacaoController_1.ListTripulacaoController().handle);
router.get('/tripulacao/detalhes', new DetalhesTripulacaoController_1.DetalheTripulacaoController().handle);
// --ROTAS AKUMA NO MI
router.post('/create_akumanomi', isAuthenticated_1.isAuthenticated, uploadAkumanomi.single('file'), new CreateAkumaNoMiController_1.CreateAkumaNoMiController().handle);
router.post("/add_usuario", isAuthenticated_1.isAuthenticated, new CreateAkumanomiPersonagemController_1.CreateAkumanomiPersonagemController().handle);
router.get('/select_akumanomi', isAuthenticated_1.isAuthenticated, new SelectAkumaNoMiController_1.SelectAkumaNoMiController().handle);
router.get('/list_akumanomi', new ListAkumaNoMiController_1.ListAkumaNoMiController().handle);
router.get('/akumanomi/detalhes', new DetalheAkumaNoMiController_1.DetalheAkumaNoMiController().handle);
