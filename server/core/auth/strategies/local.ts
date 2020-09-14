import passport from 'passport';
import passportLocal from 'passport-local';
import User from '../../../models/user';

const LocalStrategy = passportLocal.Strategy;

passport.use(
  new LocalStrategy(
    { usernameField: 'username' },
    (username, password, done) => {
      User.findOne({ username: username.toLowerCase() }, (err, user: any) => {
        if (err) {
          return done(err);
        }
        if (!user) {
          return done(undefined, false, {
            message: `username ${username} not found.`,
          });
        }
        user.comparePassword(password, (err: Error, isMatch: boolean) => {
          if (err) {
            return done(err);
          }
          if (isMatch) {
            return done(undefined, user);
          }
          return done(undefined, false, {
            message: 'Invalid username or password.',
          });
        });
      });
    }
  )
);
