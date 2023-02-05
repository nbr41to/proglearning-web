import type { FC } from 'react';

import { ExternalLinkIcon } from '@/components/common/icons';
import { useHover } from '@mantine/hooks';
import Image from 'next/image';
import Link from 'next/link';

type Props = {
  githubId: string | null;
};

export const GitHubGlass: FC<Props> = ({ githubId }) => {
  const { hovered, ref } = useHover();

  return (
    <div className="p-2">
      {githubId ? (
        <div ref={ref}>
          <a
            className="relative block"
            href={`https://github.com/${githubId}`}
            target="_blank"
            rel="noreferrer"
          >
            <Image
              src={`https://github-contributions-api.deno.dev/${githubId}.svg?no-total=true&no-legend=true&`}
              alt="github-contributions"
              width={680}
              height={120}
              priority
              sizes="(max-width: 680px) 100vw, 680px"
            />
            {hovered && (
              <ExternalLinkIcon
                className="absolute top-2 -right-4 text-gray-600"
                size={24}
              />
            )}
          </a>
        </div>
      ) : (
        <div className="border-3 grid h-[120px] w-[680px] place-content-center rounded-lg border-solid border-green-500 font-bold text-green-500">
          GitHub IDを設定することで、Contributionsが表示されます！
          <Link className="mt-2 text-center text-green-500" href="/setting">
            設定する
          </Link>
        </div>
      )}
    </div>
  );
};
