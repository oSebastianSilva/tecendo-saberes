import { PrismaService } from '@/prisma/prisma.service';
import { Module } from '@nestjs/common';
import { RegionsController } from './region.controller';
import { RegionsService } from './region.service';

@Module({
  imports: [],
  providers: [RegionsService, PrismaService],
  controllers: [RegionsController],
})
export class RegionsModule {}
