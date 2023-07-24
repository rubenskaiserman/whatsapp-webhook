import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class WhatsappManagerService {
  constructor() {}

  private logger = new Logger(WhatsappManagerService.name);
}
