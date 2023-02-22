import type { Meta, StoryObj } from '@storybook/react';

import {
  ArrowCircleUpIcon,
  AtIcon,
  BellIcon,
  BookIcon,
  BookOpenIcon,
  CaretDownIcon,
  ChatBubblesIcon,
  ChatTextIcon,
  CheckedBoxIcon,
  ChromeIcon,
  CodeBadgeIcon,
  ColorGoogleIcon,
  CowIcon,
  CreditCardIcon,
  CreditCardOutlineIcon,
  CssIcon,
  DangerIcon,
  DashboardIcon,
  DatabaseIcon,
  DetailIcon,
  PeopleIcon,
  DummyIcon,
  ExperimentIcon,
  ExternalLinkIcon,
  PenIcon,
  FilterIcon,
  FirebaseIcon,
  GitHubIcon,
  GitHubOctocatIcon,
  GitIcon,
  GridIcon,
  HeartIcon,
  HomeIcon,
  HtmlIcon,
  InformationIcon,
  JavaScriptIcon,
  JsonIcon,
  LeafIcon,
  LineIcon,
  ListIcon,
  LogoutIcon,
  MagicWandIcon,
  MagicWandBoldIcon,
  MailIcon,
  NodeIcon,
  OutlineBlockIcon,
  ProfileIcon,
  PythonIcon,
  QrCodeIcon,
  QuillPenIcon,
  ReactIcon,
  SassIcon,
  SearchIcon,
  SendIcon,
  SettingIcon,
  StopIcon,
  TerminalIcon,
  TouchIcon,
  TwitterIcon,
  UnCheckedBoxIcon,
  UpdateIcon,
  VscodeIcon,
  WizardHatIcon,
  WordpressIcon,
  YouTubeIcon,
  ZennIcon,
  ShakeIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  NotionIcon,
  CheckIcon,
  TrashIcon,
} from '.';
import { IconWrapper } from '@/components/common/icons/IconViewWrapper';

