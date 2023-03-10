import type {
  AccountPrismaUpdateParams,
  AccountValidatedCreateParams,
  SelectItemByFindValue,
  SelectItemOsValue,
} from '@/models/account/types';

import { faker } from '@/libs/faker';

export const dummy_account = {
  uid: faker.datatype.uuid(),
  name: faker.name.fullName(),
  email: faker.internet.email(),
  os: faker.helpers.arrayElement<SelectItemOsValue>([
    'mac',
    'windows',
    'others',
  ]),
  byFind: faker.helpers.arrayElement<SelectItemByFindValue>([
    'twitter',
    'youtube',
    'zenn',
    'search',
    'invite',
    'others',
  ]),
  github_id: 'test-github-id',
  zenn_id: 'test-zenn-id',
  slack_user_id: 'test-slack-user-id',
  createdAt: new Date('2023-01-01T00:00:00.000Z'),
  updatedAt: new Date('2023-01-01T00:00:00.000Z'),
} as const;

export const dummy_account_create_params: AccountValidatedCreateParams = {
  email: dummy_account.email,
  name: dummy_account.name,
  profileName: dummy_account.name,
  os: dummy_account.os,
  byFind: dummy_account.byFind,
};

export const dummy_account_update_params: AccountPrismaUpdateParams = {
  name: dummy_account.name,
  os: dummy_account.os,
  github_id: dummy_account.github_id,
  zenn_id: dummy_account.zenn_id,
};
