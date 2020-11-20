import { Router } from 'express';

import DownloadUserDataService from '../services/DownloadUserDataService';
import SaveUserDataService from '../services/SaveUserDataService';

import AddressRepository from '../repositories/AddressRepository';
import CompanyRepository from '../repositories/CompanyRepository';
import UserRepository from '../repositories/UserRepository';

const userRouter = Router();

userRouter.get('/download', async (request, response) => {
  try {
    const downloadUserDataService = new DownloadUserDataService();

    const users = await downloadUserDataService.execute();

    return response.json(users);
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

userRouter.get('/save', async (request, response) => {
  try {
    const addressRepository = new AddressRepository();
    const companyRepository = new CompanyRepository();
    const userRepository = new UserRepository();

    const saveUserDataService = new SaveUserDataService(
      addressRepository,
      companyRepository,
      userRepository,
    );

    const users = await saveUserDataService.execute();

    return response.status(200).json(users);
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

export default userRouter;
