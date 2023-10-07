import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { CosmosClient } from '@azure/cosmos'
import { CarModel } from './models/car.model';
import { CarDTO } from './models/car.dto';

@Injectable()
export class AppService {
  private readonly cosmosClient: CosmosClient;
  constructor(private readonly configService: ConfigService) {
    this.cosmosClient = new CosmosClient({
      endpoint: configService.get<string>('AZURE_COSMOS_DB_ENDPOINT'),
      key: configService.get<string>('AZURE_COSMOS_DB_KEY')    
    })
  }

  async getCarById(id: string, make:string): Promise<CarModel> {
    const { resource } = await this.cosmosClient
      .database('Vehicles')
      .container('Car')
      .item(id, make)
      .read();
    return resource as CarModel;
  }

  async getAllCars(): Promise<CarModel[]> {
    const { resources } = await this.cosmosClient
      .database('Vehicles')
      .container('Car')
      .items.query('SELECT * FROM c')
      .fetchAll();
    return resources as CarModel[];
  }

  async createCar(item: CarDTO): Promise<CarModel> {
    const { resource } = await this.cosmosClient
      .database('Vehicles')
      .container('Car')
      .items.create(item);
    return resource as CarModel;
  }

  async updateCar(item: CarModel): Promise<CarModel> {
    const { resource } = await this.cosmosClient
      .database('Vehicles')
      .container('Car')
      .item(item.id, item.make)
      .replace(item);
    return resource as CarModel;
  }

  async deleteCar(id: string, make: string): Promise<{ message: string; }> {
    await this.cosmosClient
      .database('Vehicles')
      .container('Car')
      .item(id, make)
      .delete();
      return { message: 'Document deleted successfully' };
  }
}
