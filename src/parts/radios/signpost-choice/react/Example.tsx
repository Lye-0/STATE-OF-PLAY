import React from 'react';
import SignpostChoice from './SignpostChoice';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <SignpostChoice onValueChange={value=>console.info(value)}/>; }
