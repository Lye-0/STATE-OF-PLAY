import React from 'react';
import RivetedTag from './RivetedTag';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <RivetedTag onValueChange={value=>console.info(value)}/>; }
