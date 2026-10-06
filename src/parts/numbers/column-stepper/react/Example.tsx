import React from 'react';
import ColumnStepper from './ColumnStepper';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <ColumnStepper onValueChange={value=>console.info(value)}/>; }
