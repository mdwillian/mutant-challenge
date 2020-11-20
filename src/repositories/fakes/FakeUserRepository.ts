import IUserRepository from '../interfaces/IUserRepository';

import User from '../../models/User';

class UserRepository implements IUserRepository {
  private users: User[] = [];

  public async create(user: User): Promise<User> {
    this.users.push(user);

    return user;
  }
}

export default UserRepository;
