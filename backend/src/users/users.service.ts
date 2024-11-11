import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './user.schema';

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private readonly userModel: Model<User>) {}

  // Create a new user
  async createUser(createUserDto: { email: string; password: string; name: string }): Promise<User> {
    const createdUser = new this.userModel(createUserDto);
    return createdUser.save();
  }

  // Get all users
  async getAllUsers(): Promise<User[]> {
    return this.userModel.find().exec();
  }

  // Find a user by email
  async findByEmail(email: string): Promise<User | null> {
    return this.userModel.findOne({ email }).exec();
  }
}