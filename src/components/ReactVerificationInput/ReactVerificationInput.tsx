import React from 'react';
import classnames from 'classnames';
import VerificationInput from 'react-verification-input';

import './ReactVerificationInput.style.scss';
import { Props } from './ReactVerificationInput.types';

const ReactVerificationInput = (props: Props) => {
  const {className} = props;

  // Implementation goes here
  return (
    <VerificationInput
      onChange={(value) => {
        if (value.length === 6) {
          console.log('complete:', value)
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
  // return <div />;
};

/**
 * TODO: Add description of component here.
 */

export default ReactVerificationInput;

