import React, {useState} from 'react';
import StitchStarRating from './StitchStarRating';
const initial = {
  "label": "この体験を評価する",
  "defaultValue": 3,
  "max": 5,
  "clearable": true
};
export default function Example() {const [value,setValue]=useState(3);return <StitchStarRating {...initial} value={value} onValueChange={setValue} />;}
