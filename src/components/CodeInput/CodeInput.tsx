import React from 'react';
import classnames from 'classnames';
import VerificationInput from 'react-verification-input';

import './CodeInput.style.scss';
import { Props } from './CodeInput.types';

const ReactVerificationInput = (props: Props) => {
  const {numDigits, onComplete} = props;

  return (
    <VerificationInput
      length={numDigits}
      onChange={(value) => {
        if (value.length === 6) {
          onComplete(value);
        }
      }}
      removeDefaultStyles={true}
      validChars="0-9"
      placeholder=""
      classNames={{
        container: 'container',
        character: 'character',
        characterInactive: 'character--inactive',
        characterSelected: 'character--selected',
      }}
    />
  );
};

/**
 * TODO: Add description of component here.
 */

export default ReactVerificationInput;

