import type { NextPage } from 'next';

import { TrashIcon } from '@/components/common/icons';
import { useGetAccounts } from '@/hooks/apiHook/useGetAccounts';
import { useLoading } from '@/hooks/stateHook/useLoading';
import { deleteUserAndAccount } from '@/models/account/api';
import { ActionIcon, Table } from '@mantine/core';

const AdminUsersPage: NextPage = () => {
  const { data: accounts, isLoading, mutate } = useGetAccounts();
  useLoading(isLoading);

  const handleDelete = async (uid: string) => {
    if (window.confirm('本当に削除しますか？')) {
      const response = await deleteUserAndAccount(uid);
      if (response) {
        await mutate();
      }
    }
  };

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
              <th>role</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {accounts.map((account) => (
              <tr key={account.uid} className="hover:bg-gray-100">
                <td>{account.profile.name}</td>
                <td>{account.email}</td>
                <td>{account.uid}</td>
                <td>{account.payment.stripe_customer_id}</td>
                <td>{account.payment.stripe_checkout_status}</td>
                <td>{account.payment.stripe_subscription_status}</td>
                <td>{account.status.role}</td>
                <td>
                  <ActionIcon
                    radius={999}
                    disabled={account.status.role === 'admin'}
                    onClick={() => handleDelete(account.uid)}
                  >
                    <TrashIcon />
                  </ActionIcon>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default AdminUsersPage;
