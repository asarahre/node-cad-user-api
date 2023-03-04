import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { UserService } from './users.service';
import { PrismaService } from './prisma.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [UserService, PrismaService],
})
export class AppModule {}
