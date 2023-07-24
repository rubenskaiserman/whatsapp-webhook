import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { WhatsappManagerModule } from './whatsapp/whatsapp.module';

@Module({
  imports: [ConfigModule.forRoot(), WhatsappManagerModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
