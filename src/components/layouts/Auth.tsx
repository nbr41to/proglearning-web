import type { FC, ReactNode } from 'react';

import { useGetMe } from '@/hooks/apiHook/useGetMe';
import { useLoading } from '@/hooks/stateHook/useLoading';
import { unprotectedRoutes } from '@/utils/url';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

type Props = {
  children: ReactNode;
};

export const Auth: FC<Props> = ({ children }) => {
  const router = useRouter();
  const { data, isLoading } = useGetMe();
  const loading = useLoading();
  const currentPath = router.asPath.split('#')[0].split('?')[0];
  const isIgnorePath = unprotectedRoutes.includes(currentPath);
  const isLoginPath = currentPath === '/login';

  useEffect(() => {
    if (isIgnorePath) return loading.off();
    if (typeof data === 'undefined' && isLoading) {
      loading.on();
    }
    if (data === null && !isLoginPath) {
      router.push('/login');
    }
    if (data && isLoginPath) {
      router.push('/dashboard');
    }
    loading.off();
  }, [router, data, isLoading, loading, isIgnorePath, isLoginPath]);

  return isIgnorePath || data || isLoginPath ? <>{children}</> : null;
};
