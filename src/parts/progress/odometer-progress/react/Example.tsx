import React from 'react';
import OdometerProgress from './OdometerProgress';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <OdometerProgress onValueChange={value=>console.info(value)}/>; }
