import type { NextPage } from 'next';

import { useGetAccounts } from '@/hooks/apiHook/useGetAccounts';
import useLoading from '@/hooks/useLoading';
import { Table } from '@mantine/core';

const AdminUsersPage: NextPage = () => {
  const { data: accounts, isLoading } = useGetAccounts();
  useLoading(isLoading);

  return (
    <div className="mx-auto space-y-8 overflow-x-scroll px-8">
      <h1>Admin ALL Accounts</h1>
      <div>
        <Table>
          <thead>
            <tr>
              <th>profile.name</th>
              <th>email</th>
              <th>uid</th>
              <th>stripe_customer_id</th>
              <th>stripe_checkout_status</th>
              <th>stripe_subscription_status</th>
            </tr>
          </thead>
          <tbody>
            {accounts.map((account) => (
              <tr key={account.uid}>
                <td>{account.profile.name}</td>
                <td>{account.email}</td>
                <td>{account.uid}</td>
                <td>{account.payment.stripe_customer_id}</td>
                <td>{account.payment.stripe_checkout_status}</td>
                <td>{account.payment.stripe_subscription_status}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default AdminUsersPage;
