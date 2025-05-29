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
import { CreatePeopleDto } from './dtos/create-people.dto';
import { UpdatePeopleDto } from './dtos/update-people.dto';
import { OriginalPeoplesService } from './people.service';

@Controller('peoples')
export class OriginalPeoplesController {
  constructor(private originalPeoplesService: OriginalPeoplesService) {}

  @Get()
  async findAll() {
    return await this.originalPeoplesService.get();
  }

  @Get(':id')
  async find(@Param('id') id: string) {
    const numericId = parseInt(id, 10);
    if (isNaN(numericId)) {
      throw new BadRequestException('Invalid ID');
    }
    const originalPeople = await this.originalPeoplesService.find({
      where: { id: numericId },
    });
    return originalPeople;
  }

  @Post('create')
  async create(@Body() data: CreatePeopleDto) {
    return await this.originalPeoplesService.create(data);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() data: UpdatePeopleDto) {
    const numericId = parseInt(id, 10);
    if (isNaN(numericId)) {
      throw new BadRequestException('Invalid ID');
    }
    return await this.originalPeoplesService.update(numericId, data);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    const numericId = parseInt(id, 10);
    if (isNaN(numericId)) {
      throw new BadRequestException('Invalid ID');
    }
    return await this.originalPeoplesService.delete(numericId);
  }
}
