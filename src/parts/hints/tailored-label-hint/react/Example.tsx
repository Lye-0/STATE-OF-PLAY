import React from 'react';
import TailoredLabelHint from './TailoredLabelHint';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <TailoredLabelHint onValueChange={value=>console.info(value)}/>; }
