import React from 'react';
import AuroraStepper from './AuroraStepper';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <AuroraStepper onValueChange={value=>console.info(value)}/>; }
