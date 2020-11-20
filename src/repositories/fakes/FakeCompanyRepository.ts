import ICompanyRepository from '../interfaces/ICompanyRepository';

import Company from '../../models/Company';

class CompanyRepository implements ICompanyRepository {
  private companies: Company[] = [];

  public async create(company: Company): Promise<Company> {
    const newCompany = { ...company, id: this.companies.length + 1 };
    this.companies.push(newCompany);

    return newCompany;
  }
}

export default CompanyRepository;
