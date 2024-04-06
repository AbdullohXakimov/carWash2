import { Module } from '@nestjs/common';
import { BotService } from './bot.service';
import { Client } from '../clients/entities/client.entity';
import { ClientsModule } from '../clients/clients.module';
import { SequelizeModule } from '@nestjs/sequelize';
import { Bot } from './entities/bot.entity';

@Module({
  imports: [SequelizeModule.forFeature([Bot, Client])],
  controllers: [],
  providers: [BotService],
})
export class BotModule {}
