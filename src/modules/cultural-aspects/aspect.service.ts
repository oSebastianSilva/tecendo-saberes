import { Injectable, NotFoundException } from '@nestjs/common';
import { CulturalAspect } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateAspectDto } from './dtos/create-aspect.dto';
import { UpdateAspectDto } from './dtos/update-aspect.dto';

@Injectable()
export class CulturalAspectsService {
  constructor(private readonly prisma: PrismaService) {}

  async get(): Promise<CulturalAspect[]> {
    return this.prisma.culturalAspect.findMany();
  }

  async find(args: { where: { id: number } }): Promise<CulturalAspect> {
    const aspect = await this.prisma.culturalAspect.findUnique(args);
    if (!aspect) {
      throw new NotFoundException('Cultural Aspect not found');
    }
    return aspect;
  }

  async create(data: CreateAspectDto): Promise<CulturalAspect> {
    return this.prisma.culturalAspect.create({ data });
  }

  async update(id: number, data: UpdateAspectDto): Promise<CulturalAspect> {
    const existing = await this.prisma.culturalAspect.findUnique({
      where: { id },
    });
    if (!existing) {
      throw new NotFoundException('Cultural Aspect not found');
    }

    return this.prisma.culturalAspect.update({
      where: { id },
      data,
    });
  }

  async delete(id: number): Promise<CulturalAspect> {
    const existing = await this.prisma.culturalAspect.findUnique({
      where: { id },
    });
    if (!existing) {
      throw new NotFoundException('Cultural Aspect not found');
    }

    return this.prisma.culturalAspect.delete({
      where: { id },
    });
  }
}
