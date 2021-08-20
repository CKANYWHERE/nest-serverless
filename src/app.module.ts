import {MiddlewareConsumer, Module, NestModule} from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from "@nestjs/typeorm";
import {getConnectionOptions} from "typeorm";
import {ConfigModule} from "@nestjs/config";
import {LoggerMiddleware} from "./middleware/logger.middleware";
import {UserEntity} from "./entity/user.entity";

@Module({
  imports: [ConfigModule.forRoot(),
    UserModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '192.168.9.48',
      username: process.env.DATABASE_USER,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE_NAME,
      entities: [UserEntity],
      logging: true,
      synchronize: false,
      keepConnectionAlive: true
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule{

  configure(consumer: MiddlewareConsumer): any {
    consumer.apply(LoggerMiddleware).forRoutes('*');
  }

}