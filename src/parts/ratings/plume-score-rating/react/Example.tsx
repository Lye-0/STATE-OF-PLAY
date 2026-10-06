import React, {useState} from 'react';
import PlumeScoreRating from './PlumeScoreRating';
const initial = {
  "label": "この体験を評価する",
  "defaultValue": 3,
  "max": 5,
  "clearable": true
};
export default function Example() {const [value,setValue]=useState(3);return <PlumeScoreRating {...initial} value={value} onValueChange={setValue} />;}
