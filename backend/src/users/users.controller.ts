import { Controller, Get, Post, Body } from '@nestjs/common';
import { UserService } from './users.service';
import { Serialize } from 'src/interceptors/serialize.interceptors';
import { UserDto } from 'src/dto/user.dto';

@Serialize(UserDto)
@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('/signup')
  async create(@Body() createUserDto: { email: string; password: string; name: string }) {
    return this.userService.createUser(createUserDto);
  }

  @Get()
  async findAll() {
    return this.userService.getAllUsers();
  }
}
