import express, { Request, Response } from 'express';
import {
  initAuth,
  initMiddleware,
  initMongoose,
  initSession,
} from './core/init';
import auth from './routes/auth';
import user from './routes/user';

const app = express();
const PORT = 8000;

initMongoose();
initMiddleware(app);
initSession(app);
initAuth(app);

app.get('/', (_req: Request, res: Response) => {
  res.send({
    message: 'API running',
  });
});

app.use('/api/auth', auth);
app.use('/api/user', user);

app.listen(PORT, () => {
  console.log('server started at http://localhost:' + PORT);
});
