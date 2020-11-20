import IAddressRepository from '../interfaces/IAddressRepository';

import Address from '../../models/Address';

class AddressRepository implements IAddressRepository {
  private addresses: Address[] = [];

  public async create(address: Address): Promise<Address> {
    const newAddress = { ...address, id: this.addresses.length + 1 };

    this.addresses.push(newAddress);

    return newAddress;
  }
}

export default AddressRepository;
