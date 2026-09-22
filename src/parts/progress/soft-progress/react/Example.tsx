import React from 'react';
import SoftProgress from './SoftProgress';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <SoftProgress onValueChange={value=>console.info(value)}/>; }
