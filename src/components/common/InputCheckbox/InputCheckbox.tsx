import type { FC } from 'react';

import { CheckedBoxIcon, UnCheckedBoxIcon } from '@/components/common/icons';
import { useId } from 'react';

type Props = JSX.IntrinsicElements['input'] & {
  label: string;
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export const InputCheckbox: FC<Props> = ({
  label,
  checked,
  onChange,
  ...rest
}) => {
  const id = useId();

  return (
    <label htmlFor={id} className="flex cursor-pointer items-center gap-2">
      <input id={id} type="checkbox" onChange={onChange} {...rest} hidden />
      {checked ? (
        <CheckedBoxIcon className="text-teal-400" size={20} />
      ) : (
        <UnCheckedBoxIcon className="text-gray-600" size={20} />
      )}
      <span className="select-none">{label}</span>
    </label>
  );
};
