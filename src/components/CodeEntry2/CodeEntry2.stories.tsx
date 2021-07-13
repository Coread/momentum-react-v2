import React from 'react';
import { Story } from '@storybook/react';

import CodeEntry2, { CodeEntry2Props } from './';

import ThemeProvider from '../ThemeProvider';

export default {
  title: 'Momentum UI/ReactCodeInput',
  component: CodeEntry2,
  argTypes: {
    propName: {
      description: 'Description with what the prop does.',
      options: ['Value 1', 'Value 2'],
      control: { type: 'select' }, // change as needed
    },
  },
};

const Template: Story<CodeEntry2Props> = (args) => (
  <ThemeProvider>
    <CodeEntry2 {...args} />
  </ThemeProvider>
);

const Story1 = Template.bind({});

Story1.args = {
  propName: 'Value 1',
};

export { Story1 };
