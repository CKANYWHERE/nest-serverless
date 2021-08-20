import {BaseEntity, Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity("users")
export class UserEntity extends BaseEntity {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({name:"email"})
    email!: string;

    @Column({name:"name"})
    name!: string;

    @Column({name:"user_id"})
    user_id!: string;

    @Column({name:"enc_pd"})
    password!: string;

}

