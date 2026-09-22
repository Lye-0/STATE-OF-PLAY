import React from 'react';
import OutlineChoice from './OutlineChoice';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <OutlineChoice onValueChange={value=>console.info(value)}/>; }
