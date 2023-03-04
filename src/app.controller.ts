import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Put,
  Delete,
} from '@nestjs/common';
import { Users as UserModel } from '@prisma/client';
import { UserService } from './users.service';

@Controller()
export class AppController {
  constructor(private readonly userService: UserService) {}

  @Get('user/:id')
  async getPostById(@Param('id') id: string): Promise<UserModel> {
    return this.userService.user({ id: Number(id) });
  }

  @Get('users')
  async getPublishedPosts(): Promise<UserModel[]> {
    return this.userService.users({
      where: {},
    });
  }

  @Post('user')
  async signupUser(
    @Body() userData: { name: string; email: string; password: string },
  ): Promise<UserModel> {
    return this.userService.createUser(userData);
  }

  @Put('user/:id')
  async updateUser(
    @Param('id') id: string,
    @Body() userData: { name: string; email: string; password: string },
  ): Promise<UserModel> {
    return this.userService.updateUser({
      where: { id: Number(id) },
      data: userData,
    });
  }

  @Delete('user/:id')
  async deleteUsers(@Param('id') id: string): Promise<UserModel> {
    return this.userService.deleteUser({ id: Number(id) });
  }
}
