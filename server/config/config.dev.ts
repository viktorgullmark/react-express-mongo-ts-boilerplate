import Config from '../types/config';

const devConfig: Config = {
  production: true,
  session: {
    name: 'sessionId',
    secret: '308398zjij18',
    collection: 'sessions',
    cookie: {
      maxAge: 7 * 24 * (60 * 60 * 1000),
      httpOnly: true,
      secure: false,
    },
  },
  db: {
    uri: process.env.MONGO_URI || 'mongodb://localhost:27017',
    options: {
      user: process.env.MONGO_USERNAME || '',
      pass: process.env.MONGO_USERNAME || '',
      dbName: 'dev',
      keepAlive: true,
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
  },
};

export default devConfig;
