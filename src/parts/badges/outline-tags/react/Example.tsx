import React from 'react';
import OutlineTags from './OutlineTags';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <OutlineTags onValueChange={value=>console.info(value)}/>; }
