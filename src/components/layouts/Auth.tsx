import type { FC, ReactNode } from 'react';

import { unprotectedRoutes } from '@/utils/url';
import { useUser } from '@supabase/auth-helpers-react';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

type Props = {
  children: ReactNode;
};

export const Auth: FC<Props> = ({ children }) => {
  const router = useRouter();
  const user = useUser();
  const currentPath = router.asPath.split('#')[0].split('?')[0];
  const isIgnorePath = unprotectedRoutes.includes(currentPath);
  const isLoginPath = currentPath === '/login';

  useEffect(() => {
    if (isIgnorePath) return;
    if (user === null && !isLoginPath) {
      router.push('/login');
    }
    if (user && isLoginPath) {
      router.push('/dashboard');
    }
  }, [isIgnorePath, isLoginPath, router, user]);

  return isIgnorePath || isLoginPath || user ? <>{children}</> : null;
};
