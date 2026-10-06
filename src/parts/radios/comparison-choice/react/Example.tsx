import React from 'react';
import ComparisonChoice from './ComparisonChoice';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <ComparisonChoice onValueChange={value=>console.info(value)}/>; }
