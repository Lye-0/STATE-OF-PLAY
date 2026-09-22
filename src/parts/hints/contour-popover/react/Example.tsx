import React from 'react';
import ContourPopover from './ContourPopover';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <ContourPopover onValueChange={value=>console.info(value)}/>; }
