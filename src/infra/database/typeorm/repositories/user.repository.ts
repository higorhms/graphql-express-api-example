import { DeepPartial, getRepository, Repository } from 'typeorm';

import { IUserRepository } from '../../../../domains/users/repositories/user.repository';
import { UserModel } from '../../../../domains/users/models/user.model';
import { UserEntity } from '../entities/user.entity';

export class UserRepository implements IUserRepository {
  private readonly repository: Repository<UserEntity>;

  constructor() {
    this.repository = getRepository(UserEntity);
  }

  public async findByEmail(email: string): Promise<UserModel | undefined> {
    return this.repository.findOne({ where: { email } });
  }

  public async save(todo: DeepPartial<UserModel>): Promise<UserModel> {
    return this.repository.save(todo);
  }
}
