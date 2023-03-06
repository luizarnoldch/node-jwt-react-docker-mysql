import jwt, { VerifyErrors } from 'jsonwebtoken'
import { Request, Response, NextFunction } from 'express'

export function verifyToken(req: Request, res: Response, next: NextFunction) {
	const token = req.headers.authorization?.split(' ')[1]

	if (!token) {
		return res
			.status(401)
			.send('No se ha proporcionado un token de autenticación')
	}

	jwt.verify(
		token,
		process.env.JWT_SECRET as string,
		(err: VerifyErrors | null, decoded: any) => {
			if (err) {
				return res.status(401).send('Token de autenticación inválido')
			}
			//req.user = decoded;
			next()
		}
	)
}
