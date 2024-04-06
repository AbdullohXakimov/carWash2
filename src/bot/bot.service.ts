import { Injectable } from '@nestjs/common';
import { CreateBotDto } from './dto/create-bot.dto';
import { UpdateBotDto } from './dto/update-bot.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Bot } from './entities/bot.entity';
import { InjectBot } from 'nestjs-telegraf';
import { Context, Markup, Telegraf } from 'telegraf';

@Injectable()
export class BotService {
  constructor(
    @InjectModel(Bot) private botRepo: typeof Bot,
    @InjectBot(process.env.BOT_NAME) private readonly bot: Telegraf<Context>,
  ) {}
  async start(ctx: Context) {
    const userId = ctx.from.id;
  }

  
}
