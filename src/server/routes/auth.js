import { Router } from 'express';
import auth from '../logic/authController.js';
import { check } from 'express-validator';
import { checkUser } from '../helper/auth.js';
const authRouter = new Router();

authRouter.post('/registration', [
	check('username', 'username is empty').notEmpty(),
	check('password', 'password error').isLength({min:6, max:20})
], auth.registration);
authRouter.post('/login', auth.login);
authRouter.get('/users', checkUser, auth.getUser);

export default authRouter;