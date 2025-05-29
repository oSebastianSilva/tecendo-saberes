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
import { CreateRegionDto } from './dtos/create-region.dto';
import { UpdateRegionDto } from './dtos/update-region.dto';
import { RegionsService } from './region.service';

@Controller('regions')
export class RegionsController {
  constructor(private regionsService: RegionsService) {}

  @Get()
  async findAll() {
    return await this.regionsService.get();
  }

  @Get(':id')
  async find(@Param('id') id: string) {
    const numericId = parseInt(id, 10);
    if (isNaN(numericId)) {
      throw new BadRequestException('Invalid ID');
    }
    const region = await this.regionsService.find({
      where: { id: numericId },
    });
    return region;
  }

  @Post('create')
  async create(@Body() data: CreateRegionDto) {
    return await this.regionsService.create(data);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() data: UpdateRegionDto) {
    const numericId = parseInt(id, 10);
    if (isNaN(numericId)) {
      throw new BadRequestException('Invalid ID');
    }
    return await this.regionsService.update(numericId, data);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    const numericId = parseInt(id, 10);
    if (isNaN(numericId)) {
      throw new BadRequestException('Invalid ID');
    }
    return await this.regionsService.delete(numericId);
  }
}
