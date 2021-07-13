import React, { useState, createRef } from 'react';
import classnames from 'classnames';

import './CodeEntry.style.scss';
import { Props } from './CodeEntry.types';
import CodeEntryDigit from '../CodeEntryDigit';


const CodeEntry = (props: Props) => {
  const {className, numDigits} = props;
  const [currentBox, setCurrentBox] = useState(0)

  const initialState = [];
  for (let i=0; i < numDigits; i++) {
    initialState.push({ref: createRef()})
  }


  const [digits, setDigits] = useState(initialState)


  const onCodeEntryChange = (digitIndex, value) => {
    digits[digitIndex].value = value;
    setDigits(digits);

    let nextBox = currentBox + 1;
    if (nextBox >= numDigits) {
      console.log('complete')
    } else {
      digits[currentBox + 1].ref.current.focus();
      setCurrentBox(currentBox + 1);
    }
  }

  console.log('digits', digits);

  const boxes = []
  for (let i=0; i < numDigits; i++) {
    boxes.push(<CodeEntryDigit key={i} index={i} inputRef={digits[i].ref} onCodeEntryChange={onCodeEntryChange}></CodeEntryDigit>);
  }
  // Implementation goes here
  return <div className='wrapper'>{boxes}</div>;
};

/**
 * TODO: Add description of component here.
 */

export default CodeEntry;

