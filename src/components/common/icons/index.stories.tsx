import type { Meta, StoryObj } from '@storybook/react';

import {
  ArrowCircleUpIcon,
  AtIcon,
  BookIcon,
  BookOpenIcon,
  CaretDownIcon,
  ChatBubblesIcon,
  ChatTextIcon,
  CheckedBoxIcon,
  ColorGoogleIcon,
  CowIcon,
  DangerIcon,
  DashboardIcon,
  DetailIcon,
  DummyIcon,
  ExperimentIcon,
  FilterIcon,
  GitHubIcon,
  GitHubOctocatIcon,
  GridIcon,
  HeartIcon,
  HomeIcon,
  InformationIcon,
  JsonIcon,
  LeafIcon,
  LineIcon,
  ListIcon,
  LogoutIcon,
  MailIcon,
  OutlineBlockIcon,
  ProfileIcon,
  QrCodeIcon,
  QuillPenIcon,
  SearchIcon,
  SendIcon,
  SettingIcon,
  StopIcon,
  TbExternalLinkIcon,
  TouchIcon,
  TwitterIcon,
  UnCheckedBoxIcon,
  UpdateIcon,
  YouTubeIcon,
  ZennIcon,
} from '.';

export default {
  title: 'Icons/icon',
  argTypes: {
    size: {
      control: {
        type: 'range',
        min: 10,
        max: 100,
        step: 1,
      },
    },
  },
} as Meta<{ size: number }>;

export const Default: StoryObj<{ size: number }> = {
  render: (args) => (
    <div className="flex w-80 flex-wrap gap-2">
      <ArrowCircleUpIcon size={args.size} />
      <AtIcon size={args.size} />
      <BookIcon size={args.size} />
      <BookOpenIcon size={args.size} />
      <CaretDownIcon size={args.size} />
      <ChatBubblesIcon size={args.size} />
      <ChatTextIcon size={args.size} />
      <CheckedBoxIcon size={args.size} />
      <ColorGoogleIcon size={args.size} />
      <CowIcon size={args.size} />
      <DangerIcon size={args.size} />
      <DashboardIcon size={args.size} />
      <DetailIcon size={args.size} />
      <DummyIcon size={args.size} />
      <ExperimentIcon size={args.size} />
      <FilterIcon size={args.size} />
      <GitHubIcon size={args.size} />
      <GitHubOctocatIcon size={args.size} />
      <GridIcon size={args.size} />
      <HeartIcon size={args.size} />
      <HomeIcon size={args.size} />
      <InformationIcon size={args.size} />
      <JsonIcon size={args.size} />
      <LeafIcon size={args.size} />
      <LineIcon size={args.size} />
      <ListIcon size={args.size} />
      <LogoutIcon size={args.size} />
      <MailIcon size={args.size} />
      <OutlineBlockIcon size={args.size} />
      <ProfileIcon size={args.size} />
      <QrCodeIcon size={args.size} />
      <QuillPenIcon size={args.size} />
      <SearchIcon size={args.size} />
      <SendIcon size={args.size} />
      <SettingIcon size={args.size} />
      <StopIcon size={args.size} />
      <TbExternalLinkIcon size={args.size} />
      <TouchIcon size={args.size} />
      <TwitterIcon size={args.size} />
      <UnCheckedBoxIcon size={args.size} />
      <UpdateIcon size={args.size} />
      <YouTubeIcon size={args.size} />
      <ZennIcon size={args.size} />
    </div>
  ),
  args: {
    size: 40,
  },
};
