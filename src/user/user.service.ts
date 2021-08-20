import { Injectable } from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {UserRepo} from "./user.repo";
import {UserResponse} from "./dto/user.response";
import {UserEntity} from "../entity/user.entity";

@Injectable()
export class UserService {

    constructor(private userRepo: UserRepo) {
    }

    async getUsers(): Promise<UserEntity[]>{
        return await this.userRepo.find();
    }

    postUsers(email:string, nickName:string, password:string){
    }
}
