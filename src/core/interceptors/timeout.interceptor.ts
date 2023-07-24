import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from "@nestjs/common";
import { timeout } from "rxjs/operators";

@Injectable()
export class TimeoutInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler) {
    const messageLenght = context.switchToHttp().getRequest().socket.bytesRead;
    // if message contains more than 1000k, timeout will be set to 30s
    // if message contains more than 50k, timeout will be set to 18s
    // otherwise timeout is 8s
    const timer = messageLenght > 1000000 ? 30000 : messageLenght > 50000 ? 18000 : 8000;
    console.log("timer: " + timer);
    return next.handle().pipe(timeout(timer));
  }
}
