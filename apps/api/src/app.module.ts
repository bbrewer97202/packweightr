import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Item } from './items/items.entity';
import { ItemsModule } from './items/items.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

const isDebug = process.env.DEBUG === 'true';

console.log('---------------------------');
console.log('POSTGRES_HOST', process.env.POSTGRES_HOST);
console.log('POSTGRES_PASSWORD', process.env.POSTGRES_PASSWORD);
console.log('---------------------------');

@Module({
  imports: [
      ServeStaticModule.forRoot({
        rootPath: join(__dirname, '../..', 'client', 'dist')
      }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: parseInt(process.env.POSTGRES_PORT) || 5432,
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DB,
      entities: [Item],
      synchronize: true,
      logging: isDebug,
    }),
    ItemsModule,
  ],
})
export class AppModule {}
