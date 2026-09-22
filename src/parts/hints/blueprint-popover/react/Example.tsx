import React from 'react';
import BlueprintPopover from './BlueprintPopover';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <BlueprintPopover onValueChange={value=>console.info(value)}/>; }
