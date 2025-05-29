import { Injectable, NotFoundException } from '@nestjs/common';
import { Terminology } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateTerminologyDto } from './dtos/create-terminology.dto';
import { UpdateTerminologyDto } from './dtos/update-terminology.dto';

@Injectable()
export class TerminologiesService {
  constructor(private readonly prisma: PrismaService) {}

  async get(): Promise<Terminology[]> {
    return this.prisma.terminology.findMany();
  }

  async find(args: { where: { id: number } }): Promise<Terminology> {
    const terminology = await this.prisma.terminology.findUnique(args);
    if (!terminology) {
      throw new NotFoundException('Terminology not found');
    }
    return terminology;
  }

  async create(data: CreateTerminologyDto): Promise<Terminology> {
    return this.prisma.terminology.create({ data });
  }

  async update(id: number, data: UpdateTerminologyDto): Promise<Terminology> {
    const existing = await this.prisma.terminology.findUnique({
      where: { id },
    });
    if (!existing) {
      throw new NotFoundException('Terminology not found');
    }

    return this.prisma.terminology.update({
      where: { id },
      data,
    });
  }

  async delete(id: number): Promise<Terminology> {
    const existing = await this.prisma.terminology.findUnique({
      where: { id },
    });
    if (!existing) {
      throw new NotFoundException('Terminology not found');
    }

    return this.prisma.terminology.delete({
      where: { id },
    });
  }
}

/*
import { PrismaService } from '@/prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';

@Injectable()
export class TerminologiesService {
  constructor(private readonly db: PrismaService) {}

  async get() {
    return await this.db.terminology.findMany();
  }

  async find(where: Prisma.TerminologyFindUniqueArgs) {
    return await this.db.terminology.findUnique(where);
  }

  // async create(data: Prisma.TerminologyCreateInput) {}
}
*/
