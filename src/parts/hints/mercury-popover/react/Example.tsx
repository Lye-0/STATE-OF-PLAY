import React from 'react';
import MercuryPopover from './MercuryPopover';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <MercuryPopover onValueChange={value=>console.info(value)}/>; }
