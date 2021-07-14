import CodeInput from '.';
import {mount} from 'enzyme';
import React from 'react';

describe('CodeInput', () => {
  describe('snapshot', () => {
    it('should match snapshot', () => {
      
      const container = mount(<CodeInput numDigits={6} />);
      
      expect(container).toMatchSnapshot();
    });
  });

  describe('attributes', () => {
    it('should have X value', () => {
      /* ...attribute tests... */
    });
  });
});
