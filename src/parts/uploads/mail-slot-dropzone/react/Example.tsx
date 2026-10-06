import React from 'react';
import MailSlotDropzone from './MailSlotDropzone';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <MailSlotDropzone onValueChange={value=>console.info(value)}/>; }
