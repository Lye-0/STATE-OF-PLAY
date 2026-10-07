import React, {useState} from 'react';
import CompactScoreRating from './CompactScoreRating';
const initial = {
  "label": "この体験を評価する",
  "defaultValue": 3,
  "max": 5,
  "clearable": true
};
export default function Example() {const [value,setValue]=useState(3);return <CompactScoreRating {...initial} value={value} onValueChange={setValue} />;}
