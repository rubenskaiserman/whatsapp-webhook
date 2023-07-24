import { Body, Controller, Logger, Post, Get } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { WhatsappManagerService } from './whatsapp.service';

@ApiTags('WhatsappManager')
@Controller('whatsapp-manager')
export class WhatsappManagerController {
  private logger = new Logger(WhatsappManagerController.name);
  constructor(
    private readonly whatsappManagerService: WhatsappManagerService,
  ) {}

  @Get('send-message')
  @ApiOperation({
    summary: 'Just an example function for building this controller',
  })
  async getUserCode() {

    return {
      message: "Hello, World!",
    };
  }
}
