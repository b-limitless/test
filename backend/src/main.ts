import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);
  const corsOrigins = configService.get<string>('CORS_ORIGIN');
  const port = configService.get<string>('PORT');

  app.enableCors({
    origin: corsOrigins,  // Only allow requests from localhost:3001
    credentials: true,                // Allow credentials if needed (for cookies, authorization headers, etc.)
  });
  
  await app.listen(port || 3000);
}
bootstrap();
