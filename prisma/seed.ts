/* eslint-disable no-console */

import testAccounts from './test-accounts.json';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const uid = '5899f99d-a449-4bfa-8769-19c097aaf1f5';

  /* Create seed my account */
  const account = await prisma.account.upsert({
    where: { uid },
    update: {},
    create: {
      uid,
      name: 'test-user-google-account-name',
      email: 'test@example.com',
      os: 'mac',
      byFind: 'twitter',
      github_id: 'adamwathan',
      zenn_id: 'takepepe',
      slack_user_id: 'test-slack-user-id',
      profile: {
        create: {
          name: 'Administrator-name',
          introduction: 'Hello World',
        },
      },
      payment: {
        create: {
          stripe_customer_id: null,
          stripe_checkout_status: null,
          stripe_subscription_status: null,
          stripe_subscription_id: null,
        },
      },
      status: {
        create: {
          role: 'admin',
          checked_out: true,
        },
      },
    },
  });
  console.log('Created seed my account:', account);

  /* Create seed other accounts */
  await Promise.all(
    testAccounts.map(async (account) => {
      const createdAccount = await prisma.account.upsert({
        where: { uid: account.uid },
        update: {},
        create: account as any,
      });
      console.log('Created seed other account:', createdAccount);
    })
  );
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
