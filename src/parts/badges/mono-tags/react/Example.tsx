import React from 'react';
import MonoTags from './MonoTags';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <MonoTags onValueChange={value=>console.info(value)}/>; }
