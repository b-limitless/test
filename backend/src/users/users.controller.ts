import { Controller, Get, Post, Body, Session } from '@nestjs/common';
import { UserService } from './users.service';
import { Serialize } from 'src/users/interceptors/serialize.interceptors';
import { UserDto } from 'src/users/dto/user.dto';
import { AuthService } from './auth.service';
import { CreateUserDto, SignInUserDto } from './dto/create-user.dto';
import { CurrentUser } from './decorators/current-user.decorator';
import { User } from './user.schema';

@Serialize(UserDto)
@Controller('users')
export class UserController {
  constructor(
    private userService: UserService,
    private authService: AuthService,
  ) {}

  @Post('/signup')
  async createUser(@Body() body: CreateUserDto, @Session() session: any) {
    const user = await this.authService.signup(
      body.email,
      body.password,
      body.name,
    );
    session.userId = user._id;
  }

  @Post('/signin')
  async signin(@Body() body: SignInUserDto, @Session() session: any) {
    const user = await this.authService.signin(body.email, body.password);
    session.userId = user._id;
  }

  @Post('/signout')
  signOut(@Session() session: any) {
    session.userId = null;
  }

  @Post('/currentUser')
  currentUser(@CurrentUser() user: User, @Session() session: any) {
    return user;
  }



  @Get('/')
  async findAll() {
    return this.userService.getAllUsers();
  }
}
