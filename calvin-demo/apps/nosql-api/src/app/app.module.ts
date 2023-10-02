import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';import { AppController } from './app.controller';
import { AppService } from './app.service';
import { validate } from '../env.validation';

@Module({
  imports: [
    ConfigModule.forRoot({
    envFilePath: ['./.env'],
    isGlobal: true, //so we don't have to add ConfigModule to imports of sub-modules
    validate, // validation function which checks if the config is valid and kills the app if is not
    validationOptions: {
      allowUnknown: false, // ignores environment vars which are not defined in the configuration.ts file
      abortEarly: true,
    },    
  })],    // Load .env file
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
