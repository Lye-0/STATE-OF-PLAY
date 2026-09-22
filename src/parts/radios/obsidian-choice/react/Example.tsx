import React from 'react';
import ObsidianChoice from './ObsidianChoice';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <ObsidianChoice onValueChange={value=>console.info(value)}/>; }
