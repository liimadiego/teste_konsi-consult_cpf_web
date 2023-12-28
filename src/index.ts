import express, { Request, Response } from 'express';
import { config } from 'dotenv';

config();

const app = express();
const port = 3000;

app.use(express.static('public'));
app.use(express.json());

app.get('/', (req: Request, res: Response) => {
  res.sendFile(__dirname + '/public/index.html');
});

app.listen(port, () => {
  console.log(`Servidor web rodando na porta ${port}`);
});
