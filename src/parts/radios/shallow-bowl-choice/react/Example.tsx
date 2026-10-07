import React from 'react';
import ShallowBowlChoice from './ShallowBowlChoice';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <ShallowBowlChoice onValueChange={value=>console.info(value)}/>; }
