import React from 'react';
import SplitSummaryProgress from './SplitSummaryProgress';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <SplitSummaryProgress onValueChange={value=>console.info(value)}/>; }
