import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Item } from './items/items.entity';
import { ItemsModule } from './items/items.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { ConfigModule } from '@nestjs/config';
import { join } from 'path';
import { databaseConfig } from './config/database.config';


@Module({
  imports: [
      ConfigModule.forRoot(),
      ServeStaticModule.forRoot({
        rootPath: join(__dirname, '../..', 'client', 'dist')
      }),
    TypeOrmModule.forRoot(databaseConfig()),
    ItemsModule,
  ],
})
export class AppModule {}
