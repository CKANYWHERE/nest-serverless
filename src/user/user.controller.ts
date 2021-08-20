import {Body, Controller, Get, Post, Req, UseInterceptors} from '@nestjs/common';
import {UserResponse} from "./dto/user.response";
import {UserService} from "./user.service";
import {undefinedToNullInterceptor} from "../common/interceptors/undefinedToNull.interceptor";

@Controller('user')
@UseInterceptors(undefinedToNullInterceptor)
export class UserController {

    constructor(private userService: UserService) {
    }

    @Get()
    async getUsers(@Req() req) {
        return await this.userService.getUsers();
    }
    //
    // @Post()
    // postUsers(@Body() data: UserResponse) {
    //     this.userService.postUsers(data.email, data.nickName, data.passWord);
    // }

}
