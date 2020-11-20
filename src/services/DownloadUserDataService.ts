import User from '../models/User';

import ApiJsonPlaceHolder from '../apis/ApiJsonPlaceHolder';

class DownloadUserDataService {
  public async execute(): Promise<User[]> {
    const response = await ApiJsonPlaceHolder.get<User[]>('users');

    const users = response.data;

    return users;
  }
}

export default DownloadUserDataService;
