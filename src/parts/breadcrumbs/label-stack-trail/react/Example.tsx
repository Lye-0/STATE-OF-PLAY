import React from 'react';
import LabelStackTrail from './LabelStackTrail';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <LabelStackTrail onValueChange={value=>console.info(value)}/>; }
