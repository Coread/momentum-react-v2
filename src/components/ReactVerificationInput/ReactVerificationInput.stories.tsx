import React from 'react';
import { Story } from '@storybook/react';

import ReactVerificationInput, { ReactVerificationInputProps } from './';

import ThemeProvider from '../ThemeProvider';

export default {
  title: 'Momentum UI/ReactVerificationInput',
  component: ReactVerificationInput,
  argTypes: {
    propName: {
      description: 'Description with what the prop does.',
      options: ['Value 1', 'Value 2'],
      control: { type: 'select' }, // change as needed
    },
  },
};

const Template: Story<ReactVerificationInputProps> = (args) => (
  <ThemeProvider>
    <ReactVerificationInput {...args} />
  </ThemeProvider>
);

const Story1 = Template.bind({});

Story1.args = {
  propName: 'Value 1',
};

export { Story1 };
