import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';

import { AppService } from './app.service';
import { CarModel } from './models/car.model';
import { CarDTO } from './models/car.dto';

@Controller('cars')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  async findAll() {
    return await this.appService.getAllCars();
  }

  @Get(':make/:id')
  async findOne(@Param('make') make: string, @Param('id') id: string) {
    return await this.appService.getCarById(id, make);
  }

  @Post()
  async create(@Body() createCarDto: CarDTO) {
    return await this.appService.createCar(createCarDto);
  }

  @Patch()
  async update(@Body() updateCarModel: CarModel) {
    return await this.appService.updateCar(updateCarModel);
  }

  @Delete(':make/:id')
  async remove(@Param('make') make: string, @Param('id') id: string) {
    return await this.appService.deleteCar(id, make);
  }
}
