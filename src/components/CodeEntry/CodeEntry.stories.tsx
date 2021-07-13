import React from 'react';
import { Story } from '@storybook/react';

import CodeEntry, { CodeEntryProps } from './';

import ThemeProvider from '../ThemeProvider';

export default {
  title: 'Momentum UI/CodeEntry',
  component: CodeEntry,
  argTypes: {
    propName: {
      description: 'Description with what the prop does.',
      options: ['Value 1', 'Value 2'],
      control: { type: 'select' }, // change as needed
    },
  },
};

const Template: Story<CodeEntryProps> = (args) => (
  <ThemeProvider>
    <CodeEntry {...args} />
  </ThemeProvider>
);

const Story1 = Template.bind({});

Story1.args = {
  propName: 'Value 1',
  numDigits: 5
};

export { Story1 };
