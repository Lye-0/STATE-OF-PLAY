import React from 'react';
import OutlineProgress from './OutlineProgress';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <OutlineProgress onValueChange={value=>console.info(value)}/>; }
