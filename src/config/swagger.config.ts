import { INestApplication } from "@nestjs/common";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";


export const swagger = (app: INestApplication) => {
  const options = new DocumentBuilder()
    .setTitle("Bevoice Auth System")
    .setExternalDoc("Swagger JSON", "/api-docs/swagger.json")
    .setDescription("API para o sistema do Bevoice Radio")
    .setVersion("1.0")
    .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup("api-docs", app, document);

  return document;
};
