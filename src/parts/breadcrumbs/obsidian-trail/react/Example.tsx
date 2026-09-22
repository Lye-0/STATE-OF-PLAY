import React from 'react';
import ObsidianTrail from './ObsidianTrail';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <ObsidianTrail onValueChange={value=>console.info(value)}/>; }
