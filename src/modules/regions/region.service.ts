import { Injectable, NotFoundException } from '@nestjs/common';
import { Region } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateRegionDto } from './dtos/create-region.dto';
import { UpdateRegionDto } from './dtos/update-region.dto';

@Injectable()
export class RegionsService {
  constructor(private readonly prisma: PrismaService) {}

  async get(): Promise<Region[]> {
    return this.prisma.region.findMany();
  }

  async find(args: { where: { id: number } }): Promise<Region> {
    const region = await this.prisma.region.findUnique(args);
    if (!region) {
      throw new NotFoundException('Region not found');
    }
    return region;
  }

  async create(data: CreateRegionDto): Promise<Region> {
    return this.prisma.region.create({ data });
  }

  async update(id: number, data: UpdateRegionDto): Promise<Region> {
    const existing = await this.prisma.region.findUnique({
      where: { id },
    });
    if (!existing) {
      throw new NotFoundException('Region not found');
    }

    return this.prisma.region.update({
      where: { id },
      data,
    });
  }

  async delete(id: number): Promise<Region> {
    const existing = await this.prisma.region.findUnique({
      where: { id },
    });
    if (!existing) {
      throw new NotFoundException('Region not found');
    }

    return this.prisma.region.delete({
      where: { id },
    });
  }
}
