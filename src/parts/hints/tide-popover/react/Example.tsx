import React from 'react';
import TidePopover from './TidePopover';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <TidePopover onValueChange={value=>console.info(value)}/>; }
