import bodyParser from 'body-parser';
import express from 'express';
import { Request, Response } from 'express';

const app = express();
const PORT = 8000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req: Request, res: Response) => {
  res.send({
    message: 'hello world',
  });
});

app.listen(PORT, () => {
  console.log('server started at http://localhost:' + PORT);
});
