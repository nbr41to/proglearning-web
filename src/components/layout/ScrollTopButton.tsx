import type { FC } from 'react';

import { ArrowCircleUpIcon } from '@/common/icons';
import { Button, Transition } from '@mantine/core';
import { useWindowScroll } from '@mantine/hooks';

export const ScrollTopButton: FC = () => {
  const [scroll, scrollTo] = useWindowScroll();

  return (
    <Transition transition="slide-up" mounted={scroll.y > 0}>
      {(transitionStyles) => (
        <Button
          className="shadow"
          color="orange"
          leftIcon={<ArrowCircleUpIcon size={24} />}
          style={transitionStyles}
          onClick={() => scrollTo({ y: 0 })}
        >
          Scroll to top
        </Button>
      )}
    </Transition>
  );
};
