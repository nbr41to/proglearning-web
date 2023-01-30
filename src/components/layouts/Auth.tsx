import type { FC, ReactNode } from 'react';

import { useGetMe } from '@/hooks/apiHook/useGetMe';
import useLoading from '@/hooks/useLoading';
import { paths } from '@/utils/url';
import { useRouter } from 'next/router';
import { useMemo, useEffect } from 'react';

type Props = {
  children: ReactNode;
};

export const Auth: FC<Props> = ({ children }) => {
  const router = useRouter();
  const { data, isLoading } = useGetMe();
  const loading = useLoading();
  const isIgnorePath = useMemo(
    () => !paths.loggedIn.some((path) => router.pathname.startsWith(path)),
    [router.pathname]
  );

  useEffect(() => {
    if (isIgnorePath) return loading.off();
    if (typeof data === 'undefined' && isLoading) {
      loading.on();
    }
    if (data === null) {
      loading.off();
      router.push('/login');
    }
    if (data) {
      loading.off();
      if (router.pathname === '/login') {
        router.push('/dashboard');
      }
    }
  }, [router, data, isLoading, loading, isIgnorePath]);

  if (isIgnorePath) return <>{children}</>;
  if (data) return <>{children}</>;

  return null;
};