export default {
  title: 'Icons/icons',
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

export const GeneralIcons: StoryObj<{ size: number }> = {
  render: (args) => (
    <div className="">
      <p className="text-center text-xl font-bold">Click to copy the name</p>
      <div className="mt-4 grid grid-cols-6 gap-y-4 bg-gray-100 p-2">
        <IconWrapper name="ArrowCircleUpIcon">
          <ArrowCircleUpIcon size={args.size} />
        </IconWrapper>
        <IconWrapper name="ArrowCircleUpIcon">
          <ArrowCircleUpIcon size={args.size} />
        </IconWrapper>
        <IconWrapper name="AtIcon">
          <AtIcon size={args.size} />
        </IconWrapper>
        <IconWrapper name="BellIcon">
          <BellIcon size={args.size} />
        </IconWrapper>
        <IconWrapper name="BookIcon">
          <BookIcon size={args.size} />
        </IconWrapper>
        <IconWrapper name="BookOpenIcon">
          <BookOpenIcon size={args.size} />
        </IconWrapper>
        <IconWrapper name="CaretDownIcon">
          <CaretDownIcon size={args.size} />
        </IconWrapper>
        <IconWrapper name="ChatBubblesIcon">
          <ChatBubblesIcon size={args.size} />
        </IconWrapper>
        <IconWrapper name="ChevronLeftIcon">
          <ChevronLeftIcon size={args.size} />
        </IconWrapper>
        <IconWrapper name="ChevronRightIcon">
          <ChevronRightIcon size={args.size} />
        </IconWrapper>
        <IconWrapper name="ChatTextIcon">
          <ChatTextIcon size={args.size} />
        </IconWrapper>
        <IconWrapper name="CheckIcon">
          <CheckIcon size={args.size} />
        </IconWrapper>
        <IconWrapper name="CheckedBoxIcon">
          <CheckedBoxIcon size={args.size} />
        </IconWrapper>
        <IconWrapper name="ColorGoogleIcon">
          <ColorGoogleIcon size={args.size} />
        </IconWrapper>
        <IconWrapper name="CowIcon">
          <CowIcon size={args.size} />
        </IconWrapper>
        <IconWrapper name="CreditCardIcon">
          <CreditCardIcon size={args.size} />
        </IconWrapper>
        <IconWrapper name="CreditCardOutlineIcon">
          <CreditCardOutlineIcon size={args.size} />
        </IconWrapper>
        <IconWrapper name="DangerIcon">
          <DangerIcon size={args.size} />
        </IconWrapper>
        <IconWrapper name="DashboardIcon">
          <DashboardIcon size={args.size} />
        </IconWrapper>
        <IconWrapper name="DetailIcon">
          <DetailIcon size={args.size} />
        </IconWrapper>
        <IconWrapper name="DummyIcon">
          <DummyIcon size={args.size} />
        </IconWrapper>
        <IconWrapper name="ExperimentIcon">
          <ExperimentIcon size={args.size} />
        </IconWrapper>
        <IconWrapper name="ExternalLinkIcon">
          <ExternalLinkIcon size={args.size} />
        </IconWrapper>
        <IconWrapper name="FilterIcon">
          <FilterIcon size={args.size} />
        </IconWrapper>
        <IconWrapper name="GitHubIcon">
          <GitHubIcon size={args.size} />
        </IconWrapper>
        <IconWrapper name="GitHubOctocatIcon">
          <GitHubOctocatIcon size={args.size} />
        </IconWrapper>
        <IconWrapper name="GridIcon">
          <GridIcon size={args.size} />
        </IconWrapper>
        <IconWrapper name="HeartIcon">
          <HeartIcon size={args.size} />
        </IconWrapper>
        <IconWrapper name="HomeIcon">
          <HomeIcon size={args.size} />
        </IconWrapper>
        <IconWrapper name="InformationIcon">
          <InformationIcon size={args.size} />
        </IconWrapper>
        <IconWrapper name="JsonIcon">
          <JsonIcon size={args.size} />
        </IconWrapper>
        <IconWrapper name="LeafIcon">
          <LeafIcon size={args.size} />
        </IconWrapper>
        <IconWrapper name="LineIcon">
          <LineIcon size={args.size} />
        </IconWrapper>
        <IconWrapper name="ListIcon">
          <ListIcon size={args.size} />
        </IconWrapper>
        <IconWrapper name="LogoutIcon">
          <LogoutIcon size={args.size} />
        </IconWrapper>
        <IconWrapper name="MagicWandIcon">
          <MagicWandIcon size={args.size} />
        </IconWrapper>
        <IconWrapper name="MagicWandBoldIcon">
          <MagicWandBoldIcon size={args.size} />
        </IconWrapper>
        <IconWrapper name="MailIcon">
          <MailIcon size={args.size} />
        </IconWrapper>
        <IconWrapper name="NotionIcon">
          <NotionIcon size={args.size} />
        </IconWrapper>
        <IconWrapper name="OutlineBlockIcon">
          <OutlineBlockIcon size={args.size} />
        </IconWrapper>
        <IconWrapper name="PeopleIcon">
          <PeopleIcon size={args.size} />
        </IconWrapper>
        <IconWrapper name="PenIcon">
          <PenIcon size={args.size} />
        </IconWrapper>
        <IconWrapper name="ProfileIcon">
          <ProfileIcon size={args.size} />
        </IconWrapper>
        <IconWrapper name="QrCodeIcon">
          <QrCodeIcon size={args.size} />
        </IconWrapper>
        <IconWrapper name="QuillPenIcon">
          <QuillPenIcon size={args.size} />
        </IconWrapper>
        <IconWrapper name="ShakeIcon">
          <ShakeIcon size={args.size} />
        </IconWrapper>
        <IconWrapper name="SearchIcon">
          <SearchIcon size={args.size} />
        </IconWrapper>
        <IconWrapper name="SendIcon">
          <SendIcon size={args.size} />
        </IconWrapper>
        <IconWrapper name="SettingIcon">
          <SettingIcon size={args.size} />
        </IconWrapper>
        <IconWrapper name="StopIcon">
          <StopIcon size={args.size} />
        </IconWrapper>
        <IconWrapper name="TouchIcon">
          <TouchIcon size={args.size} />
        </IconWrapper>
        <IconWrapper name="TrashIcon">
          <TrashIcon size={args.size} />
        </IconWrapper>
        <IconWrapper name="TwitterIcon">
          <TwitterIcon size={args.size} />
        </IconWrapper>
        <IconWrapper name="UnCheckedBoxIcon">
          <UnCheckedBoxIcon size={args.size} />
        </IconWrapper>
        <IconWrapper name="UpdateIcon">
          <UpdateIcon size={args.size} />
        </IconWrapper>
        <IconWrapper name="WizardHatIcon">
          <WizardHatIcon size={args.size} />
        </IconWrapper>
        <IconWrapper name="YouTubeIcon">
          <YouTubeIcon size={args.size} />
        </IconWrapper>
        <IconWrapper name="ZennIcon">
          <ZennIcon size={args.size} />
        </IconWrapper>
      </div>
    </div>
  ),
  args: {
    size: 40,
  },
};

export const DevIcons: StoryObj<{ size: number }> = {
  render: (args) => (
    <div className="">
      <p className="text-center text-xl font-bold">Click to copy the name</p>
      <div className="mt-4 grid grid-cols-6 gap-y-4">
        <IconWrapper name="ChromeIcon">
          <ChromeIcon size={args.size} />
        </IconWrapper>
        <IconWrapper name="CodeBadgeIcon">
          <CodeBadgeIcon size={args.size} />
        </IconWrapper>
        <IconWrapper name="CssIcon">
          <CssIcon size={args.size} />
        </IconWrapper>
        <IconWrapper name="DatabaseIcon">
          <DatabaseIcon size={args.size} />
        </IconWrapper>
        <IconWrapper name="FirebaseIcon">
          <FirebaseIcon size={args.size} />
        </IconWrapper>
        <IconWrapper name="GitIcon">
          <GitIcon size={args.size} />
        </IconWrapper>
        <IconWrapper name="HtmlIcon">
          <HtmlIcon size={args.size} />
        </IconWrapper>
        <IconWrapper name="JavaScriptIcon">
          <JavaScriptIcon size={args.size} />
        </IconWrapper>
        <IconWrapper name="NodeIcon">
          <NodeIcon size={args.size} />
        </IconWrapper>
        <IconWrapper name="PythonIcon">
          <PythonIcon size={args.size} />
        </IconWrapper>
        <IconWrapper name="ReactIcon">
          <ReactIcon size={args.size} />
        </IconWrapper>
        <IconWrapper name="SassIcon">
          <SassIcon size={args.size} />
        </IconWrapper>
        <IconWrapper name="TerminalIcon">
          <TerminalIcon size={args.size} />
        </IconWrapper>
        <IconWrapper name="VscodeIcon">
          <VscodeIcon size={args.size} />
        </IconWrapper>
        <IconWrapper name="WordpressIcon">
          <WordpressIcon size={args.size} />
        </IconWrapper>
      </div>
    </div>
  ),
  args: {
    size: 40,
  },
};
