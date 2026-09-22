import React from 'react';
import OutlineRange from './OutlineRange';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <OutlineRange onValueChange={value=>console.info(value)}/>; }
