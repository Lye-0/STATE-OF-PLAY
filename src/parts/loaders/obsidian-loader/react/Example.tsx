import React from 'react';
import ObsidianLoader from './ObsidianLoader';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <ObsidianLoader onValueChange={value=>console.info(value)}/>; }
