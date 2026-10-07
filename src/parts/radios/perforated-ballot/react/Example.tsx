import React from 'react';
import PerforatedBallot from './PerforatedBallot';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <PerforatedBallot onValueChange={value=>console.info(value)}/>; }
