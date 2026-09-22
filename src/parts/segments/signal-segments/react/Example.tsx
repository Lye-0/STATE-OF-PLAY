import React,{useState} from 'react';
import SignalSegments,{type SegmentItem} from './SignalSegments';
// Stable values, not positional indices. Add/remove items here; layout is not fixed to 3.
const items:readonly SegmentItem[]=[
{value:"choice-1",label:"Standby"},
{value:"choice-2",label:"Active"},
{value:"choice-3",label:"Live"}
];
export default function Example(){const[value,setValue]=useState('choice-2');return <SignalSegments items={items} value={value} onValueChange={setValue} aria-label="Signal Selector" name="displayMode"/>;}
