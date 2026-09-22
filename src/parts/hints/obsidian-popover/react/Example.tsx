import React from 'react';
import ObsidianPopover from './ObsidianPopover';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <ObsidianPopover onValueChange={value=>console.info(value)}/>; }
