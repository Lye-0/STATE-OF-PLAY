import React from 'react';
import RecessedDialNumber from './RecessedDialNumber';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <RecessedDialNumber onValueChange={value=>console.info(value)}/>; }
