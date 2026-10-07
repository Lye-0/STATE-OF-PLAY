import React from 'react';
import NumberedPocketChoice from './NumberedPocketChoice';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <NumberedPocketChoice onValueChange={value=>console.info(value)}/>; }
