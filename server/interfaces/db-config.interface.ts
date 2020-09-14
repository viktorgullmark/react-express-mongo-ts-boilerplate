import { ConnectionOptions } from 'mongoose';

export interface IDbConfig {
    uri: string;
    options: ConnectionOptions;
}