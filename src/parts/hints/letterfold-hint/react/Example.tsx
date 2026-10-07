import React from 'react';
import LetterfoldHint from './LetterfoldHint';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <LetterfoldHint onValueChange={value=>console.info(value)}/>; }
