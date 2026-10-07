import React from 'react';
import CompactAttachmentUpload from './CompactAttachmentUpload';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <CompactAttachmentUpload onValueChange={value=>console.info(value)}/>; }
