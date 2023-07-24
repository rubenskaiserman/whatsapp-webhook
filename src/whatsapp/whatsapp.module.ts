import { Module } from '@nestjs/common';
import { WhatsappManagerController } from './whatsapp.controller';
import { WhatsappManagerService } from './whatsapp.service';


@Module({
  imports: [],
  providers: [WhatsappManagerService],
  controllers: [WhatsappManagerController],
})
export class WhatsappManagerModule {}
