import React from 'react';
import OutlinePopover from './OutlinePopover';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <OutlinePopover onValueChange={value=>console.info(value)}/>; }
