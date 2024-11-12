import { IsEmail, IsString } from 'class-validator';

export class UserCredentialsDto {
  @IsEmail()
  email: string;

  @IsString()
  password: string;
}

export class CreateUserDto extends UserCredentialsDto {
  @IsString()
  name: string;
}

export class SignInUserDto extends UserCredentialsDto {}