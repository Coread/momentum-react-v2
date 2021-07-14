import ReactVerificationInput from '.';
import {mount} from 'enzyme';
import React from 'react';

describe('ReactVerificationInput', () => {
  describe('snapshot', () => {
    it('should match snapshot', () => {
      
      const container = mount(<ReactVerificationInput numDigits={6} />);
      
      expect(container).toMatchSnapshot();
    });
  });

  describe('attributes', () => {
    it('should have X value', () => {
      /* ...attribute tests... */
    });
  });
});
