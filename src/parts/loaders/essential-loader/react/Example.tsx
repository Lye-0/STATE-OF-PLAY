import React from 'react';
import EssentialLoader from './EssentialLoader';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <EssentialLoader onValueChange={value=>console.info(value)}/>; }
