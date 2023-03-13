import { Router } from "express";
import { authLogin } from "../../application/controllers/auth.controller.js";

const router = Router()

router.post('/login', authLogin )

//router.post('/register',)

//router.get('/profile',)

export default router