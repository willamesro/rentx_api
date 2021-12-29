
import { Router } from "express";

import { CreateUserController } from "../modules/accounts/useCases/createUser/CreateUserController";

const usersRoutes = Router();

const userController = new CreateUserController();

usersRoutes.post("/", userController.handle);




export { usersRoutes };
