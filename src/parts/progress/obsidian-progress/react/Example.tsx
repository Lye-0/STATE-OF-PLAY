import React from 'react';
import ObsidianProgress from './ObsidianProgress';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <ObsidianProgress onValueChange={value=>console.info(value)}/>; }
