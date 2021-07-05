import { Request, Response } from "express";
import { ListUserService } from "../service/ListUserService";

class ListUsersController {
    async handle(req: Request, res: Response) {
        const listUserService = new ListUserService();

        const users = await listUserService.execute();

        return res.json(users);
    }
}

export { ListUsersController };