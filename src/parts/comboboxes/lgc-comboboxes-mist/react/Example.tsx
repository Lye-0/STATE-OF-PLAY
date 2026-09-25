import React from 'react';
import LgcComboboxesMist from './LgcComboboxesMist';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <LgcComboboxesMist onValueChange={value=>console.info(value)}/>; }
