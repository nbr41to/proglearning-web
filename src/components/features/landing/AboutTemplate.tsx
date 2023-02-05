import type { FC } from 'react';

import {
  ChatBubblesIcon,
  HeartIcon,
  MagicWandBoldIcon,
  NotionIcon,
  PeopleIcon,
  WizardHatIcon,
} from '@/components/common/icons';
import { PageTitle } from '@/components/common/PageTitle';
import { Tabs } from '@mantine/core';

export const AboutTemplate: FC = () => {
  return (
    <div className="w-main mx-auto">
      <PageTitle title="About" />

      <Tabs defaultValue="1" orientation="vertical" color="secondary">
        <Tabs.List>
          <Tabs.Tab value="2" icon={<WizardHatIcon />}>
            プログラミング（魔法）を学ぶ
          </Tabs.Tab>
          <Tabs.Tab value="3" icon={<MagicWandBoldIcon />}>
            魔法を体験する
          </Tabs.Tab>
          <Tabs.Tab value="4" icon={<NotionIcon />}>
            Notionを活用する
          </Tabs.Tab>
          <Tabs.Tab value="5" icon={<PeopleIcon />}>
            学びたい人のためのコミュニティ
          </Tabs.Tab>
          <Tabs.Tab value="6" icon={<ChatBubblesIcon />}>
            質問・相談し放題
          </Tabs.Tab>
          <Tabs.Tab value="7">新しい自分を見つける</Tabs.Tab>
          <Tabs.Tab value="8">怪しくても目を閉じない</Tabs.Tab>
          <Tabs.Tab value="9" icon={<HeartIcon />}>
            心理学を活用する
          </Tabs.Tab>
        </Tabs.List>

        <Tabs.Panel value="gallery">
          <div className="space-y-8 p-8">
            <PageTitle title="About" />
          </div>
        </Tabs.Panel>

        <Tabs.Panel value="messages">Messages tab content</Tabs.Panel>

        <Tabs.Panel value="settings">Settings tab content</Tabs.Panel>
      </Tabs>
    </div>
  );
};
