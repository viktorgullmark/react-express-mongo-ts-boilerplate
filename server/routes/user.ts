import { Request, Response, Router } from 'express';
import { check, validationResult } from 'express-validator/check';
import HttpStatusCodes from 'http-status-codes';
import '../core/auth/strategies/local';
import User from '../models/user';

const router: Router = Router();

// @route   POST api/user/local
// @desc    Register new user
// @access  Public
router.post(
  '/register',
  [
    check('username', 'Username is required').exists(),
    check('password', 'Password is required').exists(),
  ],
  async (req: Request, res: Response) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res
        .status(HttpStatusCodes.BAD_REQUEST)
        .json({ errors: errors.array() });
    }
    try {
      await User.create({
        username: req.body.username,
        password: req.body.password,
      });
      return res.status(HttpStatusCodes.OK).send();
    } catch (err) {
      return res.status(HttpStatusCodes.INTERNAL_SERVER_ERROR).send();
    }
  }
);

export default router;
