import React from 'react';
import QuietStepProgress from './QuietStepProgress';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <QuietStepProgress onValueChange={value=>console.info(value)}/>; }
