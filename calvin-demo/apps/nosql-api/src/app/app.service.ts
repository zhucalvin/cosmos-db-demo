import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AppService {
  constructor(private readonly configService: ConfigService) {}

  getData(): { message: string } {
    const env = this.configService.get<string>('ENVIRONMENT');
    console.log(env);
    return { message: 'Hello API' };
  }
}
