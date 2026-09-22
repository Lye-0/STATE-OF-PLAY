import React,{useState} from 'react';
import NixieSegments,{type SegmentItem} from './NixieSegments';
// Stable values, not positional indices. Add/remove items here; layout is not fixed to 3.
const items:readonly SegmentItem[]=[
{value:"choice-1",label:"Low"},
{value:"choice-2",label:"Mid"},
{value:"choice-3",label:"High"}
];
export default function Example(){const[value,setValue]=useState('choice-2');return <NixieSegments items={items} value={value} onValueChange={setValue} aria-label="Nixie Selector" name="displayMode"/>;}
