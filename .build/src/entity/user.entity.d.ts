import { BaseEntity } from "typeorm";
export declare class UserEntity extends BaseEntity {
    id: number;
    email: string;
    name: string;
    user_id: string;
    password: string;
}
