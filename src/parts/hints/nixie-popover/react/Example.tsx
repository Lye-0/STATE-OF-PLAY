import React from 'react';
import NixiePopover from './NixiePopover';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <NixiePopover onValueChange={value=>console.info(value)}/>; }
