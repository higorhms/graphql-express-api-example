import { UserModel } from '../models/user.model';

export interface IUserRepository {
  save: (item: Partial<UserModel>) => Promise<UserModel>;
  findByEmail: (email: string) => Promise<UserModel | undefined>;
}
