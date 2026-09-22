import React,{useState} from 'react';
import UnderlineSegments,{type SegmentItem} from './UnderlineSegments';
// Stable values, not positional indices. Add/remove items here; layout is not fixed to 3.
const items:readonly SegmentItem[]=[
{value:"choice-1",label:"小"},
{value:"choice-2",label:"中"},
{value:"choice-3",label:"大"}
];
export default function Example(){const[value,setValue]=useState('choice-2');return <UnderlineSegments items={items} value={value} onValueChange={setValue} aria-label="Underline Segments" name="displayMode"/>;}
