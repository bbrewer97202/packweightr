import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import 'dotenv/config';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);
  const isDebug = configService.get('DEBUG') === 'true';

  app.setGlobalPrefix('api');

  app.useGlobalPipes(
    new ValidationPipe({
      disableErrorMessages: !isDebug,
      enableDebugMessages: true,
      whitelist: true,
      transform: true,
    }),
  );

  // swagger config
  const config = new DocumentBuilder()
    .setTitle('packweightr')
    .setDescription('packweightr API')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config, {
    operationIdFactory: (controllerKey: string, methodKey: string) => methodKey,
  });
  SwaggerModule.setup('api', app, document);

  await app.listen(configService.get('PORT') || 3000);
  console.log(`Application is running on: ${await app.getUrl()}`);
}
bootstrap();
