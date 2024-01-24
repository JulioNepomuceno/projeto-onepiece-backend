"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/*import crypto from 'crypto';
import multer from 'multer'

import {extname, resolve} from 'path'

export default{
  upload(folder: string){
    return{
      storage: multer.diskStorage({
        destination: resolve(__dirname, '..', '..', folder),
        filename: (request, file, callback) => {
          const fileHash = crypto.randomBytes(16).toString("hex");
          const fileName = `${fileHash}-${file.originalname}`

          return callback(null, fileName)
        }
      })
    }
  }
}*/
const crypto_1 = __importDefault(require("crypto"));
const multer_1 = __importDefault(require("multer"));
const path_1 = require("path");
exports.default = {
    upload(folder) {
        return {
            storage: multer_1.default.diskStorage({
                destination: (0, path_1.resolve)(__dirname, '..', '..', folder),
                filename: (request, file, callback) => {
                    // Utilize alguma informação única da Akuma no Mi para gerar o nome de arquivo
                    const uniqueInfo = request.body.nome + request.body.usuario_atual + request.body.tipo;
                    const fileHash = crypto_1.default.createHash('md5').update(uniqueInfo).digest('hex');
                    const fileName = `${fileHash}-${file.originalname}`;
                    return callback(null, fileName);
                },
            }),
        };
    },
};
