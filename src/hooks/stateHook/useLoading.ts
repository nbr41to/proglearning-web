import { useStaticSWR } from '@/hooks/useStaticSWR';
import { useEffect } from 'react';

/**
 * Loading状態を管理するHook
 * pages層またはTemplates層のみで使用する想定
 */
export const useLoading = (isLoading?: boolean) => {
  const { data, mutate } = useStaticSWR('isLoadingState', false);

  useEffect(() => {
    if (typeof isLoading !== 'boolean') return;
    if (data === isLoading) return;

    mutate(isLoading);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoading]);

  const onLoading = () => {
    mutate(true);
  };

  const offLoading = () => {
    const DEBUG_DELAY = process.env.NEXT_PUBLIC_DEBUG_DELAY;
    DEBUG_DELAY
      ? setTimeout(() => mutate(false), Number(DEBUG_DELAY))
      : mutate(false);
  };

  return { is: data || false, on: onLoading, off: offLoading };
};
