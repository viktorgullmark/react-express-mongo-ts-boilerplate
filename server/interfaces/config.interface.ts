import { ConnectionOptions } from 'mongoose';
import { IDbConfig } from './db-config.interface';
import { ISessionConfig } from './session-config.interface';

export interface IConfig {
    production: boolean;
    session: ISessionConfig;
    db: IDbConfig;
}