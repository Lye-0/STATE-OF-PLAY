import React from 'react';
import DraftingNoteTags from './DraftingNoteTags';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <DraftingNoteTags onValueChange={value=>console.info(value)}/>; }
