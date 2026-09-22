import React from 'react';
import SoftPopover from './SoftPopover';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <SoftPopover onValueChange={value=>console.info(value)}/>; }
