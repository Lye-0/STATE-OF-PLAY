import React from 'react';
import ArchiveLabelHint from './ArchiveLabelHint';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <ArchiveLabelHint onValueChange={value=>console.info(value)}/>; }
