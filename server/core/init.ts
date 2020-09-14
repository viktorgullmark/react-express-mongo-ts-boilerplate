import bodyParser from 'body-parser';
import connectMongo from 'connect-mongo';
import cors from 'cors';
import { Express } from 'express';
import session from 'express-session';
import mongoose from 'mongoose';
import passport from 'passport';
import config from '../config/config';
import User, { IUser } from '../models/user';

const MongoStore = connectMongo(session);

export const initSession = (app: Express) => {
  app.use(
    session({
      saveUninitialized: true,
      resave: false,
      secret: config.session.secret,
      store: new MongoStore({
        mongooseConnection: mongoose.connection,
        collection: config.session.collection,
        autoReconnect: true,
      }),
      cookie: config.session.cookie,
      name: config.session.name,
    })
  );
};

export const initMiddleware = (app: Express) => {
  app.use(cors());
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));
};

export const initMongoose = () => {
  mongoose.connect(config.db.uri, config.db.options, (err) => {
    if (err) {
      console.log('could not connect to mongodb');
    }
    mongoose.set('debug', !config.production);
  });
};

export const initAuth = (app: Express) => {
  app.use(passport.initialize());
  app.use(passport.session());

  passport.serializeUser(function (user: IUser, done) {
    return done(null, user.id);
  });

  passport.deserializeUser(function (id, done) {
    User.findOne(
      {
        _id: id,
      },
      '-password',
      function (err, user) {
        if (err) return done(err);
        if (!user) return done(null, false);

        return done(null, user);
      }
    );
  });
};
