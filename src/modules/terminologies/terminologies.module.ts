import { PrismaService } from '@/prisma/prisma.service';
import { Module } from '@nestjs/common';
import { TerminologiesController } from './terminologies.controller';
import { TerminologiesService } from './terminologies.service';

@Module({
  imports: [],
  providers: [TerminologiesService, PrismaService],
  controllers: [TerminologiesController],
})
export class TerminologiesModule {}
