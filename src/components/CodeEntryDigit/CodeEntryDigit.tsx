import React from 'react';
import { useFocusRing} from '@react-aria/focus';
import {useFocus} from '@react-aria/interactions'
import './CodeEntryDigit.style.scss';
import { Props } from './CodeEntryDigit.types';

const CodeEntryDigit = (props: Props) => {
  const { onCodeEntryChange, index, inputRef } = props;
  let { isFocusVisible } = useFocusRing({isTextInput: true, autoFocus: index === 0});
  let { focusProps } = useFocus({
    onFocus: () => {
      console.log('on focus', inputRef.current);
      inputRef.current.value = '';
    },
  });
  // Implementation goes here

   return (
     <input
       pattern="[0-9]{1}"
       onKeyDown={(event) => {
         console.log(event.target);
       }}
       ref={inputRef}
       maxLength={1}
       // style={{
       //   WebkitAppearance: 'none',
       //   appearance: 'none',
       //   background: 'green',
       //   border: 'none',
       //   color: 'white',
       //   fontSize: 14,
       //   padding: '4px 8px',
       //   outline: isFocusVisible ? '2px solid dodgerblue' : 'none',
       //   outlineOffset: 2,
       // }}
       {...focusProps}
       className={isFocusVisible ? 'code-entry-digit focus' : 'code-entry-digit'}
       onInput={(event: React.ChangeEvent<HTMLInputElement>) => {
         onCodeEntryChange(index, event.target.value);
       }}
     />
   );
};

/**
 * TODO: Add description of component here.
 */

export default CodeEntryDigit;

