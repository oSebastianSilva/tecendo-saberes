import { Injectable, NotFoundException } from '@nestjs/common';
import { OriginalPeople } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreatePeopleDto } from './dtos/create-people.dto';
import { UpdatePeopleDto } from './dtos/update-people.dto';

@Injectable()
export class OriginalPeoplesService {
  constructor(private readonly prisma: PrismaService) {}

  async get(): Promise<OriginalPeople[]> {
    return this.prisma.originalPeople.findMany();
  }

  async find(args: { where: { id: number } }): Promise<OriginalPeople> {
    const people = await this.prisma.originalPeople.findUnique(args);
    if (!people) {
      throw new NotFoundException('Original People not found');
    }
    return people;
  }

  async create(data: CreatePeopleDto): Promise<OriginalPeople> {
    return this.prisma.originalPeople.create({ data });
  }

  async update(id: number, data: UpdatePeopleDto): Promise<OriginalPeople> {
    const existing = await this.prisma.originalPeople.findUnique({
      where: { id },
    });
    if (!existing) {
      throw new NotFoundException('Original People not found');
    }

    return this.prisma.originalPeople.update({
      where: { id },
      data,
    });
  }

  async delete(id: number): Promise<OriginalPeople> {
    const existing = await this.prisma.originalPeople.findUnique({
      where: { id },
    });
    if (!existing) {
      throw new NotFoundException('Original People not found');
    }

    return this.prisma.originalPeople.delete({
      where: { id },
    });
  }
}
