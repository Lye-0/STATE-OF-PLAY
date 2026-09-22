import React from 'react';
import NixieTrail from './NixieTrail';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <NixieTrail onValueChange={value=>console.info(value)}/>; }
