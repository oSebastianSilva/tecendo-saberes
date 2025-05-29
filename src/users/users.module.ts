import { PrismaService } from '@/prisma/prisma.service';
import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

@Module({
  imports: [],
  providers: [UsersService, PrismaService],
  controllers: [UsersController],
})
export class UsersModule {}
