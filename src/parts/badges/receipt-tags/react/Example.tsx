import React from 'react';
import ReceiptTags from './ReceiptTags';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <ReceiptTags onValueChange={value=>console.info(value)}/>; }
