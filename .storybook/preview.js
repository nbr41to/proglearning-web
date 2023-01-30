import '../src/styles/globals.css';
import { RecoilRoot } from 'recoil';

export const parameters = {
  backgrounds: {
    default: 'white',
    values: [
      { name: 'white', value: '#ffffff' },
      { name: 'black', value: '#000000' },
    ],
  },
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  layout: 'centered',
};

export const decorators = [
  (Story) => {
    return (
      <RecoilRoot>
        <Story />
      </RecoilRoot>
    );
  },
];
