import { NextFunction, Request, Response, Router } from 'express';
import { check, validationResult } from 'express-validator/check';
import HttpStatusCodes from 'http-status-codes';
import passport from 'passport';
import '../core/auth/strategies/local';

const router: Router = Router();

// @route   POST api/auth/local
// @desc    Login with local user
// @access  Public
router.post(
  '/local',
  [
    check('username', 'Username is required').exists(),
    check('password', 'Password is required').exists(),
  ],
  (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res
        .status(HttpStatusCodes.BAD_REQUEST)
        .json({ errors: errors.array() });
    }
    passport.authenticate('local', (err, user, info) => {
      if (!user || err) {
        return res.status(HttpStatusCodes.UNAUTHORIZED).send();
      }
      req.login(user, (err) => {
        if (err) {
          return res.status(HttpStatusCodes.UNAUTHORIZED).send();
        }
        return res.status(HttpStatusCodes.OK).send();
      });
    })(req, res, next);
  }
);

export default router;
