import React from 'react';
import SoftChoice from './SoftChoice';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <SoftChoice onValueChange={value=>console.info(value)}/>; }
