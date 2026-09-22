import React from 'react';
import EssentialProgress from './EssentialProgress';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <EssentialProgress onValueChange={value=>console.info(value)}/>; }
