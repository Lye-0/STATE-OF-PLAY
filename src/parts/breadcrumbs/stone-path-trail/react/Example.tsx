import React from 'react';
import StonePathTrail from './StonePathTrail';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <StonePathTrail onValueChange={value=>console.info(value)}/>; }
