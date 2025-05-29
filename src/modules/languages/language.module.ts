import { PrismaService } from '@/prisma/prisma.service';
import { Module } from '@nestjs/common';
import { LanguagesController } from './language.controller';
import { LanguagesService } from './language.service';

@Module({
  imports: [],
  providers: [LanguagesService, PrismaService],
  controllers: [LanguagesController],
})
export class LanguagesModule {}
