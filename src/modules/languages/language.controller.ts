import {
  BadRequestException,
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreateLanguageDto } from './dtos/create-language.dto';
import { UpdateLanguageDto } from './dtos/update-language.dto';
import { LanguagesService } from './language.service';

@Controller('languages')
export class LanguagesController {
  constructor(private languagesService: LanguagesService) {}

  @Get()
  async findAll() {
    return await this.languagesService.get();
  }

  @Get(':id')
  async find(@Param('id') id: string) {
    const numericId = parseInt(id, 10);
    if (isNaN(numericId)) {
      throw new BadRequestException('Invalid ID');
    }
    const language = await this.languagesService.find({
      where: { id: numericId },
    });
    return language;
  }

  @Post('create')
  async create(@Body() data: CreateLanguageDto) {
    return await this.languagesService.create(data);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() data: UpdateLanguageDto) {
    const numericId = parseInt(id, 10);
    if (isNaN(numericId)) {
      throw new BadRequestException('Invalid ID');
    }
    return await this.languagesService.update(numericId, data);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    const numericId = parseInt(id, 10);
    if (isNaN(numericId)) {
      throw new BadRequestException('Invalid ID');
    }
    return await this.languagesService.delete(numericId);
  }
}
