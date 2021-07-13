import React from 'react';
import { Story } from '@storybook/react';

import CodeEntryDigit, { CodeEntryDigitProps } from './';

import ThemeProvider from '../ThemeProvider';

export default {
  title: 'Momentum UI/CodeEntryDigit',
  component: CodeEntryDigit,
  argTypes: {
    propName: {
      description: 'Description with what the prop does.',
      options: ['Value 1', 'Value 2'],
      control: { type: 'select' }, // change as needed
    },
  },
};

const Template: Story<CodeEntryDigitProps> = (args) => (
  <ThemeProvider>
    <CodeEntryDigit {...args} />
  </ThemeProvider>
);

const Story1 = Template.bind({});

Story1.args = {
  propName: 'Value 1',
};

export { Story1 };
