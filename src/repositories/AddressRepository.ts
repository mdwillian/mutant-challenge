import { getRepository, Repository } from 'typeorm';

import IAddressRepository from './interfaces/IAddressRepository';

import Address from '../models/Address';

class AddressRepository implements IAddressRepository {
  private ormRepository: Repository<Address>;

  constructor() {
    this.ormRepository = getRepository(Address);
  }

  public async create(CompanyData: Address): Promise<Address> {
    const address = this.ormRepository.create(CompanyData);

    await this.ormRepository.save(address);

    return address;
  }
}

export default AddressRepository;
