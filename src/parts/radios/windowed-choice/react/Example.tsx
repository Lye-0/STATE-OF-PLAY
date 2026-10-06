import React from 'react';
import WindowedChoice from './WindowedChoice';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <WindowedChoice onValueChange={value=>console.info(value)}/>; }
