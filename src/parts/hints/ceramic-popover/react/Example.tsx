import React from 'react';
import CeramicPopover from './CeramicPopover';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <CeramicPopover onValueChange={value=>console.info(value)}/>; }
