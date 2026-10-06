import React from 'react';
import EtchedLevelTrail from './EtchedLevelTrail';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <EtchedLevelTrail onValueChange={value=>console.info(value)}/>; }
