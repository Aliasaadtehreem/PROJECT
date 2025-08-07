import express from 'express';
import { registerUser, loginUser } from '../controller /auth_Controller.js';

const router = express.Router();

router.post('/register', registerUser);  // POST /api/auth/register
router.post('/login', loginUser);        // POST /api/auth/login

export default router;
