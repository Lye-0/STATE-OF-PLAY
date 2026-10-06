import React from 'react';
import CrescentMeter from './CrescentMeter';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <CrescentMeter onValueChange={value=>console.info(value)}/>; }
