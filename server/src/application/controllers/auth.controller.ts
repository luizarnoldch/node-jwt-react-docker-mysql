import { Request, Response } from "express";
import jwt from 'jsonwebtoken';

export const authLogin = (req: Request, res: Response) => {
    try {
        //const { username, email, password } = req.body;
        console.log(req.body)
        const token = jwt.sign({ foo: 'bar'}, process.env.JWT_SECRET as jwt.Secret, {
            expiresIn: 86400,
        })
        return res.status(200).json({token})
    } catch (error: any) {
        return res.status(500).json(error.message);
    }
}

// export const authRegister = (req: Request, res: Response) => {

// }

// export const authProfile = (req: Request, res: Response) => {
    
// }