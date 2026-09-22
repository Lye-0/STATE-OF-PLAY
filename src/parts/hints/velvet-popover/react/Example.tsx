import React from 'react';
import VelvetPopover from './VelvetPopover';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <VelvetPopover onValueChange={value=>console.info(value)}/>; }
