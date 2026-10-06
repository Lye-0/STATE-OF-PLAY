import React from 'react';
import PressedNumber from './PressedNumber';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <PressedNumber onValueChange={value=>console.info(value)}/>; }
