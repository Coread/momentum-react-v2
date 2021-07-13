import React from 'react';
import classnames from 'classnames';

import './ReactPinInput.style.scss';
import { Props } from './ReactPinInput.types';
import PinInput from 'react-pin-input';

const ReactPinInput = (props: Props) => {
  const {className} = props;

  // Implementation goes here
  // return <div />;
  return <PinInput
    length={6}
    initialValue=""
    onChange={(value, index) => {}}
    type="numeric"
    inputMode="number"
    style={{ padding: '10px' }}
    inputStyle={{
      fontFamily: 'CiscoSansTT Regular',
      display: 'block',
      float: 'left',
      width: '44px', 
    height: '48px',
    border: '1px solid rgba(0, 0, 0, 0.5)',
    boxSizing: 'border-box',
    borderRadius: '8px',
    margin: '0px 8px',
    fontSize: '26px',
    lineHeight: '48px',
    textAlign: 'center' }}
    inputFocusStyle={{ background: 'rgba(0, 0, 0, 0.11)' }}
    onComplete={(value, index) => {}}
    autoSelect={true}
    // regexCriteria={/^[ A-Za-z0-9_@./#&+-]*$/}
  />;
};

/**
 * TODO: Add description of component here.
 */

export default ReactPinInput;

