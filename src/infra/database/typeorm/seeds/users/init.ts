import { IUserRepository } from '../../../../../domains/users/repositories/user.repository';
import { ISeed } from '../seed.protocol';

export const userExample = {
  email: `example@example.com`,
  password: `$2a$08$WiqjjR7A5KbbAlJ0mv.T9eUbi/oJH7RGnLrsmhStpWrdpgKZWOesm`,
};

export class UsersSeed implements ISeed {
  constructor(private readonly repository: IUserRepository) {}

  public async seed(): Promise<void> {
    console.log('🔖 MS TodoList -> Seeding Example user');

    const foundUser = await this.repository.findByEmail(userExample.email);

    if (!foundUser) {
      await this.repository.save(userExample);
    }
  }
}
