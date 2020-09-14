import Config from '../types/config';

const prodConfig: Config = {
  production: true,
  session: {
    name: 'sessionId',
    secret: '98098zm2j8',
    collection: 'sessions',
    cookie: {
      maxAge: 7 * 24 * (60 * 60 * 1000),
      httpOnly: true,
      secure: false,
    },
  },
  db: {
    uri: process.env.MONGO_URI || '<mongodb uri here>',
    options: {
      user: process.env.MONGO_USERNAME || '',
      pass: process.env.MONGO_USERNAME || '',
      dbName: 'prod',
      keepAlive: true,
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
  },
};

export default prodConfig;
