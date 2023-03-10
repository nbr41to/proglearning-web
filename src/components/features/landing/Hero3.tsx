import { Text } from '@mantine/core';

export const Hero3 = () => {
  return (
    <div className="h-full select-none py-12 px-16 text-center sp:px-6 sp:pt-2 sp:pb-10">
      <div className="flex h-full flex-col items-center justify-center gap-8 py-8 sp:gap-4">
        <Text className="whitespace-pre font-sans text-xl font-bold sp:text-lg">
          React, Next.js, TypeScriptを
          <wbr />
          勉強したい人募集中！
        </Text>
        <Text className="font-sans text-xl font-bold sp:text-lg">
          Next.js, TypeScript, TailwindCSS, Storybook, Supabase
          <wbr />
          などのモダンな技術で作られた
          <wbr />
          このアプリを一緒に作りたい人募集中！
        </Text>
      </div>
    </div>
  );
};
