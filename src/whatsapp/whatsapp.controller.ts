import { Body, Controller, Logger, Post, Get, Patch, HttpCode } from '@nestjs/common';
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

  @Patch('teste')
  @ApiOperation({
    summary: "trying to receive a message from whatsapp"
  })
  @HttpCode(200)
  async receiveMessage(@Body() body: any) {
    this.logger.log(body);
  }
}
