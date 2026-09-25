import React from 'react';
import LgcComboboxesLens from './LgcComboboxesLens';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <LgcComboboxesLens onValueChange={value=>console.info(value)}/>; }
