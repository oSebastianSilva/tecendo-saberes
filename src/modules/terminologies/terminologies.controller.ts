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
import { CreateTerminologyDto } from 'src/modules/terminologies/dtos/create-terminology.dto';
import { UpdateTerminologyDto } from 'src/modules/terminologies/dtos/update-terminology.dto';
import { TerminologiesService } from './terminologies.service';

@Controller('terminologies')
export class TerminologiesController {
  constructor(private terminologiesService: TerminologiesService) {}

  @Get()
  async findAll() {
    return await this.terminologiesService.get();
  }

  @Get(':id')
  async find(@Param('id') id: string) {
    const numericId = parseInt(id, 10);
    if (isNaN(numericId)) {
      throw new BadRequestException('Invalid ID');
    }
    const terminology = await this.terminologiesService.find({
      where: { id: numericId },
    });
    return terminology;
  }

  @Post('create')
  async create(@Body() data: CreateTerminologyDto) {
    return await this.terminologiesService.create(data);
  }

  @Put('update/:id')
  async update(@Param('id') id: string, @Body() data: UpdateTerminologyDto) {
    const numericId = parseInt(id, 10);
    if (isNaN(numericId)) {
      throw new BadRequestException('Invalid ID');
    }
    return await this.terminologiesService.update(numericId, data);
  }

  @Delete('delete/:id')
  async remove(@Param('id') id: string) {
    const numericId = parseInt(id, 10);
    if (isNaN(numericId)) {
      throw new BadRequestException('Invalid ID');
    }
    return await this.terminologiesService.delete(numericId);
  }
}
