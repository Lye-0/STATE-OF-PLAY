import React from 'react';
import SoftTopicTags from './SoftTopicTags';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <SoftTopicTags onValueChange={value=>console.info(value)}/>; }
