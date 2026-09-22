import React from 'react';
import InsetPopover from './InsetPopover';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <InsetPopover onValueChange={value=>console.info(value)}/>; }
