import React from 'react';
import LgcSlidersMist from './LgcSlidersMist';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <LgcSlidersMist onValueChange={value=>console.info(value)}/>; }
