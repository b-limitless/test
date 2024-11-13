import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: 'http://localhost:3001',  // Only allow requests from localhost:3001
    credentials: true,                // Allow credentials if needed (for cookies, authorization headers, etc.)
  });
  
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
