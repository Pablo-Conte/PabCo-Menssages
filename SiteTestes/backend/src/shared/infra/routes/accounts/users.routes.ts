import { AuthenticateUserController } from "../../../../modules/accounts/useCases/authenticateUser/AuthenticateUserController";
import { CreateUserController } from "../../../../modules/accounts/useCases/createUser/CreateUserController";
import Router from "express";

const usersRouter = Router();

const createUserController = new CreateUserController();
const authenticateUserController = new AuthenticateUserController();

usersRouter.post("/users/create", createUserController.handle);
usersRouter.post("/users/login", authenticateUserController.handle);

export { usersRouter };
