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
import { CulturalAspectsService } from './aspect.service';
import { CreateAspectDto } from './dtos/create-aspect.dto';
import { UpdateAspectDto } from './dtos/update-aspect.dto';

@Controller('cultural-aspects')
export class CulturalAspectsController {
  constructor(private culturalAspectsService: CulturalAspectsService) {}

  @Get()
  async findAll() {
    return await this.culturalAspectsService.get();
  }

  @Get(':id')
  async find(@Param('id') id: string) {
    const numericId = parseInt(id, 10);
    if (isNaN(numericId)) {
      throw new BadRequestException('Invalid ID');
    }
    const aspect = await this.culturalAspectsService.find({
      where: { id: numericId },
    });
    return aspect;
  }

  @Post('create')
  async create(@Body() data: CreateAspectDto) {
    return await this.culturalAspectsService.create(data);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() data: UpdateAspectDto) {
    const numericId = parseInt(id, 10);
    if (isNaN(numericId)) {
      throw new BadRequestException('Invalid ID');
    }
    return await this.culturalAspectsService.update(numericId, data);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    const numericId = parseInt(id, 10);
    if (isNaN(numericId)) {
      throw new BadRequestException('Invalid ID');
    }
    return await this.culturalAspectsService.delete(numericId);
  }
}
