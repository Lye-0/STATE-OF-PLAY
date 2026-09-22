import React from 'react';
import BotanicalTags from './BotanicalTags';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <BotanicalTags onValueChange={value=>console.info(value)}/>; }
