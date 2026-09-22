import React from 'react';
import BotanicalTrail from './BotanicalTrail';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <BotanicalTrail onValueChange={value=>console.info(value)}/>; }
