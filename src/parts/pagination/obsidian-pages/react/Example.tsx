import React from 'react';
import ObsidianPages from './ObsidianPages';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <ObsidianPages onValueChange={value=>console.info(value)}/>; }
