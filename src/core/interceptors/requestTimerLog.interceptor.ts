import { CallHandler, ExecutionContext, Injectable, Logger, NestInterceptor } from "@nestjs/common";
import { Observable } from "rxjs";
import { tap } from "rxjs/operators";

@Injectable()
export class ResquestTimerLogInterceptor implements NestInterceptor {
  logger = new Logger("RequestTimer");

  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const now = Date.now();
    return next.handle().pipe(tap(() => this.logger.verbose(`Finished in ${Date.now() - now}ms`)));
  }
}
