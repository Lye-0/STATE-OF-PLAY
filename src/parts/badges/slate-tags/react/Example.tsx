import React from 'react';
import SlateTags from './SlateTags';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <SlateTags onValueChange={value=>console.info(value)}/>; }
