import React from 'react';
import LgcRadiosMist from './LgcRadiosMist';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <LgcRadiosMist onValueChange={value=>console.info(value)}/>; }
