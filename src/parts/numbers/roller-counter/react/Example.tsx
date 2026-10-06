import React from 'react';
import RollerCounter from './RollerCounter';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <RollerCounter onValueChange={value=>console.info(value)}/>; }
