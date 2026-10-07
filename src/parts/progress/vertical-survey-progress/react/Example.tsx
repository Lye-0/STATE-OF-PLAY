import React from 'react';
import VerticalSurveyProgress from './VerticalSurveyProgress';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <VerticalSurveyProgress onValueChange={value=>console.info(value)}/>; }
