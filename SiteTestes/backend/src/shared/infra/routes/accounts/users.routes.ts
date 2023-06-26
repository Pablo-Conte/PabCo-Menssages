import { CreateUserController } from "../../../../modules/accounts/useCases/createUser/CreateUserController";
import Router from "express";

const usersRouter = Router();

const createUserController = new CreateUserController();

usersRouter.post("/users/create", createUserController.handle);

export { usersRouter };
