import React from 'react';
import FolioStepper from './FolioStepper';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <FolioStepper onValueChange={value=>console.info(value)}/>; }
