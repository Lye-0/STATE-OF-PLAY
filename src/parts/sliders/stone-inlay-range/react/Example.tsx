import React from 'react';
import StoneInlayRange from './StoneInlayRange';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <StoneInlayRange onValueChange={value=>console.info(value)}/>; }
