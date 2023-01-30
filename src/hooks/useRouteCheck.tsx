import type { Url } from 'url';

import { useGetAccountStatus } from '@/hooks/supabaseHook/useGetAccountStatus';
import { paths } from '@/utils/url';
import { openConfirmModal } from '@mantine/modals';
import { useUser } from '@supabase/auth-helpers-react';
import { useRouter } from 'next/router';

export const useRouteCheck = () => {
  const router = useRouter();
  const user = useUser();
  const { data: userStatus } = useGetAccountStatus(user?.id);
  const isCheckedOut = userStatus?.checked_out;

  const routeCheckPush = async (url: string | Url) => {
    const isString = typeof url === 'string';
    if (
      paths.loggedIn.some((p) => (isString ? p === url : p === url.pathname)) &&
      !isCheckedOut
    ) {
      openConfirmModal({
        title: 'You are not checked out',
        children: 'Please check out before you start learning.',
        labels: { confirm: '登録する', cancel: 'キャンセル' },
        onConfirm: () => router.push('/entry'),
      });
    }

    return await router.push(url);
  };

  return {
    push: routeCheckPush,
    back: router.back,
    reload: router.reload,
    replace: router.replace,
    prefetch: router.prefetch,
  };
};
