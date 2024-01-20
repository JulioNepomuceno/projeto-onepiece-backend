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
import crypto from 'crypto';
import multer from 'multer';
import { extname, resolve } from 'path';

export default {
  upload(folder: string) {
    return {
      storage: multer.diskStorage({
        destination: resolve(__dirname, '..', '..', folder),
        filename: (request, file, callback) => {
          // Utilize alguma informação única da Akuma no Mi para gerar o nome de arquivo
          const uniqueInfo = request.body.nome + request.body.usuario_atual + request.body.tipo;
          const fileHash = crypto.createHash('md5').update(uniqueInfo).digest('hex');
          const fileName = `${fileHash}-${file.originalname}`;

          return callback(null, fileName);
        },
      }),
    };
  },
};
