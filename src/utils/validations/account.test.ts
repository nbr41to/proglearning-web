import { validateCreateAccount } from './account';
import { dummy_account_create_params } from '@/models/account/mocks';

describe('validateCreateAccount', () => {
  it('should be valid', () => {
    const result = validateCreateAccount(dummy_account_create_params);

    expect(result).toEqual(dummy_account_create_params);
  });
});
