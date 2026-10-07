import React from 'react';
import RibbonEndProgress from './RibbonEndProgress';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <RibbonEndProgress onValueChange={value=>console.info(value)}/>; }
