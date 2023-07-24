import { Controller, Get, Logger, UseGuards } from "@nestjs/common";
import { User } from "./decorators/user.decorator";
import { ApiBearerAuth, ApiOperation, ApiTags } from "@nestjs/swagger";
import { CoreService } from "./core.service";

@ApiTags("Core")
@Controller()
export class CoreController {
  private logger = new Logger(CoreController.name);

  constructor(private readonly coreService: CoreService) {}

  @Get()
  @ApiOperation({ summary: "Server Status" })
  getStatus() {
    this.logger.verbose(`Healthy`);
    return this.coreService.getStatus();
  }

  @Get("/secure")
  @ApiBearerAuth()
  @ApiOperation({ summary: "Secure Server Status" })
  getAuthStatus(@User() user: any) {
    this.logger.verbose(`Logged`);
    this.logger.debug(`User: ${JSON.stringify(user)}`);
    return this.coreService.getStatus();
  }
}
