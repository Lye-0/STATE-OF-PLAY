import React from 'react';
import SlatePopover from './SlatePopover';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <SlatePopover onValueChange={value=>console.info(value)}/>; }
