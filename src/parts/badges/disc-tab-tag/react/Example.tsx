import React from 'react';
import DiscTabTag from './DiscTabTag';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <DiscTabTag onValueChange={value=>console.info(value)}/>; }
