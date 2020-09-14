import { NextFunction, Request, Response } from 'express';
import passport from 'passport';
import passportJwt from 'passport-jwt';
import config from '../../../config/config';
import User from '../../../models/user';

const JwtStrategy = passportJwt.Strategy;
const ExtractJwt = passportJwt.ExtractJwt;

passport.use(
  new JwtStrategy(
    {
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: config.jwt.secret,
    },
    function (jwtToken, done) {
      User.findOne({ username: jwtToken.username }, function (err, user) {
        if (err) {
          return done(err, false);
        }
        if (user) {
          return done(undefined, user, jwtToken);
        } else {
          return done(undefined, false);
        }
      });
    }
  )
);

export const authenticateJwt = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  passport.authenticate('jwt', (err, user) => {
    if (err) {
      console.log(err);
      return res.status(401).json({ status: 'error', code: 'unauthorized' });
    }
    if (!user) {
      return res.status(401).json({ status: 'error', code: 'unauthorized' });
    } else {
      return next();
    }
  })(req, res, next);
};
