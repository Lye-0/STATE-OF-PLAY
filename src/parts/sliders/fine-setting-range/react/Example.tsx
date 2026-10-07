import React from 'react';
import FineSettingRange from './FineSettingRange';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <FineSettingRange onValueChange={value=>console.info(value)}/>; }
