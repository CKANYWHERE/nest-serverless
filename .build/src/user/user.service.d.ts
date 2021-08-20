import { UserRepo } from "./user.repo";
import { UserEntity } from "../entity/user.entity";
export declare class UserService {
    private userRepo;
    constructor(userRepo: UserRepo);
    getUsers(): Promise<UserEntity[]>;
    postUsers(email: string, nickName: string, password: string): void;
}
