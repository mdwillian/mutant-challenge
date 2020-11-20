import Company from '../../models/Company';

export default interface ICompanyRespository {
  create(data: Company): Promise<Company>;
}
