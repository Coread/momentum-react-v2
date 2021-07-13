import React from 'react';
import classnames from 'classnames';
import ReactCodeInput from 'react-code-input';


import './CodeEntry2.style.scss';
import { Props } from './CodeEntry2.types';

const CodeEntry2 = (props: Props) => {
  const {className} = props;

  // Implementation goes here
  return (
    <ReactCodeInput
    className= 'react-code-input'
    inputStyle={{
        fontFamily: 'CiscoSansTT Regular',
        MozAppearance: 'textfield',
        borderRadius: '8px',
        border: '1px solid rgba(0, 0, 0, 0.5)',
        margin: '8px',
        paddingLeft: 0,
        paddingRight: 0,
        width: '44px',
        height: '48px',
        fontSize: '26px',
        boxSizing: 'border-box',
        textAlign: 'center',
        borderWidth: '1px'
      }}
      pattern="[0-9]"
      type="number"
      fields={6}
      inputMode="numeric"
      // filterCharsIsWhitelist={true}
      // filterChars={['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']}
    />
  );
};

/**
 * TODO: Add description of component here.
 */

export default CodeEntry2;

