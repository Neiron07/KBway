import { Router } from "express";
import User from '../models/user.js';
import UserController from "../logic/UserController.js";

const router = new Router();

router.get('/user', UserController.getAllUser);
router.post('/user', UserController.create);
router.get('/user/:id', UserController.getUser);

export default router;