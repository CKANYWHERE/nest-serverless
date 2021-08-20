import {EntityRepository, Repository} from "typeorm";
import {Injectable} from "@nestjs/common";
import {UserEntity} from "../entity/user.entity";

@Injectable()
@EntityRepository(UserEntity)
export class UserRepo extends Repository<UserEntity>{}
