import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { TelegrafModule } from 'nestjs-telegraf';
import { BotModule } from './bot/bot.module';
import { ClientsModule } from './clients/clients.module';
import { Client } from './clients/entities/client.entity';



@Module({
  imports: [
    TelegrafModule.forRootAsync({
      botName: process.env.BOT_NAME,
      useFactory: () => ({
        token: process.env.BOT_TOKEN,
        middlewares: [],
        include: [BotModule],
      }),
    }),
    ConfigModule.forRoot({ envFilePath: '.env', isGlobal: true }),
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: process.env.HOST,
      port: Number(process.env.P_PORT),
      username: process.env.USER,
      password: process.env.PASSWORD,
      database: process.env.DB,
      models: [Client],
      autoLoadModels: true,
      sync: { alter: true },
      logging: false,
    }),
    ClientsModule,
    BotModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
