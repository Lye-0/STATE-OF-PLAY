import React from 'react';
import SoftCardChoice from './SoftCardChoice';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <SoftCardChoice onValueChange={value=>console.info(value)}/>; }
