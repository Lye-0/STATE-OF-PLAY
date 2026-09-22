import React from 'react';
import ObsidianRange from './ObsidianRange';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <ObsidianRange onValueChange={value=>console.info(value)}/>; }
