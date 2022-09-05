import { sign } from 'jsonwebtoken';

import { UserRepository } from '../../../infra/database/typeorm/repositories/user.repository';
import BCryptHashProvider from '../../../infra/hash-provider/implementations/bcrypt-hash-provider';
import { ENV } from '../../../infra/env/env';
import { errors } from '../../../infra/graphql/error/errors';
import { IHashProvider } from '../../../infra/hash-provider/protocol/hash-provider.protocol';
import { IUserRepository } from '../repositories/user.repository';

export class LoginUseCase {
  constructor(
    private usersRepository: IUserRepository,
    private hashProvider: IHashProvider,
  ) {}

  public async execute({
    email,
    password,
  }: {
    email: string;
    password: string;
  }): Promise<string> {
    const user = await this.usersRepository.findByEmail(email);

    if (!user) throw errors.unauthorized();

    const passwordMatched = await this.hashProvider.compareHash(
      password,
      user.password,
    );

    if (!passwordMatched) throw errors.unauthorized();

    const token = sign({}, ENV.apiSecret, {
      subject: user.id,
      expiresIn: '7d',
    });

    return token;
  }
}

export const loginFactory = (): LoginUseCase => {
  return new LoginUseCase(new UserRepository(), new BCryptHashProvider());
};
