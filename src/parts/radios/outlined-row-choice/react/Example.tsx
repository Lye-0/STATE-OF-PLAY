import React from 'react';
import OutlinedRowChoice from './OutlinedRowChoice';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <OutlinedRowChoice onValueChange={value=>console.info(value)}/>; }
