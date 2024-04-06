import {
  Action,
  Command,
  Ctx,
  Hears,
  On,
  Start,
  Update,
} from 'nestjs-telegraf';
import { text } from 'stream/consumers';
import { Context, Markup } from 'telegraf';
import { callback } from 'telegraf/typings/button';
import { BotService } from './bot.service';

@Update()
export class BotUpdate {
  constructor(private readonly botService: BotService) {}

  //-------------------------------------------------
  @Start()
  async onStart(@Ctx() ctx: Context) {
        ctx.reply("EMAIL")
    // this.botService.start(ctx);
  }

//   @On('contact')
//   async onContact(@Ctx() ctx: Context) {
//     await this.botService.onContact(ctx);
//   }

   @On("message")
   async onEmail(@Ctx() ctx:Context) {
    console.log(ctx);
    
    
   }


}
