import React from 'react';
import BotanicalPopover from './BotanicalPopover';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <BotanicalPopover onValueChange={value=>console.info(value)}/>; }
