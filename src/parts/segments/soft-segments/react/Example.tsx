import React,{useState} from 'react';
import SoftSegments,{type SegmentItem} from './SoftSegments';
// Stable values, not positional indices. Add/remove items here; layout is not fixed to 3.
const items:readonly SegmentItem[]=[
{value:"choice-1",label:"低"},
{value:"choice-2",label:"標準"},
{value:"choice-3",label:"高"}
];
export default function Example(){const[value,setValue]=useState('choice-2');return <SoftSegments items={items} value={value} onValueChange={setValue} aria-label="Soft Segments" name="displayMode"/>;}
