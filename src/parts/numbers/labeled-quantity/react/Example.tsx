import React from 'react';
import LabeledQuantity from './LabeledQuantity';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <LabeledQuantity onValueChange={value=>console.info(value)}/>; }
