import React from 'react';
import { Story } from '@storybook/react';
import { THEME_PROVIDER_CONSTANTS } from '../ThemeProvider';

import ReactVerificationInput, { ReactVerificationInputProps } from './';

import ThemeProvider from '../ThemeProvider';
import { ThemeNames } from '../ThemeProvider/ThemeProvider.types';

export default {
  title: 'Momentum UI/ReactVerificationInput',
  component: ReactVerificationInput,
  argTypes: {
    numDigits: {
      description: 'Number of boxes',
    },
    theme: {
      description: 'The name of the target theme to use.',
      options: [...Object.values(THEME_PROVIDER_CONSTANTS.THEME_NAMES)],
      control: { type: 'select' },
    },
  },
};

interface StoryProps extends ReactVerificationInputProps {
  theme: ThemeNames;
}

const Template: Story<StoryProps> = (args) => {
  const {theme} = args;
  return <ThemeProvider theme={theme}>
    <div style={{
      display: 'inline-block',
      padding: '2rem',
      backgroundColor: 'var(--theme-background-solid-primary-normal)'
    }}>
      <ReactVerificationInput {...args} />
    </div>
  </ThemeProvider>
};

const Story1 = Template.bind({});

Story1.args = {
  theme: 'lightWebex',
  numDigits: 6,
};

export { Story1 };
