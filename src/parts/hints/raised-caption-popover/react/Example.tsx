import React from 'react';
import RaisedCaptionPopover from './RaisedCaptionPopover';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <RaisedCaptionPopover onValueChange={value=>console.info(value)}/>; }
