import { PrismaService } from '@/prisma/prisma.service';
import { Module } from '@nestjs/common';
import { CulturalAspectsController } from './aspect.controller';
import { CulturalAspectsService } from './aspect.service';

@Module({
  imports: [],
  providers: [CulturalAspectsService, PrismaService],
  controllers: [CulturalAspectsController],
})
export class CulturalAspectsModule {}
