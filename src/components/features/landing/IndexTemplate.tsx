import type { FC } from 'react';

import { ChevronLeftIcon, ChevronRightIcon } from '@/components/common/icons';
import { Description } from '@/components/features/landing/Description';
import { Hero } from '@/components/features/landing/Hero';
import { Introduction } from '@/components/features/landing/Introduction';
import { News } from '@/components/features/landing/News';
import { Carousel } from '@mantine/carousel';
import { createStyles } from '@mantine/core';
import Autoplay from 'embla-carousel-autoplay';
import { useRef } from 'react';

const useStyles = createStyles((_theme, _params, getRef) => ({
  root: {
    '&:hover': {
      [`& .${getRef('controls')}`]: {
        opacity: 1,
      },
    },
  },
  controls: {
    ref: getRef('controls'),
    transition: 'opacity 150ms ease',
    opacity: 0,
  },
  indicators: {
    gap: 12,
  },
  indicator: {
    width: 8,
    height: 8,
    backgroundColor: '#999',

    '&[data-active]': {
      backgroundColor: '#666',
    },
  },
}));

export const IndexTemplate: FC = () => {
  const { classes } = useStyles();
  const autoplay = useRef(Autoplay({ delay: 3000 }));

  return (
    <div className="w-main mx-auto space-y-16 pb-60">
      <Carousel
        classNames={classes}
        withIndicators
        slideGap="md"
        nextControlIcon={<ChevronRightIcon />}
        previousControlIcon={<ChevronLeftIcon />}
        plugins={[autoplay.current]}
        controlSize={40}
      >
        <Carousel.Slide>
          <Hero />
        </Carousel.Slide>
        <Carousel.Slide>
          <Hero />
        </Carousel.Slide>
        <Carousel.Slide>
          <Hero />
        </Carousel.Slide>
      </Carousel>

      <Description />
      <Introduction />
      <News />
    </div>
  );
};
