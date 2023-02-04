import { useStaticSWR } from '@/hooks/useStaticSWR';

/**
 * Loading状態を管理するHook
 * pages層またはTemplates層のみで使用する想定
 */
export const useInViewIds = () => {
  const { data, mutate } = useStaticSWR<string[]>('inViewHeadingAtom', []);

  return { data: data || [], mutate };
};
