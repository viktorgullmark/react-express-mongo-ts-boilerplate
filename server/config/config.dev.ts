import Config from '../types/config';

const devConfig: Config = {
  db: {
    uri: process.env.MONGO_URI || 'mongodb://localhost:27017',
    options: {
      user: process.env.MONGO_USERNAME || '',
      pass: process.env.MONGO_USERNAME || '',
      dbName: 'dev',
      keepAlive: true,
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true
    },
  },
  jwt: {
    secret: 'jwtSecret',
    expiration: 360000,
  },
};

export default devConfig;
