import React from 'react';
import OutlineDocumentUpload from './OutlineDocumentUpload';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <OutlineDocumentUpload onValueChange={value=>console.info(value)}/>; }
