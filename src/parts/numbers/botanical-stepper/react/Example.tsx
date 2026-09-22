import React from 'react';
import BotanicalStepper from './BotanicalStepper';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <BotanicalStepper onValueChange={value=>console.info(value)}/>; }
