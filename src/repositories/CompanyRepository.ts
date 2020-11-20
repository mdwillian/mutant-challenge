import { getRepository, Repository } from 'typeorm';

import ICompanyRepository from './interfaces/ICompanyRepository';

import Company from '../models/Company';

class CompanyRepository implements ICompanyRepository {
  private ormRepository: Repository<Company>;

  constructor() {
    this.ormRepository = getRepository(Company);
  }

  public async create(CompanyData: Company): Promise<Company> {
    const company = this.ormRepository.create(CompanyData);

    await this.ormRepository.save(company);

    return company;
  }
}

export default CompanyRepository;
