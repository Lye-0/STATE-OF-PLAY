import React,{useState} from 'react';
import EssentialSegments,{type SegmentItem} from './EssentialSegments';
// Stable values, not positional indices. Add/remove items here; layout is not fixed to 3.
const items:readonly SegmentItem[]=[
{value:"choice-1",label:"日"},
{value:"choice-2",label:"週"},
{value:"choice-3",label:"月"}
];
export default function Example(){const[value,setValue]=useState('choice-2');return <EssentialSegments items={items} value={value} onValueChange={setValue} aria-label="Essential Segments" name="displayMode"/>;}
