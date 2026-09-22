import React from 'react';
import VelvetTags from './VelvetTags';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <VelvetTags onValueChange={value=>console.info(value)}/>; }
