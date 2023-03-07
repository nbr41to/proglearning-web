import type { FC } from 'react';

import { useIntersection } from '@mantine/hooks';
import { useEffect } from 'react';

type Props = {
  headding: 2 | 3;
  title: string;
  id: string;
  setInViewIds: React.Dispatch<React.SetStateAction<string[]>>;
  children: React.ReactNode;
};
export const IntersectionWrapper: FC<Props> = ({
  headding,
  title,
  id,
  setInViewIds,
  children,
}) => {
  const { ref, entry } = useIntersection({
    threshold: 1,
    rootMargin: '0px',
  });

  useEffect(() => {
    if (!entry) return;
    if (entry.isIntersecting) {
      setInViewIds((prev) => [...prev, id]);
    } else {
      setInViewIds((prev) => prev.filter((prevId) => prevId !== id));
    }
  }, [entry, id, setInViewIds]);

  return (
    <div ref={ref}>
      {headding === 2 && <h2 id={id}>{title}</h2>}
      {headding === 3 && <h3 id={id}>{title}</h3>}
      {children}
    </div>
  );
};
