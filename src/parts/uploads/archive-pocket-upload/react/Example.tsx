import React from 'react';
import ArchivePocketUpload from './ArchivePocketUpload';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <ArchivePocketUpload onValueChange={value=>console.info(value)}/>; }
