import {
  PrimaryGeneratedColumn,
  Entity,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  Column,
  ManyToOne,
} from 'typeorm';

import { UserModel } from '../../../../domains/users/models/user.model';
import { TodoStatusEnum } from '../../../../domains/todo/enums/todo-status.enum';
import { TodoModel } from '../../../../domains/todo/models/todo.model';
import { UserEntity } from './user.entity';

@Entity('todos')
export class TodoEntity implements TodoModel {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    type: 'enum',
    enum: TodoStatusEnum,
    default: TodoStatusEnum.TODO,
  })
  status: TodoStatusEnum;

  @Column()
  title: string;

  @Column()
  description: string;

  @ManyToOne(() => UserEntity)
  user: UserModel;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;

  @DeleteDateColumn({ name: 'deleted_at' })
  deletedAt: Date;
}
