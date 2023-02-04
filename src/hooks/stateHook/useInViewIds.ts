import { useStaticSWR } from '@/hooks/useStaticSWR';

/**
 * Loading状態を管理するHook
 * pages層またはTemplates層のみで使用する想定
 */
export const useInViewIds = () => {
  const { data, mutate } = useStaticSWR<string[]>('inViewHeadingAtom', []);

  const addId = async (id: string) => {
    const prev = data || [];
    await mutate([...prev, id]);
  };
  const removeId = async (id: string) => {
    const prev = data || [];
    await mutate(prev.filter((prevId) => prevId !== id));
  };

  return { data: data || [], addId, removeId };
};
