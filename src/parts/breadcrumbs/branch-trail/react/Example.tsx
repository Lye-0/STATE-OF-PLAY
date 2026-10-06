import React from 'react';
import BranchTrail from './BranchTrail';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <BranchTrail onValueChange={value=>console.info(value)}/>; }
