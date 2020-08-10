import express, { Router } from 'express';
import cors from 'cors';
import routes from './routes';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

// Corpo (Request Body): Dados para criação ou atualização de um registro;
// Route Parms: Identificar qual recurso eu quero atualizar ou deletar
// Query Params: Paginação, filtros, ordenação.


// listen serve para a nossa aplicação ouvir uma requisição HTTP
app.listen(3333);