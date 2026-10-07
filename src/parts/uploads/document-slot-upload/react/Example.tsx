import React from 'react';
import DocumentSlotUpload from './DocumentSlotUpload';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <DocumentSlotUpload onValueChange={value=>console.info(value)}/>; }
