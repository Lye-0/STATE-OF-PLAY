import React from 'react';
import SteppedDockUpload from './SteppedDockUpload';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <SteppedDockUpload onValueChange={value=>console.info(value)}/>; }
