import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";
import { UsersRepository } from "../modules/accounts/repositories/implementations/UsersRepository";

interface IPayload {
    sub: string;
}

export async function ensureAuthenticated(
    req: Request,
    res: Response,
    next: NextFunction
) {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
        throw new Error("Token missing");
    }

    const [, token] = authHeader.split(" ");

    try {
        const { sub: user_id } = verify(token, "7c27bc3a0dd54a3182a75c7065fd9f7d") as IPayload;
        const userRepository = new UsersRepository();
        const user = await userRepository.findById(user_id)
        if(!user){
            throw new Error("User does not exists!")
        }
        next()
    } catch {
        throw new Error("Ivalid token!")
    }


}