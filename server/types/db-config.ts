import { ConnectionOptions } from 'mongoose';

type DbConfig = {
  uri: string;
  options: ConnectionOptions;
};

export default DbConfig;
