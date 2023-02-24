import {
  BookOpenIcon,
  CheckIcon,
  DashboardIcon,
  LeafIcon,
  MailIcon,
  PomodoroIcon,
  SettingIcon,
} from '@/components/common/icons';

export const userMenus = [
  {
    name: 'Dashboard',
    path: '/dashboard',
    icon: DashboardIcon,
  },
  {
    name: 'Getting Started',
    path: '/getting-started',
    icon: LeafIcon,
  },
  {
    name: 'Lessons',
    path: '/lessons',
    icon: BookOpenIcon,
  },
  {
    name: 'Todo-app',
    path: '/todo-app',
    icon: CheckIcon,
  },
  {
    name: 'Pomodoro',
    path: '/pomodoro',
    icon: PomodoroIcon,
  },
  {
    name: 'Setting',
    path: '/setting',
    icon: SettingIcon,
  },
  {
    name: 'Contact',
    path: '/contact',
    icon: MailIcon,
  },
];

export const siteMapPaths = {
  general: [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
    { name: 'Lessons', path: '/lessons' },
  ],
  user: [
    { name: 'Getting Started', path: '/getting-started' },
    { name: 'Dashboard', path: '/dashboard' },
    // { name: 'Output', path: '/output' },
    { name: 'Todo-app', path: '/todo-app' },
    { name: 'Pomodoro', path: '/pomodoro' },
    { name: 'Setting', path: '/setting' },
  ],
  auth: [
    { name: 'Sign up', path: '/entry' },
    { name: 'Login', path: '/login' },
  ],
};
