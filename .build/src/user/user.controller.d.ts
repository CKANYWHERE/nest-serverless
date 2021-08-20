import { UserService } from "./user.service";
export declare class UserController {
    private userService;
    constructor(userService: UserService);
    getUsers(req: any): Promise<import("../entity/user.entity").UserEntity[]>;
}
