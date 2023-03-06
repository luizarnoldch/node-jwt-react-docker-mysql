import { Request, Response, NextFunction, Router } from 'express'
import {
	authLogin,
	authRegister,
	authProfile,
} from '../controllers/auth.controllers'
const router = Router()

router.use((req: Request, res: Response, next: NextFunction) => {
	res.header(
		'Access-Control-Allow-Headers',
		'x-access-token, Origin, Content-Type, Accept'
	)
	next()
})

router.post('/login', authLogin)
router.post('/register', authRegister)
router.get('/profile', authProfile)

export default router
