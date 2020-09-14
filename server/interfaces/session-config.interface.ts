export interface ISessionConfig {
    name: string;
    secret: string;
    collection: string;
    cookie: ISessionCookieConfig;
}

interface ISessionCookieConfig {
    maxAge: number;
    httpOnly: boolean;
    secure: boolean;
}