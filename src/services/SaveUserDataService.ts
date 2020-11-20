// import { getRepository } from 'typeorm';

import User from '../models/User';

import IAddressRepository from '../repositories/interfaces/IAddressRepository';
import ICompanyRepository from '../repositories/interfaces/ICompanyRepository';
import IUserRepository from '../repositories/interfaces/IUserRepository';

import ApiJsonPlaceHolder from '../apis/ApiJsonPlaceHolder';

class SaveUserDataService {
  constructor(
    private addressRepository: IAddressRepository,
    private companyRepository: ICompanyRepository,
    private userRepository: IUserRepository,
  ) {}

  public async execute(): Promise<User[]> {
    const response = await ApiJsonPlaceHolder.get<User[]>('users');

    const filteredUsers = response.data.filter(user => {
      return user.address.suite.toLowerCase().includes('suite');
    });

    // const addressRepository = getRepository(Address);
    // const companyRepository = getRepository(Company);
    // const userRepository = getRepository(User);

    const users = await Promise.all(
      filteredUsers.map(async user => {
        const {
          id,
          name,
          username,
          email,
          phone,
          website,
          address,
          company,
        } = user;

        // const addressEntity = addressRepository.create(address);
        // const addressSaved = await addressRepository.save(addressEntity);

        const addressSaved = await this.addressRepository.create(address);

        // const companyEntity = companyRepository.create(company);
        // const companySaved = await companyRepository.save(companyEntity);

        const companySaved = await this.companyRepository.create(company);

        // const userEntity = userRepository.create({
        //   id,
        //   name,
        //   username,
        //   email,
        //   phone,
        //   website,
        //   address: addressSaved,
        //   company: companySaved,
        // });
        // const userSaved = await userRepository.save(userEntity);

        const userSaved = this.userRepository.create({
          id,
          name,
          username,
          email,
          phone,
          website,
          address: addressSaved,
          company: companySaved,
        });

        return userSaved;
      }),
    );

    return users;
  }
}

export default SaveUserDataService;
