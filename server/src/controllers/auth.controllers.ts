import { Request, Response } from 'express'

export const authLogin = async (req: Request, res: Response) => {
	try {
		/**
		 * TODO: get data form request
		 */
		console.log(req.body)
		/**
		 * TODO: save user with the data
		 */

		/**
		 * TODO: sign with jwt
		 */

		/**
		 * TODO: send token as a response
		 */
		const token: string = 'token'

		res.header('auth-token', token).send('login')
	} catch (error) {
		res.send(error)
	}
}

export const authRegister = async (req: Request, res: Response) => {
	try {
		res.send('register')
	} catch (error) {
		res.send(error)
	}
}

export const authProfile = async (req: Request, res: Response) => {
	try {
		res.send('register')
	} catch (error) {
		res.send(error)
	}
}
