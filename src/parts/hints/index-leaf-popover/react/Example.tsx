import React from 'react';
import IndexLeafPopover from './IndexLeafPopover';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <IndexLeafPopover onValueChange={value=>console.info(value)}/>; }
