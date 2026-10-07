import React from 'react';
import ReceiptDateCalendar from './ReceiptDateCalendar';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <ReceiptDateCalendar onValueChange={value=>console.info(value)}/>; }
