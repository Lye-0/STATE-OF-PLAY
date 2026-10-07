import React from 'react';
import WarmPlanChoice from './WarmPlanChoice';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <WarmPlanChoice onValueChange={value=>console.info(value)}/>; }
