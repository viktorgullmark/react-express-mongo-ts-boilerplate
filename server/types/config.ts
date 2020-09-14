import DbConfig from './db-config';
import JwtConfig from './jwt-config';

type Config = {
  production: boolean;
  db: DbConfig;
  jwt: JwtConfig;
};

export default Config;
