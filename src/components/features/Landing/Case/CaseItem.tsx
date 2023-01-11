import type { FC } from 'react';

type Props = {
  title: string;
  paragraph: string;
  linkTo?: 'proglearning' | 'proglab';
};

export const CaseItem: FC<Props> = ({ title, paragraph }) => {
  return (
    <div className="relative w-80 rounded border bg-white p-6 shadow-sm">
      <h3 className="mb-3 font-bold">{title}</h3>
      <p className="mb-10 text-sm leading-relaxed text-slate-500">
        {paragraph}
      </p>
    </div>
  );
};
