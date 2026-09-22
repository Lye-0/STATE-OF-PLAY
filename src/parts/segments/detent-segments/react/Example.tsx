import React,{useState} from 'react';
import DetentSegments,{type SegmentItem} from './DetentSegments';
// Stable values, not positional indices. Add/remove items here; layout is not fixed to 3.
const items:readonly SegmentItem[]=[
{value:"choice-1",label:"Fine"},
{value:"choice-2",label:"Normal"},
{value:"choice-3",label:"Bold"}
];
export default function Example(){const[value,setValue]=useState('choice-2');return <DetentSegments items={items} value={value} onValueChange={setValue} aria-label="Detent Selector" name="displayMode"/>;}
