import { verify } from 'jsonwebtoken';

import { loginFactory } from '../../../domains/users/use-cases/login.use-case';
import { ENV } from '../../env/env';
import { errors } from '../error/errors';

export const authContext = async ({ req }: { req: any }) => {
  const { authorization } = req.headers;
  const { email, password } = req.body.variables;

  if (req.body.query.includes('login') && email && password) {
    const token = await loginFactory().execute({ email, password });
    return { token };
  }

  if (!authorization) throw errors.unauthorized();

  try {
    const tokenInfo = verify(authorization, ENV.apiSecret);

    return { ...(tokenInfo as any) };
  } catch (error) {
    throw errors.unauthorized();
  }
};
