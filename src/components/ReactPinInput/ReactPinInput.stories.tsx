import React from 'react';
import { Story } from '@storybook/react';

import ReactPinInput, { ReactPinInputProps } from './';

import ThemeProvider from '../ThemeProvider';

export default {
  title: 'Momentum UI/ReactPinInput',
  component: ReactPinInput,
  argTypes: {
    propName: {
      description: 'Description with what the prop does.',
      options: ['Value 1', 'Value 2'],
      control: { type: 'select' }, // change as needed
    },
  },
};

const Template: Story<ReactPinInputProps> = (args) => (
  <ThemeProvider>
    <ReactPinInput {...args} />
  </ThemeProvider>
);

const Story1 = Template.bind({});

Story1.args = {
  propName: 'Value 1',
};

export { Story1 };
