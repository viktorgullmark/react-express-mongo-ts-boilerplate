import DbConfig from './db-config';
import SessionConfig from './session-config';

type Config = {
  production: boolean;
  session: SessionConfig;
  db: DbConfig;
};

export default Config;
