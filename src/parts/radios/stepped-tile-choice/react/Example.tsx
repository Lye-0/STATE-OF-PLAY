import React from 'react';
import SteppedTileChoice from './SteppedTileChoice';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <SteppedTileChoice onValueChange={value=>console.info(value)}/>; }
