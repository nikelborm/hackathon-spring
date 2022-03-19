import { createParamDecorator } from '@nestjs/common';

export const CurrentUser = createParamDecorator((_, ctx) =>
  // @ts-expect-error тут всё хорошо
  JSON.parse(ctx.getArgByIndex<Request>(2).req.session.user || 'null'),
);
