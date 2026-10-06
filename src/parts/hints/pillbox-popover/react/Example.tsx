import React from 'react';
import PillboxPopover from './PillboxPopover';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <PillboxPopover onValueChange={value=>console.info(value)}/>; }
