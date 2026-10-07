import React from 'react';
import WarmUnitNumber from './WarmUnitNumber';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <WarmUnitNumber onValueChange={value=>console.info(value)}/>; }
