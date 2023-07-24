import { Injectable } from "@nestjs/common";

@Injectable()
export class CoreService {
  getStatus() {
    return { status: 200, message: "Healthy!" };
  }
}
