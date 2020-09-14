type SessionConfig = {
  name: string;
  secret: string;
  collection: string;
  cookie: SessionCookieConfig;
};

type SessionCookieConfig = {
  maxAge: number;
  httpOnly: boolean;
  secure: boolean;
};

export default SessionConfig;
