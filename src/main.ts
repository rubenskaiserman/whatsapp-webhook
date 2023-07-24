import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { urlencoded, json } from "express";
import { Logger, ValidationPipe } from "@nestjs/common";
import { swagger } from "./config/swagger.config";


import { ResquestTimerLogInterceptor } from "./core/interceptors/requestTimerLog.interceptor";
import { TimeoutInterceptor } from "./core/interceptors/timeout.interceptor"; // VERIFICAR INTERCEPTORS

async function bootstrap() {
  const logger = new Logger("Bootstrap");

  // app
  const app = await NestFactory.create(AppModule);
  app.use(json({ limit: "20mb" }));
  app.use(urlencoded({ extended: true, limit: "20mb" }));

  app.enableCors({
    origin: true,
    allowedHeaders: [
      "Authorization",
      "Origin",
      "X-Requested-With",
      "Content-Type",
      "Content-Length",
      "Accept",
    ],
    methods: "GET,HEAD,OPTIONS,PATCH,POST,DELETE",
    credentials: true,
  });
  app.useGlobalInterceptors(new ResquestTimerLogInterceptor(), new TimeoutInterceptor());
  app.useGlobalPipes(new ValidationPipe());

  // api docs
  const swaggerDoc = swagger(app);

  app.use("/api-docs/swagger.json", (req: any, res: any, next: any) => res.send(swaggerDoc));

  // server
  const port = process.env.PORT || 3001;
  await app.listen(port);
  const url = `http://localhost:${port}`;
  logger.log(`Application listening on ${url} .`);
  logger.log(`Find this API documentation at ${url}/api-docs/ .`);
}
bootstrap();
