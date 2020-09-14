import bodyParser from 'body-parser';
import express, { Request, Response } from 'express';
import config from './config/config';
import mongoose from 'mongoose';
import session from 'express-session';
import connectMongo from 'connect-mongo';

const MongoStore = connectMongo(session);

const app = express();
const PORT = 8000;

mongoose.connect(config.db.uri, config.db.options, (err) => {
  if (err) {
    console.log('could not connect to mongodb');
  }
  mongoose.set('debug', !config.production);
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(
  session({
    saveUninitialized: true,
    resave: false,
    secret: config.session.secret,
    store: new MongoStore({
      mongooseConnection: mongoose.connection,
      collection: config.session.collection,
      autoReconnect: true,
    }),
    cookie: config.session.cookie,
    name: config.session.name,
  })
);

app.get('/', (_req: Request, res: Response) => {
  res.send({
    message: 'hello world',
  });
});

app.listen(PORT, () => {
  console.log('server started at http://localhost:' + PORT);
});
