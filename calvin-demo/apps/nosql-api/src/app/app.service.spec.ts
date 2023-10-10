import { Test } from '@nestjs/testing';

import { AppService } from './app.service';
import { ConfigService } from '@nestjs/config';

describe('AppService', () => {
  let service: AppService;
  let configService: ConfigService

  beforeAll(async () => {
    const app = await Test.createTestingModule({
      providers: [AppService, ConfigService],
    }).compile();

    service = app.get<AppService>(AppService);
    configService = app.get<ConfigService>(ConfigService);
  });

  describe('getData', () => {
    it('should return "Hello API"', () => {
      expect(service.getData()).toEqual({ message: 'Hello API' });
    });
  });
});
