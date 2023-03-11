import type { FC, ReactNode } from 'react';

import { useGetMeStatus } from '@/hooks/apiHook/useGetMeStatus';
import { unprotectedRoutes } from '@/utils/url';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

type Props = {
  children: ReactNode;
};

export const Auth: FC<Props> = ({ children }) => {
  const router = useRouter();
  const { data, isLoading } = useGetMeStatus();
  const currentPath = router.asPath.split('#')[0].split('?')[0];
  const isIgnorePath = unprotectedRoutes.includes(currentPath);
  const isLoginPath = currentPath === '/login';

  useEffect(() => {
    if (isIgnorePath) return;
    if (isLoading) return;
    if (data === null && !isLoginPath) {
      router.push('/login');
    }
    if (data && isLoginPath) {
      router.push('/dashboard');
    }
  }, [data, isLoading, isIgnorePath, isLoginPath, router]);

  return isIgnorePath || data || isLoginPath ? <>{children}</> : null;
};
