import User from '../../models/User';

export default interface IUserRespository {
  create(data: User): Promise<User>;
}
