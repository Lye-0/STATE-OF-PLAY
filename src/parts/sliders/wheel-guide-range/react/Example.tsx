import React from 'react';
import WheelGuideRange from './WheelGuideRange';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <WheelGuideRange onValueChange={value=>console.info(value)}/>; }
