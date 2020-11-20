import { getRepository, Repository } from 'typeorm';

import IUserRepository from './interfaces/IUserRepository';

import User from '../models/User';

class UserRepository implements IUserRepository {
  private ormRepository: Repository<User>;

  constructor() {
    this.ormRepository = getRepository(User);
  }

  public async create(userData: User): Promise<User> {
    const user = this.ormRepository.create(userData);

    await this.ormRepository.save(user);

    return user;
  }
}

export default UserRepository;
