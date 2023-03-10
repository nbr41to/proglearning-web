import { Text } from '@mantine/core';
import Image from 'next/image';

export const Hero2 = () => {
  return (
    <div className="select-none py-12 text-center sp:pt-2 sp:pb-10">
      <div className="">
        <div className="flex flex-col items-center justify-center gap-8 py-8 sp:gap-4">
          <div className="flex items-center gap-3 font-sans text-5xl font-bold sp:text-3xl">
            <Text variant="gradient">Renewal official site</Text>
            <span>🎉</span>
          </div>
          <div className="flex items-center gap-3">
            <Image
              className="sp:hidden"
              src="/logo.png"
              alt="site logo"
              width={80}
              height={80}
              sizes="400px"
              priority
            />
            <Image
              className="hidden sp:block"
              src="/logo.png"
              alt="site logo"
              width={48}
              height={48}
              sizes="200px"
              priority
            />
            <div className="font-baloo text-5xl sp:text-3xl">progLearning</div>
          </div>
          <Text
            className="font-sans text-4xl font-bold sp:text-xl"
            variant="gradient"
            gradient={{ from: 'gray', to: 'dark', deg: 45 }}
          >
            新しい春に向けて、 `Power Up` します
          </Text>
          <Text className="font-sans text-xl font-bold sp:text-lg">
            新規参加者募集中！
          </Text>
        </div>
      </div>
    </div>
  );
};
