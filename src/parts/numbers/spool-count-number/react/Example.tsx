import React from 'react';
import SpoolCountNumber from './SpoolCountNumber';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <SpoolCountNumber onValueChange={value=>console.info(value)}/>; }
