import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { CosmosClient } from '@azure/cosmos'

@Injectable()
export class AppService {
  private readonly cosmosClient: CosmosClient;
  constructor(private readonly configService: ConfigService) {
    this.cosmosClient = new CosmosClient({
      endpoint: configService.get<string>('AZURE_COSMOS_DB_ENDPOINT'),
      key: configService.get<string>('AZURE_COSMOS_DB_KEY')    
    })
  }

  getData(): { message: string } {
    const env = this.configService.get<string>('ENVIRONMENT');
    console.log(env);
    return { message: 'Hello API' };
  }
}
