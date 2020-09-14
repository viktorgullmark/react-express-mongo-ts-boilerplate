import Config from '../types/config';

const prodConfig: Config = {
  db: {
    uri: process.env.MONGO_URI || '<mongodb uri here>',
    options: {
      user: process.env.MONGO_USERNAME || '',
      pass: process.env.MONGO_USERNAME || '',
      dbName: 'prod',
      keepAlive: true,
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    },
  },
  jwt: {
    secret: 'jwtSecret',
    expiration: 360000,
  },
};

export default prodConfig;
