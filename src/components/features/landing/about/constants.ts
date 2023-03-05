import {
  BookIcon,
  CodeBadgeIcon,
  DetailIcon,
  HeartIcon,
  LeafIcon,
  MagicWandBoldIcon,
  PenIcon,
  PeopleIcon,
  ReactIcon,
  SettingIcon,
  WizardHatIcon,
} from '@/components/common/icons';

export const aboutNavLinks = [
  {
    id: 'overview',
    label: '概要',
    icon: DetailIcon,
    disabled: false,
    children: [
      {
        id: 'concepts',
        label: 'Concepts',
        icon: BookIcon,
      },
      {
        id: 'contents',
        label: 'Contents',
        icon: BookIcon,
      },
      {
        id: 'communications',
        label: 'Communications',
        icon: BookIcon,
      },
    ],
  },
  {
    id: 'start-learning',
    label: '学びを始めよう',
    icon: LeafIcon,
    disabled: false,
    children: [
      {
        id: 'why-learning',
        label: 'リスキリングの重要性',
        icon: BookIcon,
      },
    ],
  },
  {
    id: 'learning-programming',
    label: 'プログラミングを学ぶ',
    icon: CodeBadgeIcon,
    disabled: false,
    children: [
      {
        id: 'this-is-magic',
        label: 'それは魔法を学ぶこと',
        icon: WizardHatIcon,
      },
      {
        id: 'this-is-magic',
        label: '魔法を体験する',
        icon: MagicWandBoldIcon,
      },
    ],
  },
  {
    id: 'what-can-i-do',
    label: '提供できるもの',
    icon: ReactIcon,
    disabled: false,
    children: [
      {
        id: 'first-child',
        label: 'First child link',
        icon: BookIcon,
      },
    ],
  },
  {
    id: 'community-for-learners',
    label: '学びたい人が集まる場',
    icon: PeopleIcon,
    disabled: false,
    children: [
      {
        id: 'first-child',
        label: 'First child link',
        icon: BookIcon,
      },
    ],
  },
  {
    id: 'activities',
    label: '活動内容',
    icon: PenIcon,
    disabled: false,
    children: [
      {
        id: 'first-child',
        label: 'First child link',
        icon: BookIcon,
      },
    ],
  },
  {
    id: 'latest-and-best-environment',
    label: '最新な最適な環境で',
    icon: SettingIcon,
    disabled: false,
    children: [
      {
        id: 'first-child',
        label: 'First child link',
        icon: BookIcon,
      },
    ],
  },
  {
    id: 'use-psychology',
    label: '心理学を活用する',
    disabled: false,
    icon: HeartIcon,
    children: [
      {
        id: 'first-child',
        label: 'First child link',
        icon: BookIcon,
      },
    ],
  },
  {
    id: 'teaching-materials',
    label: '教材 (Coming soon)',
    disabled: true,
    icon: BookIcon,
    children: [
      {
        id: 'first-child',
        label: 'First child link',
        icon: BookIcon,
      },
    ],
  },
];
