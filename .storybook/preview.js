import '@/styles/globals.css';
import { RecoilRoot } from 'recoil';
import { MantineProvider } from '@/components/layouts/Providers/MantineProvider';

export const parameters = {
  backgrounds: {
    default: 'white',
    values: [
      { name: 'white', value: '#ffffff' },
      { name: 'black', value: '#000000' },
      { name: 'navy', value: '#1F2937' },
    ],
  },
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  // layout: 'centered',
};

export const decorators = [
  (Story) => {
    return (
      <MantineProvider>
        <RecoilRoot>
          <Story />
        </RecoilRoot>
      </MantineProvider>
    );
  },
];
