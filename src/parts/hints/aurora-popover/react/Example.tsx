import React from 'react';
import AuroraPopover from './AuroraPopover';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <AuroraPopover onValueChange={value=>console.info(value)}/>; }
