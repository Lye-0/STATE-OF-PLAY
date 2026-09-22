import React from 'react';
import FolioPopover from './FolioPopover';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <FolioPopover onValueChange={value=>console.info(value)}/>; }
