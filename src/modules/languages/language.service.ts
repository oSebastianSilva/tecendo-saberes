import { Injectable, NotFoundException } from '@nestjs/common';
import { Language } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateLanguageDto } from './dtos/create-language.dto';
import { UpdateLanguageDto } from './dtos/update-language.dto';

@Injectable()
export class LanguagesService {
  constructor(private readonly prisma: PrismaService) {}

  async get(): Promise<Language[]> {
    return this.prisma.language.findMany();
  }

  async find(args: { where: { id: number } }): Promise<Language> {
    const language = await this.prisma.language.findUnique(args);
    if (!language) {
      throw new NotFoundException('Language not found');
    }
    return language;
  }

  async create(data: CreateLanguageDto): Promise<Language> {
    return this.prisma.language.create({ data });
  }

  async update(id: number, data: UpdateLanguageDto): Promise<Language> {
    const existing = await this.prisma.language.findUnique({
      where: { id },
    });
    if (!existing) {
      throw new NotFoundException('Language not found');
    }

    return this.prisma.language.update({
      where: { id },
      data,
    });
  }

  async delete(id: number): Promise<Language> {
    const existing = await this.prisma.language.findUnique({
      where: { id },
    });
    if (!existing) {
      throw new NotFoundException('Language not found');
    }

    return this.prisma.language.delete({
      where: { id },
    });
  }
}
