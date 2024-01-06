import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { MagazineService } from './magazine.service';
import { CreateMagazineDto } from './dto/create-magazine.dto';
import { UpdateMagazineDto } from './dto/update-magazine.dto';

@Controller('magazine')
export class MagazineController {
  constructor(private readonly magazineService: MagazineService) {}

  @Post()
  create(@Body() createMagazineDto: CreateMagazineDto) {
    return this.magazineService.createMagazine(createMagazineDto);
  }

  @Get()
  findAll() {
    return this.magazineService.findAllMagazine();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.magazineService.viewMagazine(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateMagazineDto: UpdateMagazineDto,
  ) {
    return this.magazineService.updateMagazine(+id, updateMagazineDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.magazineService.removeMagazine(+id);
  }
}
