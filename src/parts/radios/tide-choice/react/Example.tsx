import React from 'react';
import TideChoice from './TideChoice';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <TideChoice onValueChange={value=>console.info(value)}/>; }
