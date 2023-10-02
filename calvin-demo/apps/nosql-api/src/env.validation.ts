import { plainToInstance } from 'class-transformer';
import { IsNotEmpty, IsInt, validateSync, ValidateIf } from 'class-validator';
import { Logger } from '@nestjs/common';

class Configuration {
  @IsNotEmpty({ message: 'Environment variable: ENVIRONMENT is missing' })
  ENVIRONMENT: string;
}

export function validate(config: Record<string, unknown>) {
  const validatedConfig = plainToInstance(Configuration, config, { enableImplicitConversion: true });

  const errors = validateSync(validatedConfig, { skipMissingProperties: false, dismissDefaultMessages: true });

  if (errors.length > 0) {
    errors.forEach((e) => {
      if (e.constraints) {
        Object.values(e.constraints).forEach((c) => Logger.error(c));
      }
    });

    process.exit(1);
  }

  return validatedConfig;
}
