import { UserModel } from '../../users/models/user.model';
import { TodoStatusEnum } from '../enums/todo-status.enum';

export interface TodoModel {
  id: string;
  status: TodoStatusEnum;
  title: string;
  description: string;
  user: UserModel;
}
