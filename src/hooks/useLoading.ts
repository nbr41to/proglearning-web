import { isLoadingAtom } from '@/recoil/atoms';
import { useEffect } from 'react';
import { useRecoilState } from 'recoil';

/**
 * Loading状態を管理するHook
 * pages層またはTemplates層のみで使用する想定
 */
const useLoading = (isLoading?: boolean) => {
  const [loading, setLoading] = useRecoilState(isLoadingAtom);

  useEffect(() => {
    if (typeof isLoading !== 'boolean') return;
    if (loading === isLoading) return;

    setLoading(isLoading);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoading]);

  const onLoading = () => {
    setLoading(true);
  };

  const offLoading = () => {
    const DEBUG_DELAY = process.env.NEXT_PUBLIC_DEBUG_DELAY;
    DEBUG_DELAY
      ? setTimeout(() => setLoading(false), Number(DEBUG_DELAY))
      : setLoading(false);
  };

  return { is: loading, on: onLoading, off: offLoading };
};

export default useLoading;
