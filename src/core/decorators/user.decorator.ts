import { createParamDecorator, ExecutionContext } from "@nestjs/common";

export type CurrentUser = { userId: string; email: string; role: string };

export const User = createParamDecorator((data: unknown, ctx: ExecutionContext) => {
  const request = ctx.switchToHttp().getRequest();
  const user: CurrentUser = request.user;
  return user ?? null;
});
