import React from 'react';
import OutlineLoader from './OutlineLoader';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <OutlineLoader onValueChange={value=>console.info(value)}/>; }
