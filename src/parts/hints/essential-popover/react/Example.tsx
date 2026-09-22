import React from 'react';
import EssentialPopover from './EssentialPopover';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <EssentialPopover onValueChange={value=>console.info(value)}/>; }
