import { IUser } from './user.interface';
import { Users } from './user.model';

const createUser = async (user: IUser): Promise<IUser | null> => {
  const createdUser = await Users.create(user);

  if (!createdUser) {
    throw new Error('Failed to create user');
  }
  return createdUser;
};

export const UserService = {
  createUser,
};
