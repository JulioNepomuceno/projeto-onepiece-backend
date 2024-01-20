import { Router } from "express";
import multer from 'multer';

import { isAuthenticated } from "./middlewares/isAuthenticated";


import { CreateUsuarioController } from "./controllers/user/CreateUsuarioController";
import { AuthUsuarioController } from "./controllers/user/AuthUsuarioController";
import { DetalheUsuarioController } from "./controllers/user/DetalheUsuarioController";
import { CreateAkumaNoMiController } from "./controllers/akumanomi/CreateAkumaNoMiController";
import { DetalheAkumaNoMiController } from "./controllers/akumanomi/DetalheAkumaNoMiController";
import { CreateTripulacaoController } from "./controllers/tripulacao/CreateTripulacaoController";
import { CreatePersonagemController } from "./controllers/personagem/CreatePersonagemController";
import { CreateTripulacaoPersonagemController } from "./controllers/tripulacao/CreateTripulacaoPersonagemController";
import { DetalheTripulacaoController } from "./controllers/tripulacao/DetalhesTripulacaoController";
import { DetalhePersonagemController } from "./controllers/personagem/DetalhePersonagemController";
import { SelectAkumaNoMiController } from "./controllers/akumanomi/SelectAkumaNoMiController";
import { CreateAkumanomiPersonagemController } from "./controllers/akumanomi/CreateAkumanomiPersonagemController";
import { SelectPersonagemController } from "./controllers/personagem/SelectPersonagemController";
import { ListAkumaNoMiController } from "./controllers/akumanomi/ListAkumaNoMiController";
import { ListPersonagemController } from "./controllers/personagem/ListPersonagemController";


import uploadConfig from './config/multer'
import { ListTripulacaoController } from "./controllers/tripulacao/ListTripulacaoController";
import { SelectTripulacaoController } from "./controllers/tripulacao/SelectTripulacaoController";


const router = Router();

const uploadAkumanomi = multer(uploadConfig.upload("./tmp/akumanomi"));
const uploadTripulacao = multer(uploadConfig.upload("./tmp/tripulacao"));
const uploadPersonagem = multer(uploadConfig.upload("./tmp/personagem"));



// -- ROTAS USUARIO
router.post('/create_usuario', new CreateUsuarioController().handle)
router.post('/session', new AuthUsuarioController().handle)
router.get('/me', isAuthenticated, new DetalheUsuarioController().handle)


// --ROTAS PERSONAGENS
router.post("/create_personagem", isAuthenticated,uploadPersonagem.single('file'), new CreatePersonagemController().handle)
router.get('/select_personagem', isAuthenticated,new SelectPersonagemController().handle)
router.get('/list_personagem', new ListPersonagemController().handle)
router.get('/personagem/detalhes',  new DetalhePersonagemController().handle)


// --RORAS TRIPULACAO
router.post("/create_tripulacao", isAuthenticated,uploadTripulacao.single('file'), new CreateTripulacaoController().handle)
router.post("/add_capitao", isAuthenticated,new CreateTripulacaoPersonagemController().handle)
router.get('/select_tripulacao', isAuthenticated,new SelectTripulacaoController().handle)
router.get('/list_tripulacao', new ListTripulacaoController().handle)
router.get('/tripulacao/detalhes', new DetalheTripulacaoController().handle)

// --ROTAS AKUMA NO MI
router.post('/create_akumanomi', isAuthenticated,uploadAkumanomi.single('file'), new CreateAkumaNoMiController().handle)
router.post("/add_usuario", isAuthenticated,new CreateAkumanomiPersonagemController().handle)
router.get('/select_akumanomi', isAuthenticated,new SelectAkumaNoMiController().handle)
router.get('/list_akumanomi', new ListAkumaNoMiController().handle)
router.get('/akumanomi/detalhes', new DetalheAkumaNoMiController().handle)


export {router};