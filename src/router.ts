import { Router } from "express";
import { CreateUserController } from "./app/controllers/CreateUserController";
import { ListUsersController } from "./app/controllers/ListuserController";

const router = Router();

const createUserController = new CreateUserController();
const listUserController = new ListUsersController();

router
    .post("/users", createUserController.handle)
    .get("/users", listUserController.handle)

export { router };