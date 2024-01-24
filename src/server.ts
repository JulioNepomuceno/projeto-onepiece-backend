import express, { Request, Response, NextFunction } from 'express';
import 'express-async-errors';
import cors from 'cors';
import path from  'path';


import { router } from './routes';

const app = express();

app.use(express.json());
app.use(cors());


app.use(router);

/*app.use(
    '/files',
    express.static(path.resolve(__dirname, '..', 'tmp/akumanomi'))
  )*/

  const staticDirectories = [
    { route: '/tripulacao', path: 'tmp/tripulacao' },
    { route: '/akumanomi', path: 'tmp/akumanomi' },
    { route: '/personagem', path: 'tmp/personagem' }

  ];
  
  staticDirectories.forEach(directory => {
    app.use(`/files${directory.route}`, express.static(path.resolve(__dirname, '..', directory.path)));
  });
  

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    if (err instanceof Error) {
        return res.status(400).json({
            error: err.message
        })
}

    return res.status(500).json({
        status: 'error',
        message: 'Internal server error.'
    })
})

app.listen(process.env.PORT, () => console.log('servidor online!!!'));