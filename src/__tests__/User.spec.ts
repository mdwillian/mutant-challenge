// import request from 'supertest';
import DownloadUserDataService from '../services/DownloadUserDataService';
import SaveUserDataService from '../services/SaveUserDataService';

import FakeAddressRepository from '../repositories/fakes/FakeAddressRepository';
import FakeCompanyRepository from '../repositories/fakes/FakeCompanyRepository';
import FakeUserRepository from '../repositories/fakes/FakeUserRepository';

describe('DownloadUserData', () => {
  it('should be able to download user datas from API', async () => {
    const downloadUserDataService = new DownloadUserDataService();
    const result = await downloadUserDataService.execute();

    expect(Array.isArray(result)).toBe(true);
    expect(result[0]).toHaveProperty('id');
  });
});

describe('SaveUserData', () => {
  it('should be able to save a users data from API who are staying in suites', async () => {
    const fakeAddressRepository = new FakeAddressRepository();
    const fakeCompanyRepository = new FakeCompanyRepository();
    const fakeUserRepository = new FakeUserRepository();

    const saveUserDataService = new SaveUserDataService(
      fakeAddressRepository,
      fakeCompanyRepository,
      fakeUserRepository,
    );

    const result = await saveUserDataService.execute();

    const userWhoAreInSuites = result.filter(user => {
      return user.address.suite.toLowerCase().includes('suite');
    });

    expect(result.length).toBe(userWhoAreInSuites.length);
  });
});
