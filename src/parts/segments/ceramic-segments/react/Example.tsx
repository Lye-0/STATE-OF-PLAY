import React,{useState} from 'react';
import CeramicSegments,{type SegmentItem} from './CeramicSegments';
// Stable values, not positional indices. Add/remove items here; layout is not fixed to 3.
const items:readonly SegmentItem[]=[
{value:"choice-1",label:"Day"},
{value:"choice-2",label:"Evening"},
{value:"choice-3",label:"Night"}
];
export default function Example(){const[value,setValue]=useState('choice-2');return <CeramicSegments items={items} value={value} onValueChange={setValue} aria-label="Ceramic Selector" name="displayMode"/>;}
