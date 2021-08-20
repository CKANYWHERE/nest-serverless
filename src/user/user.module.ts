import { Module } from '@nestjs/common';
import {TypeOrmModule} from "@nestjs/typeorm";
import {UserController} from "./user.controller";
import {UserService} from "./user.service";
import {UserRepo} from "./user.repo";

@Module({
    imports:[TypeOrmModule.forFeature([UserRepo])],
    controllers: [UserController],
    providers: [UserService],
})
export class UserModule {}
