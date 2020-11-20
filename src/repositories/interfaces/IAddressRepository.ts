import Address from '../../models/Address';

export default interface IAddressRespository {
  create(data: Address): Promise<Address>;
}
