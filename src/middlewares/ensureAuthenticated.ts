import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";
import { AppError } from "../errors/AppError";
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
        throw new AppError("Token missing", 401);
    }

    const [, token] = authHeader.split(" ");

    try {
        const { sub: user_id } = verify(token, "7c27bc3a0dd54a3182a75c7065fd9f7d") as IPayload;
        const userRepository = new UsersRepository();
        const user = await userRepository.findById(user_id)
        if(!user){
            throw new AppError("User does not exists!", 401)
        }
        next()
    } catch {
        throw new AppError("Ivalid token!",401)
    }


}