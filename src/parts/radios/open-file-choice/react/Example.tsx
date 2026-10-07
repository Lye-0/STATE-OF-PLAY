import React from 'react';
import OpenFileChoice from './OpenFileChoice';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <OpenFileChoice onValueChange={value=>console.info(value)}/>; }
