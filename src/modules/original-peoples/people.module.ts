import { PrismaService } from '@/prisma/prisma.service';
import { Module } from '@nestjs/common';
import { OriginalPeoplesController } from './people.controller';
import { OriginalPeoplesService } from './people.service';

@Module({
  imports: [],
  providers: [OriginalPeoplesService, PrismaService],
  controllers: [OriginalPeoplesController],
})
export class OriginalPeoplesModule {}
