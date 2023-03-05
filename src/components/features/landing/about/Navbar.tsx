import type { FC } from 'react';

import { aboutNavLinks } from './constants';
import { ExternalLinkIcon } from '@/components/common/icons';
import { NavLink } from '@mantine/core';
import { useRouter } from 'next/router';
import { useState, createElement } from 'react';

type Props = {
  inViewIds: string[];
};
export const Navbar: FC<Props> = ({ inViewIds }) => {
  const router = useRouter();
  const [opendIds, setOpnedIds] = useState<string[]>([]);

  return (
    <div>
      {aboutNavLinks.map((link) => (
        <NavLink
          key={link.id}
          label={link.label}
          disabled={link.disabled}
          color="cyan"
          active={inViewIds.includes(link.id)}
          opened={opendIds.includes(link.id)}
          icon={createElement(link.icon)}
          childrenOffset={28}
          onClick={() => {
            setOpnedIds((prev) => {
              if (prev.includes(link.id)) {
                return prev.filter((id) => id !== link.id);
              } else {
                return [...prev, link.id];
              }
            });
          }}
        >
          {link.children.map((child) => (
            <NavLink
              key={child.id}
              color="gray"
              label={
                <p className={inViewIds.includes(child.id) ? 'font-bold' : ''}>
                  {child.label}
                </p>
              }
              icon={createElement(child.icon)}
              onClick={() => router.push(`/about#${child.id}`)}
            />
          ))}
        </NavLink>
      ))}
      <NavLink
        label="お問い合わせ"
        color="cyan"
        rightSection={<ExternalLinkIcon />}
        onClick={() => router.push('/contact')}
      />
    </div>
  );
};
