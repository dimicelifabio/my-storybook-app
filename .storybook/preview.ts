import type { Preview } from '@storybook/react'

const preview: Preview = {
  parameters: {
    actions: {argTyperRegex: "^on[A,Z].*"},
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/,
      },
    },
  },
};

export default preview;